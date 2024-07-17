import { Outlet } from 'react-router-dom';
import { adminLinks, agentLinks, userLinks } from './DashboardRoutes';
import useAxiosPublic from '../CustomHooks/AxiosPublic';
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {
  const { user ,setNewUser} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  console.log(user?.email)
  const { data: data = '', refetch } = useQuery({
    queryKey: ['newUser', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  setNewUser(data)
  console.log(data);
  return (
    <section className="bg-blue-900 flex ">
      <div className="h-screen w-72 bg-gradient-to-b from-black to-blue-950 text-white ">
        <h1 className="text-4xl font-bold text-center mt-5 ">
          Taka<span className="text-blue-500">Flow</span>
        </h1>
        <ul className="menu mt-5">
        {data?.role === 'user' ? userLinks :
           data?.role === 'agent' ? agentLinks :
           adminLinks}
        </ul>
      </div>

      <div className="flex justify-center items-center flex-1 w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
