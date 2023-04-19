
import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import AnswerInput from "../AnswerInput";
import {v4 as uuidv4} from "uuid";

function TestBlock({questionInfo ,GetValueMainState, index, setgetValueMain,SaveToTestInfo})
{


    const [numberOfAnswers, setNumberOfAnswers] = useState([]);     // Масив для зберігання індексів полів для відповідей
    const [answers, setAnswers] = useState([]);         // Масив для зберігання інформації по питанню (Питання, відповідь, правильна відповідь)
    const [questionInput, setQuestionInput] = useState(questionInfo.question); // State для зберігання питання
    const [Show, SetShow] = useState(false); // State для trigger   






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


    useEffect(()=>{         //UseEffect який при додавані answerInput в масив буде виводити масив з id (Суто для перевірки)
        console.log('numberofAnswers',numberOfAnswers);
    },[numberOfAnswers])

    useEffect(()=>{     //Витягування питань блоку
        setNumberOfAnswers([...questionInfo.answers])
    },[])




    return(
        <div className={styles.blockTests}>
                <h3>Питання №{index+1}</h3>
                 
                <input  value={questionInfo.question} className={styles.mainQuestion} />
                

                {numberOfAnswers.map((question, index) =>{
                    return(<AnswerInput question={question} index ={index+1}  key={index} Show={Show} GetValue={GetValue} SetShow={SetShow}/>)
                })}
                

                
            </div>
    );
}


export default TestBlock;