import "./style.css";
import React, { useEffect, useState } from "react";
import Subject from "./Subject.js";
import { json, useNavigate } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import axios from "axios";







export default function Statistic_Student() {


  const [subjectArray, setSubjectArray] = useState();  // State для зберігання назви предметів по яких в користувача є тести 
  const [isSubjects, setIsSubjects] = useState(false); // Трігер для того щоб відображати дані про предмети коли вони отрмані
  const [testsData, setTestsData] = useState();
  const [subjectName, setSubjectName] = useState();

  const data = [
    {
      testName: "тест2",
      value: 12,
    },
    {
      testName: "тест3",
      value: 12,
    },
    {
      testName: "тест4",
      value: 12,
    },
]
  

const navigate = useNavigate();


const getUserTests = async (token) =>{
  const {data} = await axios.get(`http://localhost:8080/user-tests?token=${token}`);
  console.log(data);
  filterSubject(data);
}

const filterSubject = (tests) =>{   // Функція для отрмання всіх назв предметів щоб вони не повторялися
  let sortedArray = [];

  tests.map(el =>{
    if(!sortedArray.includes(el.test_info.subjectName)) {
      sortedArray.push(el.test_info.subjectName);
    }
  })

  setSubjectArray(sortedArray);
  console.log('sortedArray', sortedArray);
  setIsSubjects(true);
}

const getTestsBySubject = async (subjectName) =>{   // Отримання всіх тестів по вказаному предмету
  setSubjectName(subjectName)
  const token = JSON.parse(localStorage.getItem('token'));
  const {data} = await axios.get(`http://localhost:8080/user-tests-info?token=${token}&subjectName=${subjectName}`);
  console.log(data);

  const arrayOfTests = []

  data.map(el =>{
    const object = {};
    object.value = el.mark;
    object.testName = el.test_info.testName;
    arrayOfTests.push(object);
  })

  console.log('Array of tests', arrayOfTests);

  setTestsData(arrayOfTests);
  
}

  
useEffect(() =>{  // Головний useEffect
  const token = localStorage.getItem('token')
  if(!token){
    navigate('/deniedacess');
  } 
  const parsedToken = JSON.parse(token);

  getUserTests(parsedToken);

},[])




  return (
    <div className="Stats_block">
      <div className="title_Stats_block">
        <h1>Моя успішність</h1>
      </div>


      <div className="Stats_block_flexforcenter">
        <div className="gorison_scroll_grafic">
          <LineChart
            width={850}
            height={300}
            data={testsData}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: -10
            }}
            
          >
            <CartesianGrid  strokeDasharray="3 3" />
            <XAxis dataKey="testName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ stroke: 'green', strokeWidth: 2, r: 5 }}
              legendType="none"

            />
          </LineChart>

        </div>
      </div>

      
      <div className="buttom_of_subject">
        { isSubjects ? subjectArray.map((subject, index) =>{
          return(
            <Subject getTestsBySubject={getTestsBySubject} subjectName = {subject} key={index}/>
          )
        }) : <div></div>}
      </div>

    </div>
  );
}
