import React from 'react';
import {LinkedinIcon,LinkedinShareButton} from 'react-share';

const Footer = () => {
    return (
       <div id='contacts' className="footer">
           <div className="container">
               <div className="row">
                   <div className="col-lg-4 col-md-6 col-sm-6 my-info">

                   <div className="d-flex">
                           <p className='info'>Joey Kraus</p>
                       </div>
                       <div className="d-flex">
                           <p className='info'>City: Tel-Aviv Jaffa</p>
                       </div>

                       <div className="d-flex">
                           <a className='info' href="tel: 052-2033084">Tel: 052-2033084</a>
                       </div>

                       <div className="d-flex">
                           <a className='info' href='joeykraus789@gmail.com'>Email: joeykraus789@gmail.com</a>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-2 col-sm-6">
                       <div className="row">
                           <div className="col">
                               <a className='footer-nav'>Home</a>
                               <br/>
                               <a className='footer-nav'>About me</a>
                               <br/>
                               <a className='footer-nav'>Education</a>
                           </div>

                           <div className="col">
                               <a className='footer-nav'>Experience</a>
                               <br/>
                               <a className='footer-nav'>Portfolio</a>
                               <br/>
                               <a className='footer-nav'>Contacts</a>
                           </div>

                        
                       </div>
                   </div>
   
                   <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <LinkedinShareButton 
                        url={"https://www.linkedin.com/in/joey-kraus-3678051b2"}
                        quote={'Front-End'}
                        hashtag={'#javascript'}
                        >
                        <LinkedinIcon className='mx-3' size={36}/>
                        
                        </LinkedinShareButton>
                    </div>
                    <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;All rights reserved Joey Kraus
                    </p>
                   </div>


               </div>
           </div>
       </div>
    )
}

export default Footer
