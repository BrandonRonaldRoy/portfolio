import React from "react";
import { useInView } from 'react-intersection-observer';


function About() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
            <div ref={ref} className={`h-fit my-6 sm:m-12 rounded-2xl bg-slate-300 lg:h-[calc(100vh-7vh)] shadow-2xl ${inView ? 'motion-safe:animate-wipe-enter' : ''} ${inView ? 'visible' : 'invisible'}`}>
                
                <div className="flex flex-col items-center justify-evenly">
                    <h1 className="mb-10 mt-6 text-xl sm:text-4xl font-semibold text-noelle-blue motion-safe:animate-bounce">About Me</h1>
                    <div className={`flex flex-col lg:flex-row items-center`}>
                    {inView ?
                        <img className="ml-6 rounded-full w-1/2 md:w-1/3 shadow-lg" src={require('../images/me.jpg')} alt="Me smiling with one of my cats"></img>
                    :    
                        ""
                    }
                        <div className="flex flex-col p-10 text-base md:text-lg">
                            <p>Hello, my name is <b>Brandon Roy</b>, and I'm close to graduating from the IT Web Programming program at NSCC. I am a passionate and driven individual with a strong interest in technology and a desire to work on cool projects.
                            </p>
                            <br></br>
                            <p>
                            Throughout my college career, I gained valuable experience in a variety of IT-related fields, including software development, network administration, and database management (although if I'm being honest my strong suit lies in programming and debugging). I have honed my skills in programming languages such as React and Python and have experience with tools such as Git, SQL, and Linux.
                            </p>
                            <br></br>
                            <p>
                            I am excited to take the next step in my career and apply my knowledge and skills to make a meaningful contribution to a company or organization. Whether it's through creating innovative software solutions or developing efficient systems, I am committed to using technology to drive positive change.
                            </p>
                            <br></br>
                            <p>
                            Thank you for taking the time to learn more about me. If you're interested in discussing potential opportunities or collaborating on a project, please don't hesitate to contact me.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default About;