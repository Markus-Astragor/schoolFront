import React from 'react';
import './style.css';

import { useEffect, useState } from 'react';


/*Images */
import top from '../../images/mainPage/6.png';
import top2 from '../../images/mainPage/5.png';
import top3 from '../../images/mainPage/4.png';
import top4 from '../../images/mainPage/2.png';
import top5 from '../../images/mainPage/1.png';
import top6 from '../../images/mainPage/3.png';

/*images*/

function Main_page() {


  const [image1, setImage1] = useState(false); 
  const [image2, setImage2] = useState(false); 
  const [image3, setImage3] = useState(false); 
  const [image4, setImage4] = useState(false); 
  const [image5, setImage5] = useState(false); 
  const [image6, setImage6] = useState(false); 


  useEffect(() =>{

    setTimeout(()=>{
      setImage1(true);
      setImage2(true);
      setImage3(true);
      setImage4(true);
      setImage5(true);
      setImage6(true);
    },1000)


    

  }, [])

  return (
    <div className='Main_page'>


      <img className= {image4 ? 'picture animation-top' : 'picture image-position-1'} src={top}></img>
      <img className= {image1 ? 'picture animation_left' : 'picture image-position-2'} src={top3}></img>
      <img className= {image2 ? 'picture animation-left-down' : 'picture image-position-3'} src={top4}></img>
      <img className= {image3 ? 'picture animation-right-down' : 'picture image-position-4'} src={top5}></img>
      <img className={ image6 ? 'picture animation-right': 'picture image-position-5'} src={top6}></img>
      <img className={ image5 ? 'picture animation-down' :'picture image-position-6'} src={top2}></img>
      

    </div>
  )
}

export default Main_page;
