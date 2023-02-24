import React from 'react';
import './style.css';
import top from '../../images/First_block/6.png';
import top_left from '../../images/First_block/4.png';
import top_right from '../../images/First_block/3.png';


function Main_page() {
  return (
    <div className='Main_page'>
      <img src={top} className='pictures'/>
      <img src={top_left} className='pictures'/>
      <img src={top_right} className='pictures'/>
    </div>
  )
}

export default Main_page
