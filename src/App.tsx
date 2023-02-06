import React from 'react';
import Menu from './components/Menu';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div id='home'>
      <Menu></Menu>
      <div className='flex flex-col items-center justify-center h-screen'>
        <img className='md:w-2/3' src={require("./images/landingPic.jpg")} alt="Large pixel art of me and a cat at a computer" />
        <div className='w-full flex justify-center'>
          <SocialIcon url="https://github.com/BrandonRonaldRoy" className='hover:outline text-white rounded-full m-2 hover:bg-sky-900' target='_blank' bgColor='transparent' fgColor='white'></SocialIcon>
          <SocialIcon url="https://www.linkedin.com/in/brandon-roy-380777225/" className='hover:outline text-white rounded-full m-2 hover:bg-sky-900' target='_blank' bgColor='transparent' fgColor='white'></SocialIcon>
          <SocialIcon url="mailto:brandonronaldroy@gmail.com" className='hover:outline text-white rounded-full m-2 hover:bg-sky-900' target='_blank' bgColor='transparent' fgColor='white'></SocialIcon>
        </div>
      </div>
      <span id='about'></span>
      <div className='h-fit lg:h-screen'>
        <About></About>
      </div>
      <span id='projects'></span>
      <div className='h-screen'>
        <Projects></Projects>
      </div>
      <span id='testimonials'></span>
      <div className='h-screen'>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}

export default App;
