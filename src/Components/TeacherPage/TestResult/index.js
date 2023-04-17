

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



    const navigate = useNavigate();



    const testContext = useContext(Context);

    useEffect(()=>{         //  Usestate який витягує закидує дані з Context про TestInfo в State
        setTestInfo(testContext.testInfo);
    },[])

    const CopyCode = async () =>{             //Функція копіювання коду в буфер обміну
        await navigator.clipboard.writeText(testContext.testCode);
        alert("Code is copied");
        console.log('Content copied to clipboard');
    }

    const ReturnMainPage = () =>{              //Функція яка ретурнить на початкову сторінку вчителя
        navigate('/teacherpage');
    }

 



    return (
        <div className={styles.test_info}>
                
                <div className={styles.test_info_block}>

                        <div className={styles.test_info_block_top}>
                            <img onClick={ReturnMainPage} src={homeIcon} className={styles.info_block_top_icon}/>
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
                                        <span  className={styles.content_form_block_input}>{TestInfo.subject}</span>
                                    </div>
                                    <div className={styles.content_form_block}>
                                        <span className={styles.content_form_block_span}>Назва тесту:</span>
                                        <span  className={styles.content_form_block_input}>{TestInfo.testName}</span>
                                    </div>
                                    <div className={styles.content_form_block}>
                                        <span className={styles.content_form_block_span}>Тема:</span>
                                        <span  className={styles.content_form_block_input}>{TestInfo.theme}</span>
                                    </div>
                                </div>

                                <div className={styles.info_block_content_form_code}>
                                    <span className={styles.code_text}>{testContext.testCode}</span>
                                    <img onClick={CopyCode} className={styles.copyCode_imaage} src={copyIcon}/>
                                </div>
                                

                                
                            </div>
                        </div>
                </div>

        </div>
    )
}


export default TestResult;