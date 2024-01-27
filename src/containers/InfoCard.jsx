import React from "react";

const InfoCard = ({ image_url, heading, desc }) => {
	return (
		<div className=" bg-[#FFF7E1]  flex flex-col items-center justify-center gap-12 max-w-md mx-auto rounded-md  p-8">
			<img
				src={image_url}
				className="w-auto h-auto"
			/>
			<div className="flex flex-col gap-4">
				<p className=" text-center text-2xl text-[#224272] font-semibold ">
					{heading}
				</p>
				<p className="text-sm text-center text-[#4E688E] font-semibold ">
					{desc}
				</p>
			</div>
		</div>
	);
};

export default InfoCard;

