import { useContext, useState } from 'react';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import useAxiosPublic from '../../../CustomHooks/AxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';



const Register = () => {
  const {createUser}=useContext(AuthContext)
  const [isVisible, setVisible] = useState(false);
  const axiosPublic=useAxiosPublic();
  const navigate=useNavigate();

  const handleShowPassword = () => {
    setVisible(!isVisible);
  };
 
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const pin = form.pin.value;
    const balance=40;
    const role="user";
    const password=parseInt(Math.random()*999999)
    const userInfo = { name, email, phone, pin,role,balance };
    createUser(email,password).then(()=>{
      axiosPublic.post('/users',userInfo)
      .then(()=>{
        Swal.fire({
          title: "Good job!",
          text: "Registratin successfull",
          icon: "success",
          color:"#fff",
          background: "#000000" // Set background to black
        });
        navigate('/dashboard')
      })
    })
    
  };
  return (
    <div className=" p-8 rounded bg-white bg-opacity-5">
      <h1 className="font-bold text-4xl italic text-white mb-5">Register</h1>
      <form className="text-white w-[300px] space-y-3" onSubmit={handleRegister}>
        <div className="relative">
          <FaUser className="absolute text-gray-400 top-9 left-3 text-lg " />

          <br />
          <input
            type="text"
            name="name"
            className="h-10 w-full  pl-14  bg-transparent border-b-2 outline-0"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="relative">
          <MdEmail className="absolute text-gray-400 top-9 left-3 text-lg" />

          <br />
          <input
            type="email"
            name="email"
            className="h-10 w-full pl-14 bg-transparent border-b-2 outline-0"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="relative">
          <FaPhoneAlt className="absolute text-gray-400 top-9 left-3 text-lg" />

          <br />
          <input
            type="number"
            name="phone"
            className="h-10 w-full  pl-14 bg-transparent border-b-2 outline-0"
            placeholder="Enter Your Phone Number "
            required
          />
        </div>
        <div className="relative">
          <RiLockPasswordFill className="absolute text-gray-400 top-9 left-3 text-lg" />

          <br />
          <input
            name="pin"
            type={isVisible ? 'number' : 'password'}
            className="h-10 w-full  pl-14 bg-transparent border-b-2 outline-0"
            placeholder="Enter Your Pin"
            required
          />
          {isVisible ? (
            <IoIosEyeOff
              onClick={handleShowPassword}
              className="absolute text-gray-400 top-9 right-3 text-xl"
            />
          ) : (
            <IoIosEye
              onClick={handleShowPassword}
              className="absolute text-gray-400 top-9 right-3 text-xl"
            />
          )}
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
