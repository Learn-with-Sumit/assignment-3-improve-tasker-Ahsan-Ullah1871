import React from "react";

const PrimaryButton = ({ title, onButtonClick }) => {
	return (
		<button
			onClick={onButtonClick}
			className=" px-12 py-2 bg-[#267FF5] bg-opacity-80 hover:bg-opacity-100  text-base text-white hover:shadow-md duration-300  rounded-md"
		>
			{title}
		</button>
	);
};

export default PrimaryButton;

