import React, { useRef } from 'react';
import avatarImg from "../assets/3d-illustration-smiling-happy-man-600nw-1740135179.webp"
import TextChange from './TextChange';
//import Footer from './Footer';
const Home = () => {
    return (
        <div className='text-white flex w-full justify-between items-start p-10 md:p-20'> 
           <div className="md:w-2/4 md:pt-10 "> 
           <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'> <TextChange/> </h1>
           <p className='text-sm md:text-2xl tracking-tight'> 
                Quick learner with academic 
                abilities and technical knowledge to 
                succeed in different roles. Ready to 
                expand horizons with additional 
                knowledge and abilities gained from 
                training and experience. Always 
                ready to help others and use abilities 
                to support team goals.
           </p>
           <div>
           <h1 className='mt-5 md:md-10 text-white font-bold text-4xl
            '> Contact Me</h1>
           <ul>
            <li>01754968233</li>
            <li>Chittagong,3827</li>
            <li>shantocse612@gmail.com</li>
           </ul>
           </div>
   
           
           </div>
           <div><img  src={avatarImg} alt="" /></div>
        </div>
    );
};

export default Home;