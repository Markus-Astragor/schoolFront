

import React from "react";
import styles from './style.module.css';

function Subject(props)
{


    return(
        <div className={styles.subject_button}>
            {props.subjectName}
        </div>
    )
}


export default Subject;