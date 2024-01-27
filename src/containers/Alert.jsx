import React, { useState } from "react";
import { SVGICONS } from "../constants/Icons";

const Alert = ({ type, message, alert_open, onCloseAlert }) => {
	let alert_class = "";
	let alert_icon = null;

	// ui class and icons select
	switch (type) {
		case "error":
			alert_class = ` fixed right-0 top-28 mx-auto  z-[70] max-w-sm w-full  rounded-md p-4  bg-red-400  transition-all duration-1000 flex items-center justify-between gap-2  ${
				alert_open ? "translate-x-0" : "translate-x-[100%]"
			}`;
			alert_icon = "/assets/error.gif";

			break;

		default:
			alert_class = ` fixed right-0 top-28 mx-auto  z-10 max-w-sm w-full  rounded-md p-4  bg-sky-600    transition-all duration-1000 flex items-center justify-between gap-2  ${
				alert_open ? "translate-x-0" : "translate-x-[100%]"
			}`;
			alert_icon = "/assets/success.gif";
			break;
	}

	return (
		<div className={alert_class}>
			<div className="  text-white flex items-center justify-start gap-2 flex-grow">
				<img
					src={alert_icon}
					alt=""
					className="w-auto h-auto"
				/>

				<p>{message}</p>
			</div>

			<button
				className=" text-white hover:shadow-md duration-300"
				onClick={onCloseAlert}
			>
				{SVGICONS.close}
			</button>
		</div>
	);
};

export default Alert;

