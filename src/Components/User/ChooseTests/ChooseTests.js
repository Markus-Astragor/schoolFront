import React, { useContext, useEffect, useRef, useState } from "react";
import './ChooseTests.css';
import Test_arr from "./Test_arr";
import { Route, Routes } from "react-router-dom";
import SubjectTopicsArr from "../SubjectTopics/SubjectTopicsArr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import closeIcon from '../../../images/PopUPWIndow/closeIcon.png';
import UserContext from "../../UseContext/userContext";

function ChooseTests(){

    const navigate = useNavigate();
    const userContext = useContext(UserContext);

    const [popUpState, setPopUpState] = useState(false);
    const [testCode, SetTestCode] = useState();
    const [messageError, setMessageError] = useState();

    const codeRef = useRef();

    const OpenConstructorOfTests = async () => {

        setMessageError('');  // Очищення input про про те чи тест був знайдений

        const codeValue = codeRef.current.value;        //Витягання значення code з input
        SetTestCode(codeValue);   // Pushing code into use state for global usage

        const response = await axios.get(`http://localhost:8080/find-tests?testCode=${codeValue}`); // request which checks whether test by passed code exist 

        
        if(response.data =='Тест не знайдено') {  // if for processing  error
            console.log(response);
            return setMessageError('Тест не знайдено');
        }

        console.log(response);

        
        //Перевірити чи існує тест по даному коду +
        AddUserTest(codeValue);    // Запит який буде зберігати доданий тест до бази даних і буде прив'язаний за юзером
        userContext.setTestUserCode(codeValue);  // Code тесту ми витягуємо на верх. рівень для того щоб мати можливість передати в компоненту UserTestConstructor
        navigate('/userpage/test');
        //Перекинути на сторінку для проходження тесту (конструктор тестів) -> Або код тесту передати туда з відси або знайдену інформацію по тесту передати по Context
        // Відобразити там інофрмацію про тест
        // Витягнути всі дані
        // Зберегти результат SaveUserTest
    }

    const AddUserTest = async (codeValue) =>{
        const token = localStorage.getItem('token');

        if(!token)
        {
            navigate('/deniedacess');
        }
        console.log(codeValue);

        const parsed_token = JSON.parse(token);

        const response = await axios.post('http://localhost:8080/add-test', {
            token: parsed_token,
            test_code: codeValue,
        });

        console.log(response);

    }



    return(
        <div className="ChooseTests">
            <Routes>
                <Route exact path="" element={
                    <div className="chooseTests_wrapper">
                        <div className="ChooseTests_header">
                            <h2>Вибір тестів</h2>
                        </div>

                        <div className="slider_wrapper">
                            <Test_arr />
                            <button onClick={() =>{setPopUpState(true)}} className="pass_test_btn">Пройти тест</button>
                        </div>

                        <div className={ popUpState ? "pop_up_window_show" : "pop_up_window"}>
                            
                            <img onClick={() =>{setPopUpState(false)}} className="pop_up_window_close" src={closeIcon} />

                            <div className="pop_up_window_container">

                                <div className="wrong_code">{messageError}</div>

                                <div className="pop_up_window_code">
                                    <input ref={codeRef} className="code_input" placeholder="Вставте код"/>
                                </div>

                                <div onClick={OpenConstructorOfTests} className="pass_test_btn">Пройти тест</div>
                               
                            </div>
                        </div> 

                    </div>}
            />

                <Route path="math" element={<SubjectTopicsArr/>}/>
                <Route path="history" element={<SubjectTopicsArr/>}/>
                <Route path="geography" element={<SubjectTopicsArr/>}/>
                <Route path="ukrainian" element={<SubjectTopicsArr/>}/>
                <Route path="ukrainian_literature" element={<SubjectTopicsArr/>}/>
                <Route path="english" element={<SubjectTopicsArr/>}/>


            </Routes>
        </div>
    )
}

export default ChooseTests;