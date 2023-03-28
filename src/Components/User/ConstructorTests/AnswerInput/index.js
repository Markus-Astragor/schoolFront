

import React, { useEffect, useRef } from "react";

import styles from './style.module.css';


function AnswerInput(props) {


    const answerRef = useRef(null);
    

    return (
        <div  className={styles.AnswerVariants_and_checkbox}>
            <input type='checkbox' className={styles.checkbox} name='mycheckbox' />
            <input ref={answerRef}   placeholder='Варіант відповіді' className={styles.answerVariants} />
        </div>
    )

}


export default AnswerInput;