"use client";
import React, { useState } from "react";
import { LineChart } from "@/components/Chart";

// States
enum LoadingState {
	UNLOADED,
	LOADING,
	LOADED,
}
const PickTwoScreen: React.FC = () => {

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-[url('/mountains.jpg')]">
			<div className='flex-1 flex'>
				<a href='/tool/graph' className='flex-1 flex'>
					<div className='bg-gray-300 rounded-lg p-6 m-20 flex-1 flex flex-col items-center justify-center shadow-2xl backdrop-blur-md bg-white/30'>
						<h1 className='text-3xl font-bold text-center'>
							Go to Map
						</h1>
						<img src='/compass2.png' width='300' height='400' />
					</div>
				</a>
				<a href='/tool/predict' className='flex-1 flex'>
					<div className='bg-gray-300 rounded-lg p-6 m-20 flex-1 flex flex-col items-center justify-center shadow-2xl backdrop-blur-md bg-white/30'>
						<h1 className='text-3xl font-bold text-center pb-2'>
							Check Earthquake Data
						</h1>
						<img src='/magnifying.png' width='250' height='250' />
					</div>
				</a>
			</div>
		</div>
	);
};

export default PickTwoScreen;
