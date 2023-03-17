import React, { useRef, useState } from 'react';
import ConstructStyles from './ConstructorTests.module.css';

function ConstructorTests() {
    const[createTests, setCreateTests] = useState([]);
    let[countQuestions, setCountQuestions] = useState(1);
    const errorParagraph = useRef(null);

    const addTest = () =>
    {
        if(countQuestions >=10){
            errorParagraph.current.innerText = 'Забагато тестів';
            return
        }
        counterQuestions(countQuestions);
        const testComponent =(<div className={ConstructStyles.blockTests}>
            <h3>Питання{countQuestions++}</h3>
            <input placeholder='Питання' className={ConstructStyles.mainQuestion}/>
            <input placeholder='Варіанти відповіді' className={ConstructStyles.answerVariants}/>
            <input placeholder='Правильна відповідь'className={ConstructStyles.correctAnswer}/>
        </div>);
        setCreateTests([...createTests, testComponent]);

    }

    const counterQuestions = (countQuestions) =>{
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
        <p ref={errorParagraph} style={{color: 'red'}}></p>
    </div>
  )
}

export default ConstructorTests