

import React, { useEffect, useRef, useState } from "react";

import styles from './style.module.css';


function AnswerInput({answerblockId, removeAnswerInput, Show,GetValue, SetShow}) {


    const [inputValue, setInputValue]=useState('');

    
    function NewValue(e)
    {
        setInputValue(e.target.value);
        console.log(inputValue);
    }
    

    const answerRef = useRef();
    
    
    useEffect(()=>{
        if(Show)
        {
            GetValue(inputValue);
            SetShow(false);
        }
    },[Show])


    return (
        <div  className={styles.AnswerVariants_and_checkbox}>

            <input type='checkbox' className={styles.checkbox} name='mycheckbox' />
            <input onChange={e =>{NewValue(e)}} value={inputValue} type='text'  ref={answerRef}   placeholder='Варіант відповіді' className={styles.answerVariants} />
            <button onClick={()=>{removeAnswerInput(answerblockId)}}>close</button>

        </div>
    )

}


export default AnswerInput;