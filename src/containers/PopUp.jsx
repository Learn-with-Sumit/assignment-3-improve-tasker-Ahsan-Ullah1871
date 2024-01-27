/* eslint-disable react/prop-types */

import { SVGICONS } from "../constants/Icons";

const PopUp = ({
	children,
	isOpen,
	onClosePopup,
	open_style,
	close_style,
	children_component_style,
}) => {
	return (
		<div
			className={`  fixed top-0 left-0 right-0 w-screen h-screen overflow-y-auto bg-white z-[60] bg-opacity-30 !mx-0 flex  py-10  ${
				isOpen ? open_style : close_style
			}  duration-500`}
		>
			<div className={children_component_style}>
				<button
					className=" absolute  text-red-400 right-2 top-0 p-3 hover:text-red-600 duration-300 "
					onClick={(e) => {
						e.stopPropagation();
						onClosePopup();
					}}
				>
					{SVGICONS.close_circle}
				</button>
				{children}
			</div>
		</div>
	);
};

export default PopUp;

