import React from "react";
import { NavLink } from "react-router-dom";

function Test(props){
    return(
        <div className="Test">
            <div className="blog-image">
            <img src={props.image} className="Subject_image"/>
            </div>
            <div className="Subject_block">
                <NavLink to={props.link}><span>{props.subjectName}</span></NavLink>
            </div> 
        </div>
    )
}

export default Test;