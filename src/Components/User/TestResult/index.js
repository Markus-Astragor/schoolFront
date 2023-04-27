import React from "react";



import styles from './style.module.css';
import UserContext from "../../UseContext/userContext";
import { useContext } from "react";



function Testresult(){



    const userContext = useContext(UserContext);
    console.log(userContext);

    return(
        <div className={styles.resultTest}>

            <div>
                <span>Назва предмету</span>
                <span>{userContext.testInfo.subjectName}</span>
            </div>

            <div>
                <span>Назва тесту</span>
                <span>{userContext.testInfo.testName}</span>
            </div>

            <div>
                <span>Оцінка</span>
                <span>{userContext.testInfo.mark}</span>
            </div>
 
        </div>
    );
}


export default Testresult;