import React, { useEffect, useRef, useState } from 'react';
import ConstructStyles from './ConstructorTests.module.css';
import PlusComponent from '../../../images/plusComponent';
import plusImg from '../../../images/ConstructorTests_images/plus_img.png';

function ConstructorTests() {
    const [createTests, setCreateTests] = useState([]);
    const [createAnswer, setCreateAnswer] = useState([]);
    let [countQuestions, setCountQuestions] = useState(1);
    const errorParagraph = useRef(null);

    const addTest = () => {
        if (countQuestions >= 10) {
            errorParagraph.current.innerText = 'Забагато тестів';
            return
        }
        counterQuestions(countQuestions);

        const addAnswer = () => {
            const answerComponent = (
                <div className={ConstructStyles.AnswerVariants_and_checkbox}>
                    <input type='checkbox' className={ConstructStyles.checkbox} />
                    <input placeholder='Варіант відповіді' className={ConstructStyles.answerVariants} />
                </div>
            );
           
            setCreateAnswer((prev) => [...prev, answerComponent]);
            
                
        }


        const testComponent = (

            <div className={ConstructStyles.blockTests}>
                <h3>Питання{countQuestions++}</h3>
                <input placeholder='Питання' className={ConstructStyles.mainQuestion} />
                <div className={ConstructStyles.AnswerVariants_and_checkbox}>
                    <input type='checkbox' className={ConstructStyles.checkbox} name='mycheckbox' />
                    <input placeholder='Варіант відповіді' className={ConstructStyles.answerVariants} />
                </div>
                <div className={ConstructStyles.AnswerVariants_and_checkbox}>
                    <input type='checkbox' className={ConstructStyles.checkbox} name='checkbox2' />
                    <input placeholder='Правильнт відповіді' className={ConstructStyles.correctAnswer} />
                </div>

                {createAnswer}

                <div className={ConstructStyles.plusImg}>
                    <img src={plusImg} width='40px' height='40px' onClick={addAnswer} />
                </div>
            </div>
        );
        setCreateTests((prev) => [...prev, testComponent]);
        
    }

   


    const counterQuestions = (countQuestions) => {
        setCountQuestions(countQuestions + 1);
    }
    return (
        <div className={ConstructStyles.ConstructorTests}>
            <h2>Констуктор тестів</h2>
            <div>
                {createTests}
                <div className={ConstructStyles.addTestsBtn}>
                    <button onClick={addTest}>Додати блок запитань</button>
                </div>
            </div>
            <p ref={errorParagraph} style={{ color: 'red' }}></p>
        </div>
    )
}

export default ConstructorTests;