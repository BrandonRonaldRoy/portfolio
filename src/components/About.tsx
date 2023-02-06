import React from "react";

function About() {
    return (
        
            <div className="flex flex-col items-center justify-evenly h-fit m-6 sm:m-12 rounded-2xl bg-slate-300 lg:h-[calc(100vh-7vh)] shadow-2xl">
                <h1 className="mb-10 mt-3 text-xl sm:text-4xl font-semibold text-noelle-blue">Who is Brandon Roy?</h1>
                <div className="flex flex-col lg:flex-row items-center">
                    <img className="ml-6 rounded-full w-1/2 md:w-1/3 shadow-lg" src={require('../images/me.jpg')} alt="Me smiling with one of my cats"></img>
                    <p className="p-10 text-base md:text-lg">Hey there, nice to meet you! I'm Brandon Roy, a programmer by day and all-around tech nerd by night. I'm looking to graduate from NSCC's IT Web Programming this spring so a lot of my current knowledge stems from my learning there, but I absolutely love many different areas of the IT field. I've had to move house like 4 times in the past 6 months and that has prevented me from exploring my own personal projects, but I plan to change that as soon as I find the free time. Currently my final semester at NSCC fills most of my day with insanely cool projects, for example; for our Capstone project, my team and I are building and deploying an app that helps combat human trafficking and domestic violence by sending out an alert to a safe contact list! and for our Self Directed Learning course I'm learning how to build a hovercraft out of a handheld vacuum and some Tupperware and controlling it's movement using a Raspberry pi connected to the internet!</p>
                </div>
            </div>
    );
}

export default About;