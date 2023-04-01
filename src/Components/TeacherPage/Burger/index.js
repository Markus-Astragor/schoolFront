

import React, { useState } from "react";
import styles from './style.module.css';

import closeIcon from '../../../images/BurgerMenu/closeBtn.png';
import bookIcon from '../../../images/BurgerMenu/book.png';
import { NavLink, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Burger(props) {

    

    const ExitNavigate = useNavigate();

    const Exit = () =>{
        localStorage.removeItem('token');
        ExitNavigate('/');
    }

    function closeBurgerOnLink()
    {
        props.setIsOpen(false);
    }

    return (
        <div>
            <img src={closeIcon} className={styles.close_burger}  onClick={() =>{props.setIsOpen(false)}}/>

            <div className={styles.burger_info}>
                <div className={styles.burger_username}>{props.userName}</div>
            </div>

            <div className={styles.burger_options}>
                 <div className={styles.options_item}><NavLink onClick={closeBurgerOnLink}  className={styles.links} to='create-test'>Створити тест</NavLink></div>
                 <div onClick={Exit} className={styles.options_item}>Вийти</div>
            </div>

            <div className={styles.burgerIcon_book}>
                <img src={bookIcon} />
            </div>
        </div>

    );
}


export default Burger;