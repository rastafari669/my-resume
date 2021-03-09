import React from 'react'

const Experience = () => {
    return (
        <div id='experience' data-aos='zoom-in' className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>experience</h1>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-today</h3>
                        <h4>Front-End Developer at Willing App-</h4>
                        <p><span >Key Qualifications and Responsibilities:</span> 
                            <br/>
                            -Implemented Front-End responsive websites using React.js library
                            <br/>
                            -Collaboration with the Senior Web Developer and rest of the team, to clean up processes,
                            boost performance and refine code
                            <br/>
                            -UI design
                            <br/>
                            -Posting and fetching data to/from server,and storing it locally via Redux (global state)
                            and Localstorage/SessionStorage
                            <br/>
                            -Presenting the visual elements in a user-friendly
fashion
<br/>
-Debugging and dealing with error messages from
the server and client side

                        </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016-2019</h3>
                        <h4>Swimming Pool Maintenance Inspector-
                            
                        </h4>
                        <p>responsibilities: pool sampling,regular inspection of filtering systems,chloride monitoring.</p>
                    </div>
                </div>

               
            </div>
            
        </div>
    )
}

export default Experience
