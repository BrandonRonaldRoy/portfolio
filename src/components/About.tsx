import React from "react";
import { useInView } from 'react-intersection-observer';


function About() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
            <div ref={ref} className={`my-6 sm:m-12 rounded-2xl bg-slate-300 shadow-2xl`}>
                
                <div className="flex flex-col items-center justify-evenly">
                    <h1 className="mt-6 text-xl sm:text-4xl font-semibold text-noelle-blue motion-safe:animate-[bounce_2s_infinite]">About Me</h1>
                    <div className={`flex flex-col lg:flex-row items-center`}>
                    {inView ?
                        <img className="lg:ml-6 rounded-full w-1/2 md:w-1/3 shadow-lg" src={require('../images/me.jpg')} alt="Me smiling with one of my cats"></img>
                    :    
                        ""
                    }
                        <div className="flex flex-col p-10 text-base md:text-lg text-justify">
                            <p>Hello, my name is <b>Brandon Roy</b>, and I'm close to graduating from IT Web Programming at NSCC. I am a passionate and driven individual with a strong interest in technology and a desire to work on cool projects.
                            </p>
                            <br></br>
                            <p>
                            Throughout my college career, I gained valuable experience in a variety of IT-related fields, including web development, programming, and project management (although if I'm being honest my strong suit lies in programming and debugging). I have honed my skills in programming languages such as React and Python and have experience with tools such as Git, SQL, and Linux.
                            </p>
                            <br></br>
                            <p>
                            I am excited to take the next step in my career and apply my knowledge and skills to make a meaningful contribution to a company or organization.
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