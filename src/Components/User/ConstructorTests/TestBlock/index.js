
import React, { useState } from "react";
import styles from './style.module.css';
import plusImg from '../../../../images/ConstructorTests_images/plus_img.png';
import AnswerInput from "../AnswerInput";

function TestBlock()
{


    
    const [numberOfAnswers, setNumberOfAnswers] = useState([1,1]);


    function addAnswer()
    {
        
        setNumberOfAnswers(prev=>([...prev,1]));
    }




    return(
        <div className={styles.blockTests}>
                <h3>Питання</h3>
                 
                <input placeholder='Питання' className={styles.mainQuestion} />

                {numberOfAnswers.map(el =>{
                    return(<AnswerInput/>)
                })}
                

                <div className={styles.plusImg}>
                    <img src={plusImg} width='40px' height='40px' onClick={addAnswer} />
                </div>
            </div>
    );
}


export default TestBlock;