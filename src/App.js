import React, { useEffect, useState } from 'react';
import './App.css';
import Login_and_register from './Components/Login_register/Login_and_register';
import Main_page from './Components/Main_page/Main_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './Components/UseContext/indexContext';
import ChooseTests from './Components/User/ChooseTests/ChooseTests';
import UserPage from './Components/User';
function App() {

  const [LoginRef, setLoginRef] = useState();  // State в якому буде зберігатися ref на login  and register block

  const GetLoginRef = (ref) =>{   //Функція яка отримкє значенння ref і записує в State LoginRef
    setLoginRef(ref);
  }




  return (

      <BrowserRouter>
        <div className="App">


          <Routes>
            <Route element={<Login_and_register/>} path='/authoriztion'/>
            <Route element={<Main_page/>} path='/'/>
          </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;
