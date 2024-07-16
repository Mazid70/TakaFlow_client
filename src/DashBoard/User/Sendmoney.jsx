import React, { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';

const Sendmoney = () => {
  const [error, setError] = useState('');
  const [errorTwo, setErrorTwo] = useState('');
  const [errorThree, setErrorThree] = useState('');
  const handleSendMoney = e => {
    e.preventDefault();
    const form = e.target;
    const recipient = form.recipient.value;
    const amount = form.amount.value;
    const pin = form.pin.value;
    if (amount < 50) {
      setErrorTwo('Add minimun 50 Taka !');
      return;
    }
    if (pin.length != 5) {
      setError('Pin is incorrect !');
      return;
    }
    if (recipient.length < 11) {
      setErrorThree('Invalid Phone Number !');
      return;
    }
    setError('');
    setErrorTwo('');
    setErrorThree('');
    const allData = { recipient, amount, pin };
    console.log(allData);
  };
  return (
    <section className="bg-gradient-to-br from-black to-blue-950 text-white p-8 w-[350px] rounded">
      <form className="space-y-4" onSubmit={handleSendMoney}>
        <h1 className="font-extrabold text-3xl italic text-center">
          Send Money
        </h1>
        <div className="relative">
          <label className="font-semibold">Recipient Mobile Number:</label>
          <br />
          <input
            type="number"
            name="recipient"
            className="pl-12 w-full h-10 rounded bg-[#1A1F37] border"
            placeholder="01234567890"
            required
          />
          <h1 className="absolute top-8 left-3">+88</h1>
          <p className="text-red-500">
            {' '}
            {errorThree ? (
              <div className="flex items-center gap-1 font-semibold">
                <MdErrorOutline /> {errorThree}
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
          <p className="text-red-500">
            {' '}
            {errorTwo ? (
              <div className="flex items-center gap-1 font-semibold">
                <MdErrorOutline /> {errorTwo}
              </div>
            ) : (
              ''
            )}
          </p>
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
            {error ? (
              <div className="flex items-center gap-1 font-semibold">
                <MdErrorOutline /> {error}
              </div>
            ) : (
              ''
            )}
          </p>
        </div>

        <input
          value="Send"
          type="submit"
          className="pl-5 w-full h-10 rounded bg-orange-500"
        />
      </form>
    </section>
  );
};

export default Sendmoney;
