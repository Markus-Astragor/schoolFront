import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import history from '../../../images/ChooseTests/history.png';
import geography from '../../../images/ChooseTests/geography.png';
import math from '../../../images/ChooseTests/math.png';
import ukrainian from '../../../images/ChooseTests/ukrainian.png';
import ukrainian_literature from '../../../images/ChooseTests/ukrainian_literature.png';
import english from '../../../images/ChooseTests/english.png';
import Test from "./Test";


let subjects = [
    { image: history, subjectName: 'Історія', link: '/history' },
    { image: geography, subjectName: 'Географія', link: '/geography' },
    { image: math, subjectName: 'Математика', link: '/math' },
    { image: ukrainian, subjectName: 'Українська мова', link: '/ukrainian' },
    { image: ukrainian_literature, subjectName: 'Українська література', link: '/ukrainian_literature' },
    { image: english, subjectName: 'Англійська', link: '/english' },
]

let subjectsArray = subjects.map(
    subject => <Test
        image={subject.image}
        subjectName={subject.subjectName}
        link={subject.link}
    />
)


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
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
        infinite: false,
        slidesToShow: 3,
        speed: 1500,
        rows: 2,
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    rows: 2,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    rows: 2,
                    infinite: false,
                    dots: false
                }
            },

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    infinite: false,
                    dots: false
                }
            },

        ]
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