


import React, { useEffect, useState } from "react";

import styles from './style.module.css';
import Burger from "./Burger";
import Statistic_Student from '../Statistics_Student/index.js';
import ChooseTests from '../User/ChooseTests/ChooseTests.js';

import { useNavigate } from "react-router-dom";

import burgerIcon from '../../images/BurgerMenu/burger.png';
import axios from "axios";


function UserPage() {


    const navigate = useNavigate();

    const [tests, setTests] = useState(false);
    const [sucess, setSuccess] = useState(false);
    const [historyOfTest, sethistoryOfTest] = useState(false);
    const [source, setSource] = useState(false);


    const BurgerState = {
        setTests: setTests,
        setSuccess: setSuccess,
        sethistoryOfTest: sethistoryOfTest,
        setSource: setSource
    }

    
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

    useEffect(()=>{
        const userToken = localStorage.getItem('token');
        const token = JSON.parse(userToken);
        if(!token)
        {
            navigate('/deniedacess');
            return;
        }

        GetUserInfo(token);
       
    },[])

    const [isOpen, setIsOpen] = useState(false);



    return (

        <div className={styles.user_page}>

            <div onClick={()=>{setIsOpen(false)}} className={isOpen ? styles.overlayer : styles.overlayer_hidden}>
            </div>


            <img className={styles.burgerIcon} src = {burgerIcon} onClick={() => { setIsOpen(true) }}/>

            <div className={isOpen ? styles.burger_show : styles.burger}> {/*Burger Menu*/} 
                <Burger userName={userName} burgerItems={BurgerState} setIsOpen = {setIsOpen}/>                    
            </div> 

            <div>
               {sucess ? <Statistic_Student/> : <div></div>} 
               {tests ? <ChooseTests/>: <div></div>}
            </div>
                
            


        </div>
    )
}


export default UserPage;