

import React from "react";

import styles from './style.module.css';


function AnswerInput() {
    return (
        <div className={styles.AnswerVariants_and_checkbox}>
            <input type='checkbox' className={styles.checkbox} name='mycheckbox' />
            <input placeholder='Варіант відповіді' className={styles.answerVariants} />
        </div>
    )

}


export default AnswerInput;