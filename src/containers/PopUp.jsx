/* eslint-disable react/prop-types */

const PopUp = ({ children, isOpen, setOpen, open_style, close_style }) => {
	return (
		<div
			className={`  fixed top-0 left-0 right-0 w-screen h-screen overflow-y-auto bg-white z-[60] bg-opacity-30 !mx-0 ${
				isOpen ? open_style : close_style
			}  duration-500`}
		>
			<button
				className=" absolute  right-10 top-0 p-3 hover:text-red-400 duration-300 "
				onClick={(e) => {
					e.stopPropagation();
					setOpen(!isOpen);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-16 h-16"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
			</button>
			{children}
		</div>
	);
};

export default PopUp;

