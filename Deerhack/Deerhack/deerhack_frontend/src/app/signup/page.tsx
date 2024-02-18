"use client"
import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDx_yEgMRE5CWtqJF41jGryhVSEIXTi4Og",
    authDomain: "quakeguard-9eed0.firebaseapp.com",
    projectId: "quakeguard-9eed0",
    storageBucket: "quakeguard-9eed0.appspot.com",
    messagingSenderId: "1092836555088",
    appId: "1:1092836555088:web:6a972162aec37bf6295455",
    measurementId: "G-X523P2VHED"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const SignupPage = () => {
    const [organizationName, setOrganizationName] = useState('');
    const [organizationRegion, setOrganizationRegion] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = async () => {
      try {
        // Step 1: Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Step 2: Add user data to the database
        await addDoc(collection(db, 'users'), {
          organizationName,
          organizationRegion,
          email,
          password,
        });
  
        // Handle successful signup, you can redirect or perform additional actions here
      } catch (error) {
        // Handle signup error
        if (error === 'auth/email-already-in-use') {
          console.error('Email is already in use. Please use a different email.');
          // You may want to display an error message to the user
        } else {
          console.error('Signup Error:', error);
        }
      }
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/quake3.jpeg')]">
      <div className='bg-gray-300 rounded-xl p-8 w-96 text-center shadow-2xl backdrop-blur-md bg-white/30'>
        <h1 className='text-4xl font-bold mb-8 text-[#030712]'>
          Create an Account
        </h1>
        <div className='flex flex-col'>
          <div className='mb-4'>
            <label htmlFor='organizationName' className='text-[#030712] text-lg font-semibold mb-2'>
              Organization Name
            </label>
            <input
              type='text'
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='organizationRegion' className='text-[#030712] text-lg font-semibold mb-2'>
              Organization Region
            </label>
            <input
              type='text'
              value={organizationRegion}
              onChange={(e) => setOrganizationRegion(e.target.value)}
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='text-[#030712] text-lg font-semibold mb-2'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='text-[#030712] text-lg font-semibold mb-2'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <div className='flex justify-center'>
            <button
              type='button'
              onClick={handleSignup}
              className='rounded-lg bg-[#030712] text-white py-2 px-4 hover:bg-opacity-80 transition-all'
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;