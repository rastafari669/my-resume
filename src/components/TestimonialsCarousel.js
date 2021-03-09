import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import javascript from '../javascript.png';
import css from '../css.png';
import html from '../html.png';
import react from '../react.png';
import sass from '../sass.png';
import styled from '../styled.png';
import node from '../node.jpeg';
import mongo from '../mongo.jpg';
import mongoose from '../mongoose.jpg';
import express from '../express.png';
import firebase1 from '../firebase1.png';
import redux from '../Redux.png';


const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
            <img src={javascript} alt="javascript"/>
            <div className="myCarousel">
            <h3>Javascript ES6</h3>
            </div>
           
            </>
            <>
            <img src={css} alt="css"/>
            <div className="myCarousel">
            <h3>CSS3</h3>
            </div>
            </>
            <>
            <img src={html} alt="html"/>
            <div className="myCarousel">
            <h3>HTML5</h3>
            </div>
            </>
            <>
            <img src={react} alt="react"/>
            <div className="myCarousel">
            <h3>React.js</h3>
            </div>
            </>

            <>
            <img src={redux} alt="redux"/>
            <div className="myCarousel">
            <h3>Redux</h3>
            </div>
            </>
            <>
            <img src={styled} alt="styled"/>
            <div className="myCarousel">
            <h3>Styled Components</h3>
            </div>
            </>

            <>
            <img src={sass} alt="sass"/>
            <div className="myCarousel">
            <h3>Sass</h3>
            </div>
            </>

            <>
            <img src={node} alt="javascript"/>
            <div className="myCarousel">
            <h3>Node.js</h3>
            </div>
            </>

            <>
            <img src={mongo} alt="javascript"/>
            <div className="myCarousel">
            <h3>MongoDB</h3>
            </div>
            </>

            <>
            <img src={mongoose} alt="javascript"/>
            <div className="myCarousel">
            <h3>Mongoose</h3>
            </div>
            </>

            <>
            <img src={express} alt="javascript"/>
            <div className="myCarousel">
            <h3>Express.js</h3>
            </div>
            </>

            <>
            <img src={firebase1} alt="javascript"/>
            <div className="myCarousel">
            <h3>Firebase </h3>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
