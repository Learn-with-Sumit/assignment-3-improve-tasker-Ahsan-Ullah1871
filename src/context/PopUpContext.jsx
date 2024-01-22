/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const PopUpOpenContext = createContext(false);
const PopUpSetContext = createContext(null);

export function usePopup() {
	return useContext(PopUpOpenContext);
}
export function usePopupHandle() {
	return useContext(PopUpSetContext);
}

const PopUpProvider = ({ children }) => {
	const [isPopupOpen, setIsOpenPopup] = useState(false);

	return (
		<PopUpOpenContext.Provider value={isPopupOpen}>
			<PopUpSetContext.Provider value={setIsOpenPopup}>
				{children}
			</PopUpSetContext.Provider>
		</PopUpOpenContext.Provider>
	);
};

export default PopUpProvider;

