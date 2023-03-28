
import React from "react";
import styles from './style.module.css';
import plusImg from '../../../../images/ConstructorTests_images/plus_img.png';

function TestBlock()
{
    return(
        <div className={styles.blockTests}>
                <h3>Питання</h3>
                 {/* {countQuestions++} */}
                <input placeholder='Питання' className={styles.mainQuestion} />

                <div className={styles.AnswerVariants_and_checkbox}>
                    <input type='checkbox' className={styles.checkbox} name='mycheckbox' />
                    <input placeholder='Варіант відповіді' className={styles.answerVariants} />
                </div>

                <div className={styles.AnswerVariants_and_checkbox}>
                    <input type='checkbox' className={styles.checkbox} name='checkbox2' />
                    <input placeholder='Правильнт відповіді' className={styles.correctAnswer} />
                </div>


                <div className={styles.plusImg}>
                    <img src={plusImg} width='40px' height='40px'  />
                </div>
            </div>
    );
}


export default TestBlock;