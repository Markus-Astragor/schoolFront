import React, { useEffect, useState } from 'react';
import './App.css';
import Login_and_register from './Components/Login_register/Login_and_register';
import Main_page from './Components/Main_page/Main_page';
import { BrowserRouter } from 'react-router-dom';
import Context from './Components/UseContext/indexContext';

function App() {

  const [LoginRef, setLoginRef] = useState();  // State в якому буде зберігатися ref на login  and register block

  const GetLoginRef = (ref) =>{   //Функція яка отримкє значенння ref і записує в State LoginRef
    setLoginRef(ref);
  }

  const value = {}        // Змінна в якій буде зберігатися дані для передачі по UseContext
  useEffect(()=>{         //UseEffect слідкує коли LoginRef попаде ref yf login то він закине його в ref
    value.LoginRef = LoginRef
  }, [LoginRef])


  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <div className="App">
          <Main_page />
          <Login_and_register  GetLoginRef = {GetLoginRef}/>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
