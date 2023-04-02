import React, { useState } from 'react'
import styles from './SubjectTopicPage.module.css';
import { useRef } from 'react';


function SubjectTopicPage() {
  // let dropDownList = useRef(null);
  // function openList(){

  //   if(dropDownList.current.style.opacity != '1'){
  //     dropDownList.current.style.opacity = '1';
  //     dropDownList.current.style.height = '130px';
  //   }
  //   else{
  //     dropDownList.current.style.opacity = '0';
  //     dropDownList.current.style.height = '0px';
  //   }
  // }

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
        <h3 onClick={openList}>Числа і вирази</h3>
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
      {/* <div className={styles.Topics}>
        <h3 onClick={openList}>Числа і вирази</h3>
          <div className={isOpen? styles.dropDownShow : styles.dropDown}>
              <p>Дійсні числа</p>
              <p>Дійсні числа</p>
              <p>Дійсні числа</p>
              <p>Дійсні числа</p>
          </div>
        <hr />
      </div> */}
    </div>
  )
}

export default SubjectTopicPage
