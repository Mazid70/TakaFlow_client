import { AiOutlineTransaction } from "react-icons/ai";
import { BsCashCoin, BsFillSendFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { NavLink } from "react-router-dom";

// for user 
export const userLinks=(
  <>
  <li>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => {
          return {
            fontWeight:'bold',
            color: '#fff',
            background: isActive ? '#1A1F37' : '',
            fontSize: '1.2rem',
          };
        }}
      >
       <FaHome  className="text-blue-600 "/> Overview
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/send"
        style={({ isActive }) => {
          return {
            fontWeight:'bold',
            color: '#fff',
            background: isActive ? '#1A1F37' : '',
            fontSize: '1.2rem',
          };
        }}
      >
       <BsFillSendFill className="text-blue-600 "/> Send Money
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/cashout"
        style={({ isActive }) => {
          return {
            fontWeight:'bold',
            color: '#fff',
            background: isActive ? '#1A1F37' : '',
            fontSize: '1.2rem',
          };
        }}
      >
       <SiCashapp className="text-blue-600"/> Cash Out
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/cashin"
        style={({ isActive }) => {
          return {
            fontWeight:'bold',
            color: '#fff',
            background: isActive ? '#1A1F37' : '',
            fontSize: '1.2rem',
          };
        }}
      >
       <BsCashCoin className="text-blue-600"/> Cash In
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/cashout"
        style={({ isActive }) => {
          return {
            fontWeight:'bold',
            color: '#fff',
            background: isActive ? '#1A1F37' : '',
            fontSize: '1.2rem',
          };
        }}
      >
       <AiOutlineTransaction className="text-blue-600"/> Transaction History
      </NavLink>
    </li>
  </>
)