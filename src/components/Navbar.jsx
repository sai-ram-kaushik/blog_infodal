import React from "react";
import logo from "../assets/images/logo.svg";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import notes from "../assets/images/notes.svg";
import saved from "../assets/images/saved.svg";
const Navbar = () => {
  return (
    <div className="fixed w-[1440px] h-[94px] left-0 top-0 shadow-xl">
      <div className="md:flex items-center justify-between bg-white py-[24px]">
        <div className="cursor-pointer mx-[115px] flex flex-row gap-[44px] items-center">
          <img src={logo} alt="logo" />
          <div className="flex flex-row gap-[14.67px] px-[19px] border border-black items-center rounded-[37px] w-[278px] h-[51px]">
            <FiSearch />
            <p className="text-gray-600">|</p>
            <input
              type="text"
              className="text-black font-search w-[150px] outline-none"
              placeholder="Web3 Trends"
            />
          </div>
          <ul className="md:flex md:items-center justify-center mx-[485px]  gap-[30px]">
            <li className="flex flex-row gap-[14px] md:ml-8 md:my-0 my-7">
              <img src={notes} alt="notes_logo" width="29px" height="28.99px"/>
              <p className="font-nav text-[17px]">Write</p>
            </li>
            <li className="flex flex-row mx-[30px] gap-[14px] md:ml-8 md:my-0 my-7 ">
              <img src={saved} alt="notes_logo" width="18px" height="27.82px"/>
              <p className="font-nav text-[17px]">Saved</p>
            </li>
            <div className="mx-[14px] items-center flex flex-row">
                <MdNotificationsNone className="w-[25.43px] h-[28.89px] "/>
                <RxAvatar className="mx-[21.57px] w-[47px] h-[47px]"/>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
