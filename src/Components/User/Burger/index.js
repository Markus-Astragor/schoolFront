

import React from "react";
import styles from './style.module.css';

import closeIcon from '../../../images/BurgerMenu/closeBtn.png';
import bookIcon from '../../../images/BurgerMenu/book.png';

function Burger(props) {


    return (

        <div>
            <img src={closeIcon} className={styles.close_burger}  onClick={() =>{props.setIsOpen(false)}}/>

            <div className={styles.burger_info}>
                <div className={styles.burger_username}>Sidoryak Ostap</div>
            </div>

            <div className={styles.burger_options}>
                <div className={styles.options_item}>Тести</div>
                <div className={styles.options_item}>Успішність</div>
                <div className={styles.options_item}>Історія тестів</div>
                <div className={styles.options_item}>Матеріали</div>
                <div className={styles.options_item}>Вийти</div>
            </div>

            <div className={styles.burgerIcon_book}>
                <img src={bookIcon} />
            </div>
        </div>

    );
}


export default Burger;