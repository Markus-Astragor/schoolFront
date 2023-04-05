import React, { useEffect, useState } from 'react';
import './App.css';
import Login_and_register from './Components/Login_register/Login_and_register';
import Main_page from './Components/Main_page/Main_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './Components/User';
import DeniedAccess from './Components/DeniedAccess';
import TeacherPage from './Components/TeacherPage';
import Context from './Components/UseContext/indexContext.js';

function App() {

  const [testInfo, setTestinfo] = useState('some text');

  return (

    <Context.Provider value={{testInfo: testInfo, setTestinfo: setTestinfo}}>
      <BrowserRouter>
        <div className="App">


          <Routes>

            <Route element={<Login_and_register/>} path='/authoriztion'/>
            <Route element={<Main_page/>} path='/'/>
            <Route element={<DeniedAccess/>} path='/deniedacess' />
            <Route element={<UserPage/>} path='/userpage/*'/>
            <Route  element={<TeacherPage/>} path='/teacherpage/*'></Route>

          </Routes>

        </div>
      </BrowserRouter>
      </Context.Provider>
  )
}

export default App;
