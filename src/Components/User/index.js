


import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import styles from './style.module.css';
import Burger from "./Burger";
import Statistic_Student from '../Statistics_Student/index.js';
import ChooseTests from '../User/ChooseTests/ChooseTests.js';

import { Routes, useNavigate } from "react-router-dom";

import burgerIcon from '../../images/BurgerMenu/burger.png';
import axios from "axios";


function UserPage() {


    const navigate = useNavigate();


    const [userName, setUserName] = useState('Ostap Sidoryak');

    function GetUserInfo(userToken)
    {
       

        axios.post('http://localhost:8080/user-info', {
            token: userToken,
        }).then(response =>{
            console.log(response);
            setUserName(response.data.username)
        }).catch(err =>{
            console.log(err);
            
            if(err.response.data == "Something went wrong")
            {
                navigate('/deniedacess');
            }
        })
    }

    // useEffect(()=>{
    //     const userToken = localStorage.getItem('token');
    //     const token = JSON.parse(userToken);
    //     if(!token)
    //     {
    //         navigate('/deniedacess');
    //         return;
    //     }

    //     GetUserInfo(token);
       
    // },[])

    const [isOpen, setIsOpen] = useState(false); // State для бургера



    return (

        <div className={styles.user_page}>

            <div onClick={()=>{setIsOpen(false)}} className={isOpen ? styles.overlayer : styles.overlayer_hidden}>
            </div>


            <img className={styles.burgerIcon} src = {burgerIcon} onClick={() => { setIsOpen(true) }}/>

            <div className={isOpen ? styles.burger_show : styles.burger}> {/*Burger Menu*/} 
                <Burger userName={userName}  setIsOpen = {setIsOpen}/>                    
            </div> 

            <div>

            <Routes>
                    <Route path="success" element={<Statistic_Student/> }/>
                    <Route path="tests/*" element={<ChooseTests/> }/>
                    <Route path="history_test" element={<Statistic_Student/> }/>
                    <Route path="materials" element={<Statistic_Student/> }/>
                    <Route path="math" element={<Statistic_Student/>}/> 

               </Routes>

                
            </div>

                
            


        </div>
    )
}


export default UserPage;