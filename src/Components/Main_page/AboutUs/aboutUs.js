import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import styles from './style.module.css';
// import arrow_down from '../../../images/mainPage/scroll.png';
import AboutUsImage from '../../../images/mainPage/about_image.jpg';
import Arrow_down from '../../../images/mainPage/scroll.png';
import Context from "../../UseContext/indexContext";

import designIcon from '../../../images/AboutUs/design.png';

import teamIcon from '../../../images/AboutUs/team.png';

import projectIcon from '../../../images/AboutUs/project.png';



function AboutUs(props) {


    const aboutUsText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

    const aboutRef = useRef();      //Ref на About ref блок

    useEffect(() => {
        props.GetAboutRef(aboutRef);        //При першому рендері викликати GetAboutRef яка передає значення Aboutref до MainPage
    }, [])

    const data = useContext(Context);

    return (
        <div ref={aboutRef} className={styles.aboutUs}>

            <div className={styles.aboutUs_content}>

                <div className={styles.aboutUs_content_left}>

                    <div className={styles.content_left_text}>
                        <div className={styles.content_left_text_title}>About Us</div>

                        <div className={styles.content_left_text_subText}>
                            {aboutUsText}
                        </div>
                    </div>
                </div>

                <div className={styles.aboutUs_content_right}>

                    <div className={styles.content_right_text}>

                        <div className={styles.content_right_text_flex}>
                            <img src={teamIcon}/>
                            <div className={styles.right_text_flex_info}>
                                <div className={styles.text_flex_info_title}>Team</div>
                                <div className={styles.text_flex_info_text}>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-
                                </div>
                            </div>
                        </div>

                        <div className={styles.content_right_text_flex}>
                            <img src={projectIcon}/>
                            <div className={styles.right_text_flex_info}>
                                <div className={styles.text_flex_info_title}>Project</div>
                                <div className={styles.text_flex_info_text}>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-
                                </div>
                            </div>
                        </div>

                        <div className={styles.content_right_text_flex}>
                            <img src={designIcon}/>
                            <div className={styles.right_text_flex_info}>
                                <div className={styles.text_flex_info_title}>Design</div>
                                <div className={styles.text_flex_info_text}>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default AboutUs;