import React from 'react';

function Menu() {
    return (
        <nav className="w-full flex justify-center bg-opacity-0 px-2 py-2.5 rounded z-50">
            <div className="container flex flex-col flex-wrap items-center justify-between fixed h-[calc(100vh-4vh)] md:h-auto md:flex-row w-full animate-wipe-enter">
                <a href="#home" className="flex items-center ml-2">
                    <img src={require("../images/logo.png")} className="h-9 mr-3" alt="Logo of my initials BRR where they look icy" />
                    <span className="hover:animate-pulse self-center text-xl font-semibold whitespace-nowrap text-white">Brandon Roy Portfolio</span>
                </a>
                <div>
                    <ul className="flex flex-row mt-0 text-sm font-medium">
                        <li>
                            <a href="#home" className="bg-noelle-blue border-x-2 border-t-2 border-white md:border-x-0 md:border-t-0 md:bg-opacity-0 text-white md:hover:outline md:focus:ring-4 md:focus:ring-blue-300 md:font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 active:bg-sky-900 hover:bg-sky-900" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="bg-noelle-blue border-x-2 border-t-2 border-white md:border-x-0 md:border-t-0 md:bg-opacity-0 text-white md:hover:outline md:focus:ring-4 md:focus:ring-blue-300 md:font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 active:bg-sky-900 hover:bg-sky-900">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="bg-noelle-blue border-x-2 border-t-2 border-white md:border-x-0 md:border-t-0 md:bg-opacity-0 text-white md:hover:outline md:focus:ring-4 md:focus:ring-blue-300 md:font-medium text-sm px-5 py-2.5 mr-2 mb-2 active:bg-sky-900 hover:bg-sky-900 rounded-lg">Projects</a>
                        </li>
                        <li>
                            <a href="#testimonials" className="bg-noelle-blue border-x-2 border-t-2 border-white md:border-x-0 md:border-t-0 md:bg-opacity-0 text-white md:hover:outline md:focus:ring-4 md:focus:ring-blue-300 md:font-medium text-sm px-5 py-2.5 mr-2 mb-2 active:bg-sky-900 hover:bg-sky-900 rounded-lg">Testimonials</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;