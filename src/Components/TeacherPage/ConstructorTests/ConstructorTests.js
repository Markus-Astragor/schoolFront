import React, { useEffect, useRef, useState } from 'react';
import ConstructStyles from './ConstructorTests.module.css';
import TestBlock from './TestBlock';

import {v4 as uuidv4} from "uuid";

function ConstructorTests() {

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

    useEffect(()=>{             //Use Effect для перевірки отрмання даних на верхній рівень
        console.log('testInfoFilter');
        console.log(testInfoFilter);
    },[testInfoFilter])

    
   

    const addTestBlock = () =>{             //Функція додавання блок для питання
        const blockId = uuidv4();
        setNumberBlocks(prev => ([...prev, blockId]));
    }


    useEffect(()=>{             // UseEffect який при рендерінгу створює один блок питання по замовчуванню
        const id = uuidv4();
        setNumberBlocks(prev=> ([...prev, id]));
    },[])

    
   
    return (
        <div className={ConstructStyles.ConstructorTests}>
            <h2>Констуктор тестів</h2>
            <div>

                {numberBlocks.map((id, index) => {

                    return(<TestBlock SaveToTestInfo={SaveToTestInfo} setgetValueMain={setgetValueMain} GetValueMainState={GetValueMain} index = {index} key={id}/>)
                })}

                <div className={ConstructStyles.addTestsBtn}>
                    <button onClick={addTestBlock}>Додати блок запитань</button>
                    <button onClick={()=>{setgetValueMain(true)}} >Get Info</button>
                </div>

            </div>
            <p ref={errorParagraph} style={{ color: 'red' }}></p>
        </div>
    )
}

export default ConstructorTests;