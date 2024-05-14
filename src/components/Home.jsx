import React, { useEffect, useState } from "react";
import Button from "./Button";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className='w-full h-full mt-5 flex justify-start items-center flex-col'>
      <nav className='flex gap-1 '>
        <NavLink to='timer'>
          <Button text='STOPWATCH' />
        </NavLink>
        <NavLink to='stopwatch'>
          <Button text='TIMER' />
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
