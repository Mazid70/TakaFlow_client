import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../CustomHooks/AxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const{signIn}=useContext(AuthContext)
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pin = form.pin.value;
    const password=123456;
    console.log(name, pin);
    axiosPublic.get(`/users/${name}`).then(res => {
      if (parseInt(res.data.pin) === parseInt(pin)) {
        // navigate('/dashboard')
      } else return alert('incorrect pin');
      
      signIn(res?.data?.email,password)
      .then(()=>{
        Swal.fire({
          title: 'Good job!',
          text: 'Registratin successfull',
          icon: 'success',
          color: '#fff',
          background: '#000000', // Set background to black
        });
        navigate('/dashboard');
      })
      
    });
  };

  return (
    <section className=" bg-[url(public/Background.png)] bg-cover bg-no-repeat">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className=" p-8 rounded bg-white bg-opacity-5">
          <h1 className="font-bold text-4xl italic text-white mb-5">Log In</h1>
          <form
            className="text-white w-[300px] space-y-3"
            onSubmit={handleLogIn}
          >
            <div className="relative">
              <MdEmail className="absolute text-gray-400 top-9 left-3 text-lg" />

              <br />
              <input
                type="text"
                name="name"
                className="h-10 w-full pl-14 bg-transparent border-b-2 outline-0"
                placeholder="Enter Your Email or phone number"
                required
              />
            </div>

            <div className="relative">
              <RiLockPasswordFill className="absolute text-gray-400 top-9 left-3 text-lg" />

              <br />
              <input
                name="pin"
                type="password"
                className="h-10 w-full  pl-14 bg-transparent border-b-2 outline-0"
                placeholder="Enter Your Pin"
                required
              />
            </div>
            <div>
              <input
                type="submit"
                value="Log In"
                className="bg-blue-600 h-10 w-full rounded mt-5"
              />
            </div>
          </form>
          <h1 className=" font-bold text-white mt-2 text-center">
           Don't have an account?{' '}
            <Link to='/' className="hover:text-blue-500 hover:underline">Register</Link>
          </h1>
          
          </div>
      </div>
    </section>
  );
};

export default Login;
