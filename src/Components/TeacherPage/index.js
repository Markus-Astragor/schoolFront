

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useContext } from "react";

import styles from './style.module.css';
import ConstructorTests from "../TeacherPage/ConstructorTests/ConstructorTests.js";
import { Routes, useNavigate } from "react-router-dom";
import Burger from "./Burger";
import burgerIcon from '../../images/BurgerMenu/burger.png';
import axios from "axios";
import Context from "../UseContext/indexContext";
import TeacherTests from './TeacherTests/index.js';

function TeacherPage() {

    const testInfo = useContext(Context);
    const navigate = useNavigate();


    const [userName, setUserName] = useState('Teacher Name');

    function GetUserInfo(userToken) {


        axios.post('http://localhost:8080/user-info', {
            token: userToken,
        }).then(response => {
            console.log(response);
            setUserName(response.data.username)
        }).catch(err => {
            console.log(err);
            if (err.response.data == "Something went wrong") {
                navigate('/deniedacess');
            }
        })
    }

    // useEffect(()=>{
    //     const teacherToken = localStorage.getItem('token');
    //     const token = JSON.parse(teacherToken);
    //     if(!token)
    //     {
    //         navigate('/deniedacess');
    //         return;
    //     }

    //     GetUserInfo(token);

    // },[])



    const [isOpen, setIsOpen] = useState(false); // State для бургера

    useEffect(()=>{
        console.log(testInfo.testInfo);
    },[])


    return (
            <div className={styles.teacher_page}>

                <div onClick={() => { setIsOpen(false) }} className={isOpen ? styles.overlayer : styles.overlayer_hidden}>
                </div>


                <img className={styles.burgerIcon} src={burgerIcon} onClick={() => { setIsOpen(true) }} />

                <div className={isOpen ? styles.burger_show : styles.burger}> {/*Burger Menu*/}
                    <Burger userName={userName} setIsOpen={setIsOpen} />
                </div>

                <div>

                    <Routes>
                        <Route path="create-test" element={<ConstructorTests />} />
                        <Route path="teacher-tests" element={<TeacherTests/>} />
                    </Routes>


                </div>





            </div>
    )
}


export default TeacherPage;

