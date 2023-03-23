


import React, { useState } from "react";

import styles from './style.module.css';
import Burger from "./Burger";



import burgerIcon from '../../images/BurgerMenu/burger.png';


function UserPage() {


    const [isOpen, setIsOpen] = useState(false);



    return (

        <div className={styles.user_page}>

            <div onClick={()=>{setIsOpen(false)}} className={isOpen ? styles.overlayer : styles.overlayer_hidden}>
            </div>


            <img className={styles.burgerIcon} src = {burgerIcon} onClick={() => { setIsOpen(true) }}/>

            <div className={isOpen ? styles.burger_show : styles.burger}> {/*Burger Menu*/} 
                <Burger setIsOpen = {setIsOpen}/>                    
            </div> 
                
            


        </div>
    )
}


export default UserPage;