import React from 'react';
import author from '../me.png'

const AboutMe = () => {
    return (
        <div id='about' className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img data-aos='fade-right' className='profile-img' src={author} alt="author..."/>
                    </div>
                      
                </div>

                <div data-aos='fade-left' className="col-lg-6 col-xm-12">
                    <h1  className='about-heading'>About me</h1>
                    <p>
                        Hi my name is Joey Kraus and I am passionate energetic  Front-End Engineer with over
                        2 years of coding experience building and maintaining reponsive websites.
                        Working mainly with web based innovative technologies : Javascript ES6, CSS3, HTML5
                        as well as significant knowledge with popular frameworks and libraries like React.js and Redux.
                        In addition, I have experience with back-end technnologies as well: Node.js, Express, MongoDB,
                        Mongoose.
                        Looking forward to our collaboration!.
                
                    </p>
                    </div>
            </div>
        </div>
    )
}

export default AboutMe
