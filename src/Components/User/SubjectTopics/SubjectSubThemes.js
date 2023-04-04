import React from 'react'
import styles from './SubjectTopicPage.module.css';

function SubjectSubThemes(props) {
  return (
      <div className={styles.TopicsContent}>
            <p>{props.theme}</p>
            <div className={styles.buttonCircle}>
              <div className={styles.circle}>{props.progress}%</div>
              <button>Почати</button>
            </div>
          </div> 
  )
}

export default SubjectSubThemes