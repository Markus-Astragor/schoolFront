import React, { useState } from 'react';
import './style.css';
import Slider from "react-slick";









function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  

function Video_block(){
  
    
    const settings = {
    className: "center",
        infinite: true,
        
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        // slidesToShow: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 1,
              rows: 1,
              // slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
        
        
      
    }
    return (
        <div className="Video_block">
            <Slider {...settings}>
            <div className='fourvideo'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yTQ8N7qxGYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yTQ8N7qxGYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='fourvideo'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yTQ8N7qxGYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yTQ8N7qxGYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='fourvideo'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yTQ8N7qxGYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yTQ8N7qxGYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
          
            </Slider>
            <div className='white_info_bloger_block_outside'>
              <div className='white_info_bloger_block'>
                <h2>Блогери що допоможуть тобі з навчанням</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                <div className='greenButtom_VideoBlock'>відкрити список</div>
                <div className='list_of_bloger'>
                  <ul>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    )
}


export default Video_block;