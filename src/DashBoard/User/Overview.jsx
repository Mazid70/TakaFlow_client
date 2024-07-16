import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
  const { newUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut().then(() => {
      navigate('/');
    });
  };
  return (
    <section className="text-white self-start mt-20">
      <div className="flex gap-10">
        {/* one  */}
        <div className="bg-[#0B0D27] px-5 py-10 flex items-center gap-5 rounded w-[320px] h-[170px]">
          <div className="">
            <img src="man.png" className="h-14 w-14 rounded-full" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-2xl">{newUser?.name}</h1>
            <h1 className="font-semibold text-xl">+88 {newUser?.phone}</h1>
            <h1
              className="font-bold text-lg text-blue-500 text-right cursor-pointer "
              onClick={handleLogOut}
            >
              LogOut
            </h1>
          </div>
        </div>
        {/* two  */}
        <div className="bg-[#0B0D27] px-5 py-10 flex items-center gap-5 rounded w-[320px] h-[170px]">
          <div className="bg-[#1A1F37] rounded p-2">
            <FaUser className="text-4xl text-blue-600" />
          </div>
          <div>
            <h1 className="font-bold text-lg">User Details</h1>
            <h1 className="font-semibold">{newUser?.email}</h1>
            <h1 className="font-semibold ">Role: {newUser.role}</h1>
          </div>
        </div>
        {/* three  */}
        <div className="bg-[#0B0D27] px-5 py-10 flex items-center gap-5 rounded w-[320px] h-[170px]">
          <div className="bg-[#1A1F37] rounded ">
            <MdAttachMoney className="text-5xl text-blue-600" />
          </div>
          <div>
            <h1 className="font-bold text-2xl">
              Balance : {newUser.balance} Tk
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
