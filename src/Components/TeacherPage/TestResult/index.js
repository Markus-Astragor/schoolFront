

import React, { useEffect } from "react";


import styles from './style.module.css';
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from '../../UseContext/indexContext.js';

import homeIcon from '../../../images/TeacherResultPage/icon_home.png';
import bananaIcon from '../../../images/TeacherResultPage/icon-bananas.png';
import copyIcon from '../../../images/TeacherResultPage/icon-copy.png';
import taskImage from '../../../images/TeacherResultPage/task-list.png';

function TestResult() {


    const [TestInfo, setTestInfo] = useState({subject: "Математика", theme: "Інтеграли", testName: "Визначені інтеграли"}); 

    const subjectRef = useRef();
    const testNameRef = useRef();
    const themeRef = useRef();

    const navigate = useNavigate();



    const testContext = useContext(Context);

    useEffect(()=>{
        setTestInfo(testContext.testInfo);
    },[])

 



    return (
        <div className={styles.test_info}>
                
                <div className={styles.test_info_block}>

                        <div className={styles.test_info_block_top}>
                            <img src={homeIcon} className={styles.info_block_top_icon}/>
                            <span className={styles.info_block_title}>Інформація про предмет</span>
                            <img src={bananaIcon} className={`${styles.info_block_top_icon} ${styles.monkeyIcon}`}/>
                        </div>

                        <div className={styles.test_info_block_content}>

                            <div className={styles.info_block_content_image}>
                                <img className={styles.content_image} src={taskImage}/>
                            </div>

                            <div className={styles.info_block_content_form_block}>

                                <div className={styles.info_block_content_form}>
                                    <div className={styles.content_form_block}>
                                        <span className={styles.content_form_block_span}>Назва предмету:</span>
                                        <span ref={subjectRef} className={styles.content_form_block_input}>{TestInfo.subject}</span>
                                    </div>
                                    <div className={styles.content_form_block}>
                                        <span className={styles.content_form_block_span}>Назва тесту:</span>
                                        <span ref={testNameRef} className={styles.content_form_block_input}>{TestInfo.testName}</span>
                                    </div>
                                    <div className={styles.content_form_block}>
                                        <span className={styles.content_form_block_span}>Тема:</span>
                                        <span  ref={themeRef} className={styles.content_form_block_input}>{TestInfo.theme}</span>
                                    </div>
                                </div>

                                <div className={styles.info_block_content_form_code}>
                                    <span className={styles.code_text}>d8646454sa4da65455465jdsna</span>
                                    <img className={styles.copyCode_imaage} src={copyIcon}/>
                                </div>
                                

                                
                            </div>
                        </div>
                </div>

        </div>
    )
}


export default TestResult;