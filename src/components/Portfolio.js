import React from 'react';
import proshop from '../proshop.png';
import memories from '../memories.png';
import pizza from '../pizza.png';
import netflix from '../netflix.png';
import crown from '../crown.png';
import movie from '../movie.png';

// FONT AWESOME IMPORT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {PopupboxContainer,PopupboxManager} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';


const Portfolio = () => {


       //Moviedb
const openPopUpBoxMovie = () =>{
    const content = (
    <>
    <h2 className='title'>MovieDB</h2>
    <img className='portfolio-image-popupbox' src={movie} alt="crown"/>
    <p>Search for the most popular movies</p>
    <b>Github:</b> <a className='hyper-link' onClick={() => window.open("https://github.com/rastafari669/movieDB")}>https://github.com/rastafari669/movieDB</a>
<br/>
    
    
    </>
    )
    
    PopupboxManager.open({content})
}

const popupboxConfigMovie ={
titleBar: {
    enable:true,
    
},
fadeIn: true,
fadeInSpeed: 500
}


    //Crown
const openPopUpBoxCrown = () =>{
    const content = (
    <>
    <h2 className='title'>Crown Clothing</h2>
    <img className='portfolio-image-popupbox' src={crown} alt="crown"/>
    <p>Online clothing shop</p>
    <b>Github:</b> <a className='hyper-link' onClick={() => window.open("https://github.com/rastafari669/crown.git")}>https://github.com/rastafari669/crown.git</a>
    <br/>
    <b>Demo:</b> <a className='hyper-link' onClick={() => window.open("https://rastafari669.github.io/crown/")}>https://rastafari669.github.io/crown/</a>
    </>
    )
    
    PopupboxManager.open({content})
}

const popupboxConfigCrown ={
titleBar: {
    enable:true,
    
},
fadeIn: true,
fadeInSpeed: 500
}


//Netflix
const openPopUpBoxNetflix = () =>{
    const content = (
    <>
    <h2 className='title'>Netflix Clone</h2>
    <img className='portfolio-image-popupbox' src={netflix} alt="netflix Clone"/>
    <p>Beautiful UI Netflix clone.</p>
    <b>Github:</b> <a className='hyper-link' onClick={() => window.open("https://github.com/rastafari669/netflix-clone")}>https://github.com/rastafari669/netflix-clone</a>
    <br/>
    <b>Demo:</b> <a className='hyper-link' onClick={() => window.open(" https://rastafari669.github.io/netflix-clone/")}> https://rastafari669.github.io/netflix-clone/</a>
    </>
    )
    
    PopupboxManager.open({content})
}

const popupboxConfigNetflix ={
titleBar: {
    enable:true,
    
},
fadeIn: true,
fadeInSpeed: 500
}


//Proshop
const openPopUpBoxProshop = () =>{
    const content = (
    <>
    <h2 className='title'>Proshop</h2>
    <img className='portfolio-image-popupbox' src={proshop} alt="proshop"/>
    <p>Full-Stack App. Electronic Online shop in which a user can register,sign in ,view the products,comment and more..</p>
    <b>Github:</b> <a className='hyper-link' onClick={() => window.open("https://github.com/rastafari669/electroShop")}>https://github.com/rastafari669/electroShop</a>
    <br/>
    <b>Demo:</b> <a className='hyper-link' onClick={() => window.open("https://elecshop.herokuapp.com/")}>https://elecshop.herokuapp.com/</a>
    </>
    )
    
    PopupboxManager.open({content})
}

const popupboxConfigProShop ={
titleBar: {
    enable:true,
    // text:'Proshop - Electronic online shop'
},
fadeIn: true,
fadeInSpeed: 500
}


//Pizza
const openPopUpBoxPizza = () =>{
    const content = (
    <>
    <h2 className='title'>Pizza Shop</h2>
    <img className='portfolio-image-popupbox' src={pizza} alt="pizza"/>
    <p>Beautiful UI pizza shop landing page.</p>
    <b>Github:</b> <a className='hyper-link' onClick={() => window.open("https://github.com/rastafari669/pizzashop")}>https://github.com/rastafari669/pizzashop</a>
    <br/>
    <b>Demo:</b> <a className='hyper-link' onClick={() => window.open("https://rastafari669.github.io/pizza-shop/")}>https://rastafari669.github.io/pizza-shop/</a>
    </>
    )
    
    PopupboxManager.open({content})
}

const popupboxConfigPizza ={
titleBar: {
    enable:true,
    // text:'Pizza Shop'
},
fadeIn: true,
fadeInSpeed: 500
}



//Memories
const openPopUpBoxMemories = () =>{
    const content = (
    <>
    <h2 className='title'>Memories</h2>
    <img className='portfolio-image-popupbox' src={memories} alt="memories"/>
    <p>Full-Stack web aplication in which a user can register and sign in to his/her account and create memory cards.</p>
    <b>Github:</b> <a className='hyper-link' onClick={() => window.open("https://github.com/rastafari669/memories")}>https://github.com/rastafari669/memories</a>
    <br/>
 
    </>
    )
    
    PopupboxManager.open({content})
}

const popupboxConfigMemories ={
titleBar: {
    enable:true,
    // text:'Memories Blog'
},
fadeIn: true,
fadeInSpeed: 500
}


    return (
        <div id='portfolio' className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    Portfolio
                </h1>
                <div className="image-box-wrapper row justify-content-center">

                    <div data-aos="fade-down-right" className="portfolio-image-box" onClick={openPopUpBoxProshop} >
                     
                     <img className='portfolio-image' src={proshop} alt="proshop"/>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                     </div>
               

             
                <div data-aos="fade-down-right" className="portfolio-image-box" onClick={openPopUpBoxMemories}>
                
                     <img className='portfolio-image' src={memories} alt="proshop"/>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                     </div>
               

               
                <div data-aos="fade-down-left" className="portfolio-image-box" onClick={openPopUpBoxNetflix}>
                
                     <img className='portfolio-image' src={netflix} alt="proshop"/>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                     </div>
              

         
                <div data-aos="fade-down-left" className="portfolio-image-box" onClick={openPopUpBoxPizza}>
                
                     <img className='portfolio-image' src={pizza} alt="proshop"/>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                     </div>

                     <div data-aos="fade-down-right" className="portfolio-image-box" onClick={openPopUpBoxCrown}>
                
                     <img className='portfolio-image' src={crown} alt="crown"/>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                     </div>

                     <div data-aos="fade-down-left" className="portfolio-image-box" onClick={openPopUpBoxMovie}>
                
                <img className='portfolio-image' src={movie} alt="proshop"/>
                <div className="overflow"></div>
                <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                </div>
                     
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigMemories}/>
            <PopupboxContainer {...popupboxConfigNetflix}/>
            <PopupboxContainer {...popupboxConfigProShop}/>
            <PopupboxContainer {...popupboxConfigPizza}/>
            <PopupboxContainer {...popupboxConfigCrown}/>
            <PopupboxContainer {...popupboxConfigMovie}/>
     
        </div>
    )
}

export default Portfolio
