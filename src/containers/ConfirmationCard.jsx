import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const ConfirmationCard = ({
	image_url,
	heading,
	desc,
	onPrimaryButtonCLick,
	button_title,
}) => {
	return (
		<div className=" bg-[#FFF7E1]  flex flex-col items-center justify-center gap-12 max-w-md mx-auto my-auto rounded-md  p-8">
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

			<div>
				<PrimaryButton
					onButtonClick={onPrimaryButtonCLick}
					title={button_title}
				/>
			</div>
		</div>
	);
};

export default ConfirmationCard;

