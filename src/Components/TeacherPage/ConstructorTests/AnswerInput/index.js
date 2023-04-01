

import React, { useEffect, useRef, useState } from "react";

import styles from './style.module.css';


function AnswerInput({answerblockId, removeAnswerInput, Show,GetValue, SetShow, index}) {


    const [inputValue, setInputValue]=useState('');
    const [rightAnswer, setRightAnswer] = useState(false);

    function SetCheckBox()      //Функція яка буде отримувати значення true або false і ставати їх в State в залежності чи обраний checkBox тобто answer
    {
        if(rightAnswer == false)
        {
            setRightAnswer(true)
            return;
        } else{
            setRightAnswer(false);
        }

        
    }
    
    function NewValue(e)            // функція яка при вводі тексту в input записує його значення в useState для того щоб його можна було витягнути
    {
        setInputValue(e.target.value);
    }
    

    const answerRef = useRef();
    
    
    useEffect(()=>{         //UseEffect який слідкує за тим трігером Show для того щоб витягнути дані коли натиснута кнопка Зберети etc.
        if(Show)
        {
            GetValue(inputValue,rightAnswer);
            SetShow(false);
        }
    },[Show])


    return (
        <div  className={styles.AnswerVariants_and_checkbox}>

            <input onClick={SetCheckBox} type='checkbox' label={index} className={styles.checkbox} name='mycheckbox' />
            <input onChange={e =>{NewValue(e)}} value={inputValue} type='text'  ref={answerRef}   placeholder='Варіант відповіді' className={styles.answerVariants} />
            <button onClick={()=>{removeAnswerInput(answerblockId)}}>close</button>

        </div>
    )

}


export default AnswerInput;