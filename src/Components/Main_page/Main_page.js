import React from 'react';
import AboutUs from './AboutUs/aboutUs';              /* Імпорт компоненти About Us */
import { TypeAnimation } from 'react-type-animation';  /*Бібілотека для написання Green School */
import { useContext } from 'react';

import './style.css';

import { useEffect, useState } from 'react';


/*========Mountain Images =======*/             /*Імпорт картинок частин гір */
import top from '../../images/mainPage/6.png';
import top2 from '../../images/mainPage/5.png';
import top3 from '../../images/mainPage/4.png';
import top4 from '../../images/mainPage/2.png';
import top5 from '../../images/mainPage/1.png';
import top6 from '../../images/mainPage/3.png';

/*========Mountain Images =======*/

/*===========Circles images========== */        /*Імпорт картинок кругів */
import circle_1 from '../../images/mainPage/big_circle.png';
import circle_2 from '../../images/mainPage/normal_circle.png';
/*===========Circles images========== */

/*Arrow image*/
import arrow_down from '../../images/mainPage/scroll.png';
import Context from '../UseContext/indexContext';
import { NavLink } from 'react-router-dom';
import ConstructorTests from '../TeacherPage/ConstructorTests/ConstructorTests';
import Prefutter from '../Prefutter/index.js';

import Statistic_Student from '../Statistics_Student/index.js';
import Video_block from '../Video_block/index.js';
import ChooseTests from '../User/ChooseTests/ChooseTests';
import SubjectTopicsArr from '../User/SubjectTopics/SubjectTopicsArr';
import TestInfo from '../TeacherPage/TestInfo';
import TeacherTests from '../TeacherPage/TeacherTests';
import DeniedAccess from '../DeniedAccess';
import TestResult from '../TeacherPage/TestResult';



function Main_page() {

  const data = useContext(Context);




  /* =========Usestates для картинок гір для анімації=========== */
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);

  /*========Mountain Images =======*/

  /*========Circle images========= */

  const [bigCircle, setBigCicrle] = useState(false);
  const [smallCircle, setSmallCircle] = useState(false);

  /*========Circle images========= */


  const [pageInfo, setPageInfo] = useState(false);          /*Usestate для задання появи main-page-info після анімацій гір */

  const [aboutRef, setAboutRef] = useState();





  useEffect(() => {           /*Useffect який при першому рендері сторінки запускає анімації через певний проміжок часу викорситовуючи SetTimeOut */

    setTimeout(() => {
      setImage1(true);
      setImage2(true);
      setImage3(true);
      setImage4(true);
      setImage5(true);
      setImage6(true);
    }, 0)


    setTimeout(() => {
      setSmallCircle(true);
    }, 2500)

    setTimeout(() => {
      setBigCicrle(true);
    }, 3500)


    setTimeout(() => {
      setPageInfo(true);
    }, 5000)


  }, [])


  const GetAboutRef = (ref)=> {   //Функція яка витягує значення ref блоку About US.
    setAboutRef(ref);
    console.log(aboutRef);
  }





  return (
    <div className='Main'>

      <div className='Main_page'>

        <img className={image4 ? 'picture animation-top' : 'picture image-position-1'} src={top}></img>
        <img className={image1 ? 'picture animation_left' : 'picture image-position-2'} src={top3}></img>
        <img className={image2 ? 'picture animation-left-down' : 'picture image-position-3'} src={top4}></img>
        <img className={image3 ? 'picture animation-right-down' : 'picture image-position-4'} src={top5}></img>
        <img className={image6 ? 'picture animation-right' : 'picture image-position-5'} src={top6}></img>
        <img className={image5 ? 'picture animation-down' : 'picture image-position-6'} src={top2}></img>



        <img className={bigCircle ? 'circles circle_1 showed' : 'circles circle_1'} src={circle_1}></img>
        <img className={smallCircle ? 'circles circle_2 circle-position-1 showed' : 'circles circle_2 circle-position-1'} src={circle_2}></img>
        <img className={smallCircle ? 'circles circle_2 circle-position-2 showed' : 'circles circle_2 circle-position-2'} src={circle_2}></img>
        <img className={smallCircle ? 'circles circle_2 circle-position-3 showed' : 'circles circle_2 circle-position-3'} src={circle_2}></img>
        <img className={smallCircle ? 'circles circle_2 circle-position-4 showed' : 'circles circle_2 circle-position-4'} src={circle_2}></img>


        <div className='main-block-info'>

          { pageInfo ? <div className='main-page-title'>
            <TypeAnimation
              sequence={[
                'Green School',
              ]}
              wrapper="div"
              speed={1}
              cursor={false}
              repeat={1}
              style={{ fontSize: '70px' }}
            />

          </div>: <div></div> }

          <div className={pageInfo ?  'main-page-subtitle-block show-subtitle-block' : 'main-page-subtitle-block'}>
              <div className='main-page-subtitle'>Your Online Teacher</div>
              <NavLink to='/authoriztion'  className='main-page-button' target="_blank" >Sign up or Login</NavLink>
          </div>
          

        </div> 

        <img src={arrow_down} onClick = {()=>{aboutRef.current.scrollIntoView({behavior: "smooth"})}} className={pageInfo ? 'main-block-arrow show-arrow' : 'main-block-arrow' }/>

      </div>




      <AboutUs GetAboutRef = {GetAboutRef} />
      <Prefutter/>

    </div>
  )
}

export default Main_page;
