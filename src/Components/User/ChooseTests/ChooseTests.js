import React from "react";
import './ChooseTests.css';
import Test_arr from "./Test_arr";

function ChooseTests(){
    return(
        <div className="ChooseTests">
            <div className="ChooseTests_header">
                <h2>Вибір тестів</h2>
            </div>
            <Test_arr/>
        </div>
    )
}

export default ChooseTests;