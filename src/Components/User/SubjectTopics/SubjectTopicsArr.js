import React from 'react'
import SubjectTopicPage from './SubjectTopicPage';
import styles from './SubjectTopicPage.module.css';

let SubjectTopics = [
  {subjectTheme: 'Числа і вирази', testThemes: [{theme: 'Дійсні числа', progress: 0},{theme: 'Дійсні числа', progress: 0},{theme: 'Дійсні числа', progress: 0}]},
  {subjectTheme: 'Числа і вирази', testThemes: [{theme: 'Дійсні числа', progress: 0},{theme: 'Дійсні числа', progress: 0}]}
 
]

let title = 'Математика'

let SubjectTopicsArray = SubjectTopics.map(
  subjectTopic => <SubjectTopicPage
  subjectTheme = {subjectTopic.subjectTheme}
  subjectArray = {subjectTopic.testThemes}
  />
)


function SubjectTopicsArr() {
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
