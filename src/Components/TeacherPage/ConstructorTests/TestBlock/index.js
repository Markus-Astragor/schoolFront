
import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import plusImg from '../../../../images/ConstructorTests_images/plus_img.png';
import AnswerInput from "../AnswerInput";
import {v4 as uuidv4} from "uuid";

function TestBlock({GetValueMainState, index, setgetValueMain,SaveToTestInfo})
{


    const [answerLimit, setAnswerLimit] = useState(false);
    const [numberOfAnswers, setNumberOfAnswers] = useState([]);     // Масив для зберігання індексів полів для відповідей
    const [answers, setAnswers] = useState([]);         // Масив для зберігання інформації по питанню (Питання, відповідь, правильна відповідь)
    const [questionInput, setQuestionInput] = useState(''); // State для зберігання питання
    const [Show, SetShow] = useState(false); // State для trigger   



  
    function getQuestionValue(e)            // Функція для витягування питання 
    {
        setQuestionInput(e.target.value);
    }

    function addAnswer()        //Функція яка буде додавати AnswerInput при натиснені на +
    {
        if(numberOfAnswers.length >= 5)
        {
            setAnswerLimit(true);
            return;
        }
        const answerId = uuidv4();
        setNumberOfAnswers(prev=>([...prev, answerId]));
    }

    function removeAnswerInput(id)      //  Функція яка буде видаляти AnswerInput при натисканні на remove button or icon
    {
        setNumberOfAnswers(numberOfAnswers.filter(arrayId =>{return arrayId != id}));
    }

    function GetValue(inputValue, checkboxValue)           //Функція яка витягує значення з answer input
    {
        const object = {};
        object.question = questionInput;
        object.answer = inputValue;
        object.rightAnswer = checkboxValue;
        

        setAnswers(prev => ([...prev, object]));
    }

    function SetStateForShow()      // Функція яка встановлює SetShow true - для того щоб спрацював трігер в AnswerInput Useeffect
    {
        SetShow(true);
        setgetValueMainFalse();
    }

    function setgetValueMainFalse(){            //Функція яка встановлює статус кнопки на false щоб можна було знову її натиснути і отрмати дані
        setgetValueMain(false);
    }


    useEffect(()=>{             //перевірка отриманих answers (Масив з обєктами)
        if(answers.length >=1)
        {
            SaveToTestInfo(answers);
        }
       
    },[answers])

    useEffect(()=>{             // UseEffect який перевіряє чи кнопка зберегти тест була натиснута якщо так то викликається функція SetStateForShow
        if(GetValueMainState)
        {
            SetStateForShow();
            
        }
    },[GetValueMainState])

    useEffect(()=>{     //UseEffect який при першому рендері сторінки створює два інпути для answer по замовчуванню
        const answerId = uuidv4();
        setNumberOfAnswers(prev=>[...prev, answerId]);
        const answerId2 = uuidv4();
        setNumberOfAnswers(prev=>[...prev, answerId2]);
    },[])

    useEffect(()=>{         //UseEffect який при додавані answerInput в масив буде виводити масив з id (Суто для перевірки)
        console.log('numberofAnswers',numberOfAnswers);
    },[numberOfAnswers])


    
    





    return(
        <div className={styles.blockTests}>
                <h3>Питання №{index+1}</h3>
                 
                <input onChange={(e)=>{getQuestionValue(e)}} placeholder='Питання' className={styles.mainQuestion} />

                {numberOfAnswers.map((id, index) =>{
                    return(<AnswerInput index ={index+1} answerblockId={id} key={id} removeAnswerInput={removeAnswerInput} Show={Show} GetValue={GetValue} SetShow={SetShow}/>)
                })}
                

                <div className={styles.plusImg}>
                    <img src={plusImg} width='40px' height='40px' onClick={addAnswer} />
                </div>
                {answerLimit ? <div style={{color: 'red'}}>Too many answer input</div> : <div></div>}
            </div>
    );
}


export default TestBlock;