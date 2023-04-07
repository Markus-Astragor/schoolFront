

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
    
            <div className={styles.denied_access_text} >Page Not Found</div>
            
        </div>
    );
}


export default DeniedAccess;

