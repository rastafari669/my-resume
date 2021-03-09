import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDesktop,faFileCode} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div id='education' className="services">
            <h1 className="py-5 title-ed">Education</h1>
                <div className="container">
                    <div className="row">
                        <div data-aos='fade-down' className="col">
                            <div className="box">
                               <div className="circle"> <FontAwesomeIcon className='icon' icon={faDesktop} size='2px'/></div>
                               <p>2018</p>
                                <h3>Shenkar College of Engineering and Design</h3>
                                <p>Rich curriculum Programming in multiple languages such as : C, C#, Java, Javascript.
                                    Majoring in Web Developement & App Development.
                                </p>
                            </div>
                        </div>
 {/*  */}
                        <div data-aos='fade-down' className="col">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon className='icon' icon={faFileCode} size='2px'/></div>
                            <p>2020</p>
                                <h3>SVcollege - Web Development</h3>
                                <p>
                                    Front-end Certificate.
                                     Building multiple web based applications, using React.js library
                                </p>
                            </div>
                        </div>
{/*  */}
                       
                    </div>
                </div>
            
        </div>
    )
}

export default Services;
