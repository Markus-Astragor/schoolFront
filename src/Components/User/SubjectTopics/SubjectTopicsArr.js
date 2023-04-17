import React, { useState } from 'react'
import SubjectTopicPage from './SubjectTopicPage';
import styles from './SubjectTopicPage.module.css';
import { useEffect } from 'react';
import axios from 'axios';



let SubjectTopics = [
  { subjectTheme: 'Числа і вирази', testThemes: [{ theme: 'Дійсні числа', progress: 0 }, { theme: 'Дійсні числа', progress: 0 }, { theme: 'Дійсні числа', progress: 0 }] },
  { subjectTheme: 'Числа і вирази', testThemes: [{ theme: 'Дійсні числа', progress: 0 }, { theme: 'Дійсні числа', progress: 0 }] }

]

let title = 'Математика'

let SubjectTopicsArray = SubjectTopics.map(
  subjectTopic => <SubjectTopicPage
    subjectTheme={subjectTopic.subjectTheme}
    subjectArray={subjectTopic.testThemes}
  />
)


function SubjectTopicsArr() {

const [url, setUrl] = useState(); // State для зберігання url сторінки



  const GetUserTests = async () =>{

    // Функція знаходження тестів юзера
    // Фільтрувавння даних  в корекному форматі для відображення
  
  }



  // useEffect(() => {     //Витягування назви предмету з url і пушення її в usestate для того щоб потім мати можливість шукати по предмету
  //   console.log(window.location.pathname);    
  //   const array = window.location.pathname.split('/');
  //   setUrl(array.pop());
  //   GetUserTests();
  // }, [])



  return (
    <div className={styles.SubjectTopicPage}>
      <header>
        <h2>{title}</h2>
      </header>
      {SubjectTopicsArray}
    </div>
  )
}

export default SubjectTopicsArr
