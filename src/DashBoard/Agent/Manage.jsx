import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../CustomHooks/AxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Manage = () => {
  const axiosPublic = useAxiosPublic();
  const { newUser } = useContext(AuthContext);

  const { data: data = [], refetch } = useQuery({
    queryKey: ['cashinout', newUser?.phone],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cashinout/${newUser?.phone}`);
      return res.data;
    },
  });

  const handleApprove = async (_id, taka, request, phone) => {
    try {
      const pending = false;
      const update = { pending };
      await axiosPublic.patch(`/cashinout/${_id}`, update);
      await axiosPublic.post('/transactions', {
        user: phone,
        type: request,
        amount: taka,
      
      });
      if (request === 'CashIn') {
        await axiosPublic.patch(`/users/${newUser.phone}`, {
          balance: newUser.balance - parseInt(taka),
        });

        const res = await axiosPublic.get(`/users/${phone}`);
        await axiosPublic.patch(`/users/${phone}`, {
          balance: res.data.balance + parseInt(taka),
        });
      }
      if (request === 'CashOut') {
        await axiosPublic.patch(`/users/${newUser.phone}`, {
          balance: newUser.balance + parseInt(taka),
        });

        const res = await axiosPublic.get(`/users/${phone}`);
        await axiosPublic.patch(`/users/${phone}`, {
          balance: res.data.balance - parseInt(taka),
        });
      }

      // Refetch data after mutation
      refetch();
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  const request = data.filter(d => d.pending);

  return (
    <section className="bg-gradient-to-br from-black to-blue-950 text-white p-10">
      <table>
        <thead>
          <tr className="border">
            <th className="px-5">User Number</th>
            <th className="px-5">Amount</th>
            <th className="px-5">Request Type</th>
            <th className="px-5">Action</th>
          </tr>
        </thead>
        <tbody>
          {request.map(d => (
            <tr key={d._id} className="border text-center">
              <td className="px-5 py-2">{d.userPhone}</td>
              <td className="px-5 py-2">{d.amount}</td>
              <td className="px-5 py-2">{d.request}</td>
              <td className="px-5 py-2">
                <button
                  onClick={() =>
                    handleApprove(d._id, d.amount, d.request, d.userPhone)
                  }
                  className="btn btn-sm text-white btn-success"
                >
                  Approve
                </button>
                <button className="btn btn-sm btn-error text-white">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Manage;
