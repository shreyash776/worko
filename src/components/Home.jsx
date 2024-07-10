import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-custom-gradient">
      <img
        className="absolute top-40 right-0 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/7 xl:w-1/8"
        src="/globe-img.png"
        alt="globe"
      />
      <img
        className="absolute top-10 left-20 w-28"
        src="/index-side-timeline.png"
        alt="index-side"
      />
      <div className="bg-white bg-opacity-5 p-8 rounded-lg shadow-lg z-50 text-center w-2/3 ">
        <h1 className="text-[#57E1E1]  font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
          Unlock Your Career Potential with Worko
        </h1>
        <p className="text-[#57E1E1] text-opacity-80 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6">
          Worko helps job seekers to:
        </p>
        <ul className="text-white  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 list-disc list-inside">
          <li>Request referrals from multiple companies</li>
          <li>Get resume reviews from industry experts</li>
          <li>Receive career guidance tailored to your goals</li>
          <li>Practice with mock interviews</li>
        </ul>
        <div className="flex space-x-4 justify-center">
        <Link to='referralpage'> <button className="border-2 border-[#57E1E1] text-[#57E1E1] hover:bg-[#57E1E1] hover:text-white  font-bold py-3 px-6 rounded">
            
            Get Referral
          </button></Link>
          <Link to='requestedlist'> <button className="border-2 border-[#57E1E1] text-[#57E1E1] hover:bg-[#57E1E1] hover:text-white  font-bold py-3 px-6 rounded">
           
            Requested 
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
