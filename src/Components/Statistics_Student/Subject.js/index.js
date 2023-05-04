

import React from "react";
import styles from './style.module.css';

function Subject({subjectName, getTestsBySubject})
{


    return(
        <div onClick={() =>getTestsBySubject(subjectName)} className={styles.subject_button}>
            {subjectName}
        </div>
    )
}


export default Subject;