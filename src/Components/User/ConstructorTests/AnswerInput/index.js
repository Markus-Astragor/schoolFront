

import React, { useEffect, useRef, useState } from "react";

import styles from './style.module.css';


function AnswerInput({question, Show,GetValue, SetShow, index}) {


    const [inputValue, setInputValue]=useState(question);
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

            <input  onClick={SetCheckBox} type='checkbox' label={index} className={styles.checkbox} name='mycheckbox' />
            <input readOnly value={question} type='text'  ref={answerRef}   className={styles.answerVariants} />

        </div>
    )

}


export default AnswerInput;