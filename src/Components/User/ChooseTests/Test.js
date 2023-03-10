import React from "react";

function Test(props){
    return(
        <div className="Test">
            <div className="blog-image" style={{backgroundImage: `url(${props.image})`}}></div> 
        </div>
    )
}

export default Test;