

import React from "react";


import styles from './style.module.css';
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from '../../UseContext/indexContext.js';
import arrowImage from '../../../images/TeacgerPage/TestInfo/icon-arrow.png';
import monkeyImage from '../../../images/TeacgerPage/TestInfo/icon-monkey.png';
import contentImage from  '../../../images/TeacgerPage/TestInfo/task-list.png';

function TestInfo() {

    const TestContext  = useContext(Context);

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
     TestContext.setTestinfo(testInfoObj);

      navigate('constructor');
    }



    return (
        <div className={styles.test_info}>
                
                <div className={styles.test_info_block}>

                        <div className={styles.test_info_block_top}>
                            <img src={arrowImage} className={styles.info_block_top_icon}/>
                            <span className={styles.info_block_title}>Інформація про предмет</span>
                            <img src={monkeyImage} className={`${styles.info_block_top_icon} ${styles.monkeyIcon}`}/>
                        </div>

                        <div className={styles.test_info_block_content}>

                            <div className={styles.info_block_content_image}>
                                <img className={styles.content_image} src={contentImage}/>
                            </div>

                            <div className={styles.info_block_content_form_block}>
                                <div className={styles.info_block_content_form}>
                                    <div className={styles.content_form_block}>
                                        <span className={styles.content_form_block_span}>Назва предмету:</span>
                                        <input ref={subjectRef} className={styles.content_form_block_input}/>
                                    </div>
                                    <div className={styles.content_form_block}>
                                        <span className={styles.content_form_block_span}>Назва тесту:</span>
                                        <input ref={testNameRef} className={styles.content_form_block_input}/>
                                    </div>
                                    <div className={styles.content_form_block}>
                                        <span className={styles.content_form_block_span}>Тема:</span>
                                        <input  ref={themeRef} className={styles.content_form_block_input}/>
                                    </div>
                                </div>

                                <button onClick={GetInputValue} className={styles.info_block_content_form_buttonk}>Далі &#8594;</button>

                                
                            </div>
                        </div>
                </div>

        </div>
    )
}


export default TestInfo;