

import React, { useEffect, useState } from "react";


import style from "./style.module.css";

import homeIcon from '../../../images/TeacgerPage/tests/home-icon.png';
import arrowIocn from '../../../images/TeacgerPage/tests/icon-arrow.png';
import editIcon from '../../../images/TeacgerPage/tests/free-icon-pencil-4211935 1.png';
import addIcon from '../../../images/TeacgerPage/tests/free-icon-plus-sign-3945636 1.png';
import deleteIcon from '../../../images/TeacgerPage/tests/free-icon-garbage-9945817 1.png';
import { json, useNavigate } from "react-router-dom";
import axios from "axios";


function TeacherTests(){

    const [teacherTests, setTeacherTests] = useState([]);

    const navigate = useNavigate();

    function returnTeacherPage(){
        navigate('/teacherpage');
    }

    function openTestInfo(){
        navigate('/teacherpage/create-test');
    }

    

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const parsedToken = JSON.parse(token);
        if(!parsedToken)
        {
            navigate('/deniedacess');
            return;
        }

        axios.get('http://localhost:8080/teacher-tests', {
            params:{
                token: parsedToken
            }
        }).then(response =>{
            console.log(response);
            setTeacherTests(response.data);
        }).catch(err =>{
            console.log(err);
        })
    },[])

    return(
        <div className={style.teacher_tests}>

            <div className={style.teacher_tests_info}>

                <div className={style.teacher_tests_info_navbar}>
                    <img onClick={returnTeacherPage} className={style.navbar_icon} src={homeIcon}/>
                    <span className={style.navbar_title}>Тести викладача</span>
                    <img className={style.navbar_icon} src={arrowIocn}/>
                </div>

                <div className={style.tests_content}>
                    {teacherTests.map(subject =>{
                        return(
                            <div className={style.tests_content_subject}>{subject.SubjectName}</div>
                        )
                    })}
                </div>

                <div className={style.teacher_tests_info_buttons}>
                    <div className={`${style.tests_info_btn } ${style.btn_blue}`}>
                        <span>Редагувати тест</span>
                        <img className={style.button_icon} src={editIcon}/>
                    </div>

                    <div onClick={openTestInfo} className={`${style.tests_info_btn } ${style.btn_green}`}>
                        <span>Створити тест</span>
                        <img className={style.button_icon} src={addIcon}/>
                    </div>

                    <div className={`${style.tests_info_btn } ${style.btn_red}`}>
                        <span>Видалити тест</span>
                        <img className={style.button_icon} src={deleteIcon}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default TeacherTests;