


import React, { useEffect, useState } from "react";

import styles from './style.module.css';
import Burger from "./Burger";



import burgerIcon from '../../images/BurgerMenu/burger.png';
import axios from "axios";


function UserPage() {

    
    const [userName, setUserName] = useState('Ostap Sidoryak');

    function GetUserInfo(userToken)
    {
        console.log(userToken);

        axios.post('http://localhost:8080/user-info', {
            token: userToken,
        }).then(response =>{
            console.log(response);
            setUserName(response.data.userDate.username)
        }).catch(err =>{
            console.log(err);
        })
    }

    useEffect(()=>{
        const userToken = localStorage.getItem('token');
        const token = JSON.parse(userToken);
        
        console.log('User page: token', token );

        GetUserInfo(token);
       
    },[])

    const [isOpen, setIsOpen] = useState(false);



    return (

        <div className={styles.user_page}>

            <div onClick={()=>{setIsOpen(false)}} className={isOpen ? styles.overlayer : styles.overlayer_hidden}>
            </div>


            <img className={styles.burgerIcon} src = {burgerIcon} onClick={() => { setIsOpen(true) }}/>

            <div className={isOpen ? styles.burger_show : styles.burger}> {/*Burger Menu*/} 
                <Burger userName={userName} setIsOpen = {setIsOpen}/>                    
            </div> 
                
            


        </div>
    )
}


export default UserPage;