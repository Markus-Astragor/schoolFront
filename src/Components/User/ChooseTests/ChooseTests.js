import React from "react";
import './ChooseTests.css';
import Test_arr from "./Test_arr";
import { Route, Routes } from "react-router-dom";

function ChooseTests(){
    return(
        <div className="ChooseTests">
            <Routes>
                <Route path="" element={<div>
                <div className="ChooseTests_header">
                    <h2>Вибір тестів</h2>
                </div>
                <div className="slider_wrapper">
                    <Test_arr/>
                </div>
            
            </div>}/>

                <Route path="math" element={<div>Math</div>}/>
                <Route path="history" element={<div>history</div>}/>
                <Route path="geography" element={<div>geography</div>}/>
                <Route path="ukrainian" element={<div>ukrainian</div>}/>
                <Route path="ukrainian_literature" element={<div>ukrainian_literature</div>}/>
                <Route path="english" element={<div>English</div>}/>


            </Routes>
        </div>
    )
}

export default ChooseTests;