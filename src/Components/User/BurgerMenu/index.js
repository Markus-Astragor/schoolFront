import React from 'react';
import styles from './style.module.css';
import Treehead from '../../../images/BurgerMenu/burger-head.png';

function Burger_Menu_Student(){
    return(
        <div className={styles.Menu_container}>
            <div className={styles.User_avaandname}>
                <div className={styles.circle_forAva}></div>
                
                <div className={styles.menu_choice}>
                    <div>ТЕСТИ</div>
                    <div>УСПІХИ</div>
                    <div>МАТЕРІАЛИ</div>
                    <div>ІСТОРІЯ ТЕСТІВ</div>
                </div>

                <div className={styles.TreeInHead}>
                    <img src={Treehead} className={styles.TreeInHeadimg}/>
                </div>
            </div>
        </div>
        
    )
}

export default Burger_Menu_Student;