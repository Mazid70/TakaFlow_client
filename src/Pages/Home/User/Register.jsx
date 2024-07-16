import { useState } from 'react';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const Register = () => {
  const [isVisible,setVisible]=useState(false);
  const handleShowPassword=()=>{
    setVisible(!isVisible)
  }
  return (
    <div className=" p-8 rounded bg-white bg-opacity-5">
      <h1 className="font-bold text-4xl italic text-white mb-5">Register</h1>
      <form className="text-white w-[300px] space-y-3">
        <div className="relative">
          <FaUser className="absolute text-gray-400 top-9 left-3 text-lg " />
          
          <br />
          <input
            type="text"
            className="h-10 w-full  pl-14  bg-transparent border-b-2 outline-0"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="relative">
          <MdEmail className="absolute text-gray-400 top-9 left-3 text-lg" />
          
          <br />
          <input
            type="email"
            className="h-10 w-full pl-14 bg-transparent border-b-2 outline-0"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="relative">
          <FaPhoneAlt className="absolute text-gray-400 top-9 left-3 text-lg" />
         
          <br />
          <input
            type="number"
            className="h-10 w-full  pl-14 bg-transparent border-b-2 outline-0"
            placeholder="Enter Your Phone Number "
          />
        </div>
        <div className="relative">
          <RiLockPasswordFill className="absolute text-gray-400 top-9 left-3 text-lg" />
      
          <br />
          <input
            type={isVisible?"number":"password"}
            className="h-10 w-full  pl-14 bg-transparent border-b-2 outline-0"
            placeholder="Enter Your Pin"
            title="Minimum 5 number"
          />
          {isVisible?<IoIosEyeOff onClick={handleShowPassword} className="absolute text-gray-400 top-9 right-3 text-xl"/>:<IoIosEye onClick={handleShowPassword}  className="absolute text-gray-400 top-9 right-3 text-xl"/>}
          
        </div>
        <div>
          <input
            type="submit"
            value="Create Account"
            className="bg-blue-600 h-10 w-full rounded mt-5"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
