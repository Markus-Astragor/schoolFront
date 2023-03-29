
import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import plusImg from '../../../../images/ConstructorTests_images/plus_img.png';
import AnswerInput from "../AnswerInput";
import {v4 as uuidv4} from "uuid";

function TestBlock(props)
{


    
    const [numberOfAnswers, setNumberOfAnswers] = useState([]);

    function addAnswer()
    {
        const answerId = uuidv4();
        setNumberOfAnswers(prev=>([...prev, answerId]));

    }


    useEffect(()=>{
        const answerId = uuidv4();
        setNumberOfAnswers(prev=>[...prev, answerId]);
        const answerId2 = uuidv4();
        setNumberOfAnswers(prev=>[...prev, answerId2]);
    },[])

    useEffect(()=>{
        console.log('numberofAnswers',numberOfAnswers);
    },[numberOfAnswers])



    function removeAnswerInput(id)
    {
        console.log(id);
        setNumberOfAnswers(numberOfAnswers.filter(arrayId =>{return arrayId != id}));
    }


    const [Show, SetShow] = useState(false); // State для trigger 

    function GetValue(inputValue)
    {
        SetShow(true);
        console.log(inputValue);
        // запушити значення в масив 
        
    }





    return(
        <div className={styles.blockTests}>
                <h3>Питання{props.index+1}</h3>
                 
                <input placeholder='Питання' className={styles.mainQuestion} />

                {numberOfAnswers.map((id) =>{
                    return(<AnswerInput answerblockId={id} key={id} removeAnswerInput={removeAnswerInput} Show={Show} GetValue={GetValue} SetShow={SetShow}/>)
                })}
                

                <div className={styles.plusImg}>
                    <img src={plusImg} width='40px' height='40px' onClick={addAnswer} />
                </div>
                <button onClick={GetValue}> Show</button>
            </div>
    );
}


export default TestBlock;