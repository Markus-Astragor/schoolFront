

import React from "react";

import styles from './style.module.css';
import { useNavigate } from "react-router-dom";


function DeniedAccess()
{
    const navigate = useNavigate();

    function ReturnMainPage()
    {
        navigate('/');
    }


    return(
        <div className={styles.denied_access}>
    
            <div> You do not have acess to this page</div>

            <div>
                <button onClick={ReturnMainPage}>Return to the main page</button>
            </div>
            
        </div>
    );
}


export default DeniedAccess;

