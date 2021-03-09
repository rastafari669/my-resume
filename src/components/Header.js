import React,{useEffect} from 'react';
import Typed from 'react-typed';
import Navbar from './Navbar';
import Avatar from '../avatar.png';
import {Link} from 'react-scroll'


const Header = () => {

   

    return (
        <>
       
        <div id='home' className='header-wrapper'>
        <Navbar/>
            <div data-aos='flip-up' className="main-info">
                <img className='avatar' src={Avatar} alt="avatar"/>
                <h1 >Hello, my name is  {' '} <span> Joey kraus </span> {' '}  and i am a</h1>
                
                 <Typed 
                 className='typed-text'
                 strings={['Web Developer','Front-End Developer']}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                 />
                 <Link smooth={true}  to='contacts' href="#" className='btn-main-offer'>Contact Me</Link>

            </div>
        </div>
        </>
    )
}

export default Header
