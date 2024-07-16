import React from 'react';
import Register from './User/Register';
import Navbar from '../../Components/Navbar';
const Home = () => {
  return (
    <main className='bg-[url(Background.png)] bg-no-repeat bg-cover'>
      <Navbar />
       <div className="container mx-auto h-screen flex items-center justify-center ">
      <Register />
    </div>
    </main>
   

  );
};

export default Home;
