import React, { useState } from 'react'
import styles from './SubjectTopicPage.module.css';
import dropDownArrow from '../../../images/UserPageImages/dropDownArrow.png'

function SubjectTopicPage() {
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
    <div className={styles.SubjectTopicPage}>
      <header>
        <h2>Математика завдання за темами</h2>
      </header>
      <div className={styles.Topics}>

        <div onClick={openList} className={styles.TopicName}>
        <h3>Числа і вирази</h3>
        <div className={styles.dropDownImage}>
        <img src={dropDownArrow} width="20px"/>
        </div>
        </div>
        
        <div className={isOpen ? styles.dropDownShow : styles.dropDown}>
          <div className={styles.TopicsContent}>
            <p>Дійсні числа</p>
            <div className={styles.buttonCircle}>
              <div className={styles.circle}>0%</div>
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
