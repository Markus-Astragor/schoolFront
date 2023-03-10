import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import history from '../../../images/ChooseTests/history.png';
import geography from '../../../images/ChooseTests/geography.png';
import math from '../../../images/ChooseTests/math.png';
import ukrainian from '../../../images/ChooseTests/ukrainian.png';
import Test from "./Test";


let subjects = [
    { image: history },
    { image: geography },
    { image: math },
    { image: ukrainian },
    { image: history },
    { image: geography },
    { image: math },
    { image: ukrainian },
]

let subjectsArray = subjects.map(
    subjectImage => <Test
        image={subjectImage.image}
    />
)


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


function Test_arr() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "180px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <div className="Test_arr">
            <Slider {...settings}>
                {subjectsArray}
            </Slider>
        </div>
    )
}

export default Test_arr;