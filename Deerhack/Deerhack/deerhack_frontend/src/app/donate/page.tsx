"use client";
import React, { useState } from "react";

export default function DonatePage() {
  const goBack = () => {
    window.location.href = "/";
  };

  const [donated, setDonated] = useState(false);
  const [showLoginScreen, setShowLoginScreen] = useState(false);

  const donateFunction = () => {
    setDonated(true);
  };

  const showLogin = () => {
 
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col bg-[url('/quake3.jpeg')] flex-1">
      <div className='flex-1 bg-gray-300 rounded-xl pt-4 pb-18 px-10 my-20 w-1/4 mx-auto text-center shadow-2xl backdrop-blur-md bg-white/30'>
        {donated ? (
          <div className="pb-8 block">
            <h1 className='text-center text-4xl font-bold py-5'>
              Thank you for your donation!
            </h1>
            <p className='text-center text-xl'>
              Your $10 donation will go towards helping the victims of the earthquake.
            </p>
            <button
              className='rounded-lg bg-[#030712] text-white py-2 px-4 mt-4'
              onClick={goBack}
            >
              Home
            </button>
          </div>
        ) : (
          <div className={"pb-8 " + (showLoginScreen ? "hidden" : "block")}>
            <h1 className='text-center text-4xl font-bold py-5'>
              Donate
            </h1>
            <div className='flex flex-col'>
              <div className='flex flex-col py-4'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='rounded border-2 border-black p-2'
                />
              </div>
              <div className='flex flex-col py-4'>
                <label htmlFor='email' className='py-2'>
                  Email
                </label>
                <input
                  type='email'
                  className='rounded border-2 border-black p-2'
                />
              </div>
              <div className='flex flex-col py-4'>
                <label htmlFor='password' className='p-2'>
                  Agency
                </label>
                <input
                  type='password'
                  className='rounded border-2 border-black p-2'
                />
              </div>
              <div className='flex flex-col py-4'>
                <label htmlFor='amount' className='py-2'>
                  Donation Amount
                </label>
                <span className='h-11'>
                  <span className='h-full p-2.5 border-gray-700 rounded-l-lg border-2'>
                    $
                  </span>
                  <input
                    type='number'
                    className='rounded-r-lg p-2 border-2 border-black h-full'
                  />
                </span>
              </div>
              <div className='flex flex-col py-2'>
                <a href="/login">
                  Are you a Relief Agency?
                </a>
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <button
                type='submit'
                className='rounded-lg bg-[#030712] text-white py-2 px-4'
                onClick={donateFunction}
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
