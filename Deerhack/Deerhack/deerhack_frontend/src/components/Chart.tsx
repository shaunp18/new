import React from "react";
import "chartjs-adapter-moment";
import {
	Chart as ChartJS,
	TimeScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	TimeScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	scales: {
		x: {
			type: "time",
			time: {
				displayFormats: {
					quarter: "MMM YYYY",
				},
			},
		},
	},
};

export function LineChart(props: {
	magnitudeData: {
		datasets: {
			label: string;
			data: {
				x: string;
				y: number;
			}[];
			borderColor: string;
			backgroundColor: string;
		}[];
	};
	depthData: {
		datasets: {
			label: string;
			data: {
				x: string;
				y: number;
			}[];
			borderColor: string;
			backgroundColor: string;
		}[];
	};
}) {
	return (
		<div>
			<h2 className='text-1xl font-semibold py-4'>Percent Chance vs Time</h2>
			<Line options={options} data={props.magnitudeData} />

			<h2 className='text-1xl font-semibold py-4 mt-8'>Depth vs Time</h2>
			<Line options={options} data={props.depthData} />
		</div>
	);
}
