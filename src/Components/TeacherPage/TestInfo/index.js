

import React from "react";


import styles from './style.module.css';
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TestInfo() {


    const [subject, setSubject] = useState();
    const [testName, setTestName] = useState();
    const [theme, setTheme] = useState();

    const subjectRef = useRef();
    const testNameRef = useRef();
    const themeRef = useRef();

    const navigate = useNavigate();

    function GetInputValue()
    {
        const theme = themeRef.current.value;
        const testName = testNameRef.current.value;
        const subject  = subjectRef.current.value;

     const testInfoObj = {
        theme,
        testName,
        subject
     }

     console.log(testInfoObj);

     navigate('/teacherpage/create-test');
    }



    return (
        <div className={styles.test_info}>

            <div className={styles.test_info_form}>
                <div className={styles.test_info_input_block}>
                    <span>Назва предмету</span>
                    <input ref={subjectRef} placeholder="" className={styles.test_text}/>
                </div>

                <div className={styles.test_info_input_block}>
                    <span>Тема</span>
                    <input ref={themeRef} placeholder="" className={styles.test_text}/>
                </div>

                <div className={styles.test_info_input_block}>
                    <span>Назва тесту</span>
                    <input ref={testNameRef} placeholder="" className={styles.test_text}/>
                </div>

                <div>
                    <button onClick={GetInputValue}>Конструктор Тестів</button>
                </div>
            </div>







        </div>
    )
}


export default TestInfo;