import React from 'react';

const Cashout = () => {
  return (
    <section className="bg-gradient-to-br from-black to-blue-950 text-white p-8 w-[350px] rounded">
      <form className="space-y-4">
        <h1 className="font-extrabold text-3xl italic text-center">
          Cash Out
        </h1>
        
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
          
        </div>

        <input
          value="Cash Out"
          type="submit"
          className="pl-5 w-full h-10 rounded bg-orange-500"
        />
      </form>
    </section>
  );
};

export default Cashout;