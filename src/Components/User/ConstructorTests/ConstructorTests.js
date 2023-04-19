import React, { useEffect, useRef, useState } from 'react';
import ConstructStyles from './ConstructorTests.module.css';
import TestBlock from './TestBlock';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from "uuid";
import axios from 'axios';
import { useContext } from 'react';
import Context from '../../UseContext/indexContext';
import UserContext from '../../UseContext/userContext';

function ConstructorTests() {

    const testContext = useContext(Context);
    const userContext = useContext(UserContext);
    const [userTestInfo, setUserTestInfo] = useState();  // State для витягання даних тесту з БД і відображення їх в конструкторі
    const [isLoaded, setIsLoaded] = useState(false);



// Витягування інформації про тест з БД
    useEffect(() =>{

        const token = localStorage.getItem('token');
        const parsed_token  = JSON.parse(token);

        if(!token)
        {
            navigate('/deniedacess');
        }


        console.log('code', userContext.testUserCode);
        GetTestData();

    },[]);


    const GetTestData = async () =>{
        const {data} = await axios.get(`http://localhost:8080/find-tests?testCode=${userContext.testUserCode}`);
        console.log('data', data);
        setUserTestInfo(data);
        setIsLoaded(true);
    }


    

    const navigate = useNavigate();
    const errorParagraph = useRef(null);

    const [numberBlocks, setNumberBlocks] = useState([]);

    const [GetValueMain, setgetValueMain] = useState(false); // Triger на кнопку зберегти

    const [testInfo, setTestInfo] = useState([]); // Інфа про тест

    const [testInfoFilter, setTestInfoFilter] =  useState([]); // State для підготовленої інормації для запиту

    function SaveToTestInfo(quesionBlckInfo)        // Функція яка буде витягати дані про питання та відповіді і пушити в головний масив 
    {
        setTestInfo(prev =>([...prev, quesionBlckInfo]));
    }


    useEffect(()=>{                 //Use Effect який буде при появі інформації пушити її в масив в коректному форматі

        testInfo.forEach(qwblock =>{
            const answers = [];
            const rightAnswers=[];
            let question = '';

            qwblock.forEach(obj =>{
                 question = obj.question;
                answers.push(obj.answer);
                if(obj.rightAnswer == true)
                {
                    rightAnswers.push(obj.answer);
                }
            })

            const questionObj = {};
            questionObj.answers = answers;
            questionObj.rightAnswers = rightAnswers;
            questionObj.question = question;
            setTestInfoFilter(prev => ([...prev, questionObj]));

            
        })
    },[testInfo])

    // useEffect(()=>{             //Use Effect для перевірки отрмання даних на верхній рівень
    //     console.log('testInfoFilter');
    //     console.log(testInfoFilter);
    //     if(!testInfoFilter.length == 0 )
    //     {
    //         saveTest(testInfoFilter);
    //     }
       
        
    // },[testInfoFilter])


    function saveTest(testInfoFilter) // Функція збереження тесту в MongoDB
    {

        const token = localStorage.getItem('token');
        const parsedToken = JSON.parse(token);
        if(!parsedToken)
        {
            navigate('/deniedacess');
            return;
        }
        
        axios.post('http://localhost:8080/create-test', {
            subjectName: testContext.testInfo.subject,
            chapterName: testContext.testInfo.theme,
            testName: testContext.testInfo.testName,
            testinfo: testInfoFilter,
            token: parsedToken
        }).then(response =>{
            console.log(response);
            testContext.setTestCode(response.data.test_code)
            navigate('/teacherpage/test-info');
            
        }).catch(err =>{
            console.log(err);
            console.log("Error to save test");
        })
    }
    
   


    // useEffect(()=>{             // UseEffect який при рендерінгу створює один блок питання по замовчуванню
    //     const id = uuidv4();
    //     setNumberBlocks(prev=> ([...prev, id]));
    // },[])

    
   
    return (
        <div className={ConstructStyles.ConstructorTests}>
            <h2>Констуктор тестів</h2>

            { isLoaded ? <div>

                {userTestInfo.test_info.map((questionInfo, index) => {

                    return(<TestBlock questionInfo={questionInfo} SaveToTestInfo={SaveToTestInfo} setgetValueMain={setgetValueMain} GetValueMainState={GetValueMain} index = {index} key={index}/>)
                })}

                <div className={ConstructStyles.addTestsBtn}>
                    <button onClick={()=>{setgetValueMain(true)}} >Зберегти Тест</button>
                </div>

            </div> : <div>Wait a minute</div>}

            <p ref={errorParagraph} style={{ color: 'red' }}></p>
        </div>
    )
}

export default ConstructorTests;