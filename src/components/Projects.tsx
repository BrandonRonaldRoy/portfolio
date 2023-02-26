import React from "react";

import Slider from "react-slick";

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
    }
    return (
        <div className="w-full h-fit mb-36 text-white">
            <div className="flex justify-center">
                <h1 className="mb-20 mt-10 text-xl sm:text-4xl font-semibold">Projects</h1>
            </div>
            <div className="w-9/12 m-auto">
                <Slider {...settings}>
                    <p className="text-center font-bold text-2xl">Building WordPress Sites for Clients</p>

                    <div className="my-20">
                        <img src={require('../images/websites.png')} alt="Screen shot of the 3 sites I made for clients"></img>
                    </div>
                
                    <div className="text-justify text-sm p-10 z-[-1]">
                        <p>
                            During my first year work placement at NSCC, I had the opportunity to work on my own directly with clients to build custom WordPress websites tailored to their specific needs. This project allowed me to gain hands-on experience and to develop my skills in web development and project management.
                        </p>
                        <br></br>
                        <p>
                            Throughout the project, I worked closely with each client to understand their unique requirements and preferences. I communicated regularly with them to provide updates on the website's progress and to gather feedback and suggestions for improvement.
                        </p>
                        <br></br>
                        <p>
                            Thanks to this experience, I learned the importance of effective communication, project planning, and client collaboration in delivering successful web development projects. It also allowed me to develop my technical skills in WordPress development and I learned a lot about hosting.
                        </p>
                        <br></br>
                        <p>
                            Overall, this project was a valuable learning experience and helped me to develop my skills and confidence.</p>
                    </div>
                    
                    <p className="text-center font-bold mb-10 text-2xl">Capstone - Safe Contact App</p>

                    <div>
                        <img src={require('../images/SafetyNet.png')} className="m-auto" width="150" height="300" alt="Screen shot of the 3 sites I made for clients"></img>
                    </div>
                
                    <div className="text-justify text-sm p-10">
                        <p>
                            Our team's capstone project is a mobile application designed to combat human trafficking and domestic violence by providing users with a safe and reliable way to share their location and record evidence in real-time.
                        </p>
                        <br />
                        <p>
                            The app, tentatively called SafetyNet, allows users to create a safe contact list of trusted friends and family members. In the event of an emergency, the user can open the app, and without any other input from the user, send a text message to all contacts on their list, including their GPS location and other critical information.
                        </p>
                        <br />
                        <p>
                            To capture evidence, the app can also record video and audio in real-time, which can be used in court to support the user's case. We are still working on the method of storing this information whether in the cloud or just locally on the phone.
                        </p>
                        <br />
                        <p>
                            Overall, we believe that SafetyNet has the potential to make a significant impact in combating human trafficking and domestic violence by providing a reliable and accessible tool for those in need of help.
                        </p>
                    </div>
                    
                </Slider>

            </div>
        </div>
    );
}

export default Projects;