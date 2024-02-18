"use client";
import React, { useEffect, useState } from "react";

// Components
export default function GraphPage() {
	const [year, setYear] = useState(2024);
	const [mag, setMag] = useState(0);
	const [img, setImg] = useState("");

	const callback = () => {
		// Validate input
		let errors = [];
		if (year < 1975 || year > 2024) {
			errors.push("Year must be between 1975 and 2024");
			setYear(2024);
		}
		if (mag < 0 || mag > 10) {
			errors.push("Magnitude must be between 0 and 10");
			setMag(0);
		}
		if (errors.length > 0) {
			alert("The following errors were found: \n" + errors.join("\n"));
			console.log(errors);
			return;
		}

		fetch("http://localhost:8000/api/generate_map", {
			method: "POST",
			body: JSON.stringify({
				mag: mag,
				year: year,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
		})
			.then((res) => res.json())
			.then((res) => {
				setImg(res.fig);
			});
	};

	useEffect(callback, [])

	return (
		<div className="flex flex-row bg-[url('/mountains.jpg')]">
			<div className='basis-1/6'></div>
			<div className='basis-2/3 flex flex-col shadow-2xl backdrop-blur-md rounded-lg bg-white/30 m-20 p-6'>
				<h1 className='text-4xl font-bold py-5 text-center'>
					Previous Earthquake Locations
				</h1>
				<div className='flex flex-row justify-center'>
					<div className='w-1/2'>
						<div className='flex flex-row justify-between'>
							<div className='flex flex-col'>
								<label htmlFor='year'>
									Earthquakes onwards from:
								</label>
								<input
									type='number'
									id='year'
									name='year'
									className='border-black border-2 rounded pl-1'
									value={year}
									min='1975'
									max='2024'
									onChange={(e) =>
										setYear(Number.parseInt(e.target.value))
									}
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='mag'>
									Magnitude greater than:
								</label>
								<input
									type='number'
									id='mag'
									name='mag'
									min='0'
									max='10'
									className='border-black border-2 rounded pl-1'
									value={mag}
									onChange={(e) =>
										setMag(Number.parseInt(e.target.value))
									}
								/>
							</div>
						</div>
						<div className='flex flex-row justify-center'>
							<button
								onClick={callback}
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'
							>
								Search
							</button>
						</div>
					</div>
				</div>
				<div className='flex-1 h-[600px] mx-auto'>
					<img
						src={"data:image/png;base64," + img}
						className='flex-1 w-auto h-[600px] object-center'
						alt='Map'
					/>
				</div>
			</div>
			<div className='basis-1/6'></div>
		</div>
	);
}
