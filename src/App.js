import React from 'react';
import './App.css';
import Login_and_register from './Components/Login_register/Login_and_register';
import Main_page from './Components/Main_page/Main_page';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main_page/>
      <Login_and_register/>
    </div>
    </BrowserRouter>
  );
}

export default App;
