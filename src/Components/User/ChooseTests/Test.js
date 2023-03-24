import React from "react";

function Test(props){
    return(
        <div className="Test">
            <div className="blog-image">
            <img src={props.image} className="Subject_image"/>
            </div>
            <div className="Subject_block">
                <span>{props.subjectName}</span>
            </div> 
        </div>
    )
}

export default Test;