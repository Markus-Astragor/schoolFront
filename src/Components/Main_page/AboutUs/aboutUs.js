import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import './style.css';
// import arrow_down from '../../../images/mainPage/scroll.png';
 import AboutUsImage from '../../../images/mainPage/about_image.jpg';
 import Arrow_down from '../../../images/mainPage/scroll.png';
import Context from "../../UseContext/indexContext";





function AboutUs(props)
{


    const aboutRef = useRef();      //Ref на About ref блок

    useEffect(()=>{
        props.GetAboutRef(aboutRef);        //При першому рендері викликати GetAboutRef яка передає значення Aboutref до MainPage
    },[])

    const data = useContext(Context);

    return(
        <div ref={aboutRef}  className="aboutUs">
            <div className="aboutUs-flex">
                <div className="flex-block-left">
                    <div className="about-image-title">
                        Освіта скарб, праця -  ключ до нього
                    </div>
                    <img src={AboutUsImage} className="about-image"/>
                </div>
                <div className="flex-block-right">

                    <div className="about-text-info">
                        <div className="about-text-top-title">Про нас</div>
                        <div className="about-text-top-text">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        
                        </div>
                    </div>

                    <div className="about-text-info">
                        <div className="about-text-top-title">Наші переваги</div>
                        <div className="about-text-top-text">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        
                        </div>
                    </div>

                

                    
                </div>
            </div>
            
        </div>
    );
}


export default AboutUs;