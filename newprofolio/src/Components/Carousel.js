import React from 'react'
// import { FaGreaterThan,FaLessThan } from "react-icons/fa"; // using react icons instead of imgs is much better
import Animal from '../images/Cute_Animals.png';
import OurMenu from '../images/Our_Menu.png';
import OurTour from '../images/Our_Tour.png';
import Review from '../images/This_review.png';
import JsWork from '../JS/carousel';

const Carousel = () => {
    return (
        <div>  
            <div className="carousel">
                <div className="carousel__item carousel__item--selected">
                    <a href="https://heuristic-northcutt-4bd4ee.netlify.app/"><img className="carousel__image" src={Animal} alt=""></img></a>
                </div>
                <div className="carousel__item">
                    <a href="https://jolly-allen-9ee599.netlify.app/"><img className="carousel__image" src={OurMenu} alt=""></img></a>
                </div>
                <div className="carousel__item">
                    <a href="https://xenodochial-davinci-cedcf4.netlify.app/"><img className="carousel__image" src={OurTour} alt=""></img></a>
                </div>
                <div className="carousel__item">
                <a href="https://priceless-kilby-506c27.netlify.app/"><img className="carousel__image" src={Review} alt=""></img></a>
                </div>
            </div>
            <script src={JsWork}></script>
        </div>
    )
}

export default Carousel
