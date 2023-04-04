import React, { useState } from 'react'
import styles from './SubjectTopicPage.module.css';
import dropDownArrow from '../../../images/UserPageImages/dropDownArrow.png'
import SubjectSubThemes from './SubjectSubThemes';

function SubjectTopicPage({ subjectTheme, subjectArray }) {
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
      <div className={styles.Topics}>

        <div onClick={openList} className={styles.TopicName}>
          <h3>{subjectTheme}</h3>
          <div className={styles.dropDownImage}>
            <img src={dropDownArrow} width="20px" className={isOpen ? styles.dropDownArrowRotated : styles.dropDownArrow} />
          </div>
        </div>

        <div className={isOpen ? styles.dropDownShow : styles.dropDown}>

          {/* <div className={styles.TopicsContent}>
            <p>{props.theme}</p>
            <div className={styles.buttonCircle}>
              <div className={styles.circle}>{props.progress}</div>
              <button>Почати</button>
            </div>
          </div> */}

          {subjectArray.map(el =>
          
          <SubjectSubThemes
          progress = {el.progress}
          theme = {el.theme}
          
          />
          
          
          )}

        </div>
        <hr />
      </div>
    </div>
  )
}

export default SubjectTopicPage
