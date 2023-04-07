

import React from "react";


import style from "./style.module.css";

import homeIcon from '../../../images/TeacgerPage/tests/home-icon.png';
import arrowIocn from '../../../images/TeacgerPage/tests/icon-arrow.png';
import editIcon from '../../../images/TeacgerPage/tests/free-icon-pencil-4211935 1.png';
import addIcon from '../../../images/TeacgerPage/tests/free-icon-plus-sign-3945636 1.png';
import deleteIcon from '../../../images/TeacgerPage/tests/free-icon-garbage-9945817 1.png';
import { useNavigate } from "react-router-dom";


function TeacherTests(){

    const navigate = useNavigate();

    function returnTeacherPage(){
        navigate('/teacherpage');
    }

    function goToConstrcutor(){
        navigate('/teacherpage/create-test');
    }

    const arrayOfSubjects = ['Математика', 'Фізика', 'Українська мова', "Зарубіжна література", "Інформатика", "Біологія", 'Українська література']

    return(
        <div className={style.teacher_tests}>

            <div className={style.teacher_tests_info}>

                <div className={style.teacher_tests_info_navbar}>
                    <img onClick={returnTeacherPage} className={style.navbar_icon} src={homeIcon}/>
                    <span className={style.navbar_title}>Тести викладача</span>
                    <img className={style.navbar_icon} src={arrowIocn}/>
                </div>

                <div className={style.tests_content}>
                    {arrayOfSubjects.map(subject =>{
                        return(
                            <div className={style.tests_content_subject}>{subject}</div>
                        )
                    })}
                </div>

                <div className={style.teacher_tests_info_buttons}>
                    <div className={`${style.tests_info_btn } ${style.btn_blue}`}>
                        <span>Редагувати тест</span>
                        <img className={style.button_icon} src={editIcon}/>
                    </div>

                    <div onClick={goToConstrcutor} className={`${style.tests_info_btn } ${style.btn_green}`}>
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