

import React, { useState } from "react";
import styles from './style.module.css';

import closeIcon from '../../../images/BurgerMenu/closeBtn.png';
import bookIcon from '../../../images/BurgerMenu/book.png';
import { NavLink, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Burger(props) {


    // function OpenSuceess()
    // {

    //     props.burgerItems.setTests(false);
    //     props.burgerItems.setSuccess(true);
    //     props.burgerItems.sethistoryOfTest(false);
    //     props.burgerItems.setSource(false);
    //     props.setIsOpen(false);

       
    // }

    // function OpenTests()
    // {
    //     props.burgerItems.setTests(true);
    //     props.burgerItems.setSuccess(false);
    //     props.burgerItems.sethistoryOfTest(false);
    //     props.burgerItems.setSource(false);
    //     props.setIsOpen(false);
    // }

    

    const ExitNavigate = useNavigate();

    const Exit = () =>{
        localStorage.removeItem('token');
        ExitNavigate('/');
    }

    return (
        <div>
            <img src={closeIcon} className={styles.close_burger}  onClick={() =>{props.setIsOpen(false)}}/>

            <div className={styles.burger_info}>
                <div className={styles.burger_username}>{props.userName}</div>
            </div>

            <div className={styles.burger_options}>
            <NavLink to='/userpage/test'><div className={styles.options_item}>Тести</div></NavLink>
                <div className={styles.options_item}>Успішність</div>
                <div className={styles.options_item}>Історія тестів</div>
                <div className={styles.options_item}>Матеріали</div>
                <div onClick={Exit} className={styles.options_item}>Вийти</div>
            </div>

            <div className={styles.burgerIcon_book}>
                <img src={bookIcon} />
            </div>
        </div>

    );
}


export default Burger;