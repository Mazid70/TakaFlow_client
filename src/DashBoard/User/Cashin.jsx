import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdErrorOutline } from 'react-icons/md';
import useAxiosPublic from '../../CustomHooks/AxiosPublic';
import Swal from 'sweetalert2';

const Cashin = () => {
  const [errorMassge, setError] = useState('');
  const [errorMassge2, setError2] = useState('');
  const axiosPublic = useAxiosPublic();
  const { newUser } = useContext(AuthContext);
  const handleCashIn = e => {
    e.preventDefault();
    const form = e.target;
    const agent = form.agent.value;
    const userPhone = newUser.phone;
    const amount = form.amount.value;
    const pin = form.pin.value;
    const pending = true;
    const request='CashIn'
    const cashIn = { agent, userPhone, amount,request, pending };
    setError('');
    setError2('');
    if (newUser.pin != pin && pin.length != 5) {
      setError('Pin is incorrect !');
      return;
    }
    axiosPublic.get(`/users/${agent}`).then(
      res=>{
        if(res.data.role !='agent'){
          setError2('Incorrect Agent Number !')
          return
        }
        axiosPublic.post('/cashinout', cashIn).then(
          ()=>{
            Swal.fire({
              title: 'Good job!',
              text: 'Request Send to Agent',
              icon: 'success',
              color: '#fff',
              background: '#000000', // Set background to black
            });
          }
        )
      }
    )
    //;
  };
  return (
    <section className="bg-gradient-to-br from-black to-blue-950 text-white p-8 w-[350px] rounded">
      <form className="space-y-4" onSubmit={handleCashIn}>
        <h1 className="font-extrabold text-3xl italic text-center">Cash In</h1>
        <div className="relative">
          <label className="font-semibold">Agent Mobile Number:</label>
          <br />
          <input
            type="number"
            name="agent"
            className="pl-12 w-full h-10 rounded bg-[#1A1F37] border"
            placeholder="01234567890"
            required
          />
          <h1 className="absolute top-8 left-3">+88</h1>
          <p className="text-red-500">
            {' '}
            {errorMassge2 ? (
              <div className="flex items-center gap-1 font-semibold">
                <MdErrorOutline /> {errorMassge2}
              </div>
            ) : (
              ''
            )}
          </p>
        </div>
        <div>
          <label className="font-semibold">Amount:</label>
          <br />
          <input
            type="number"
            name="amount"
            className="pl-5 w-full h-10 rounded bg-[#1A1F37] border"
            placeholder="Enter Amount"
            required
          />
        </div>

        <div>
          <label className="font-semibold">PIN:</label> <br />
          <input
            type="password"
            name="pin"
            className="pl-5 w-full h-10 rounded bg-[#1A1F37] border"
            placeholder="Enter Your Pin"
            required
          />
          <p className="text-red-500">
            {' '}
            {errorMassge ? (
              <div className="flex items-center gap-1 font-semibold">
                <MdErrorOutline /> {errorMassge}
              </div>
            ) : (
              ''
            )}
          </p>
        </div>

        <input
          value="Cash In"
          type="submit"
          className="pl-5 w-full h-10 rounded bg-orange-500"
        />
      </form>
    </section>
  );
};

export default Cashin;
