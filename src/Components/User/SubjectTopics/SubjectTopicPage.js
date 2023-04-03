import React, { useState } from 'react'
import styles from './SubjectTopicPage.module.css';
import dropDownArrow from '../../../images/UserPageImages/dropDownArrow.png'

function SubjectTopicPage(props) {
  let [isOpen, setIsOpen] = useState(false);

  function openList(e) {
    if (!isOpen) {
      setIsOpen(true)
    }
    else {
      setIsOpen(false)
    }


  }
  return (
    <div>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.Topics}>

        <div onClick={openList} className={styles.TopicName}>
        <h3>{props.subjectTheme}</h3>
        <div className={styles.dropDownImage}>
        <img src={dropDownArrow} width="20px"/>
        </div>
        </div>
        
        <div className={isOpen ? styles.dropDownShow : styles.dropDown}>
          <div className={styles.TopicsContent}>
            <p>{props.theme}</p>
            <div className={styles.buttonCircle}>
              <div className={styles.circle}>{props.progress}</div>
              <button>Почати</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      </div> 
  )
}

export default SubjectTopicPage
