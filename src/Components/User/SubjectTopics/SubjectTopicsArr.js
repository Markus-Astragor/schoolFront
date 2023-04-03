import React from 'react'
import SubjectTopicPage from './SubjectTopicPage';
import styles from './SubjectTopicPage.module.css';

let SubjectTopics = [
  {title: 'Математика завдання за темами', subjectTheme: 'Числа і вирази', theme: 'Дійсні числа', progress: '0%'},
  {subjectTheme: 'Числа і вирази', theme: 'Дійсні числа', progress: '0%'},
  {subjectTheme: 'Числа і вирази', theme: 'Дійсні числа', progress: '0%'},
  {subjectTheme: 'Числа і вирази', theme: 'Дійсні числа', progress: '0%'},
  {subjectTheme: 'Числа і вирази', theme: 'Дійсні числа', progress: '0%'},
]

let SubjectTopicsArray = SubjectTopics.map(
  subjectTopic => <SubjectTopicPage
  title = {subjectTopic.title}
  subjectTheme = {subjectTopic.subjectTheme}
  theme = {subjectTopic.theme}
  progress = {subjectTopic.progress}
  />
)


function SubjectTopicsArr() {
  return (
    <div className={styles.SubjectTopicPage}>
      {SubjectTopicsArray}
    </div>
  )
}

export default SubjectTopicsArr
