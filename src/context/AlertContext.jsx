/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import { taskReducer } from "../reducer/Task/TaskReducer";
import { initial_task_data } from "../../data/TaskData";
import Alert from "../containers/Alert";

const AlertContext = createContext(null);

export function useAlert() {
	return useContext(AlertContext);
}

const AlertProvider = ({ children }) => {
	//Alert related works
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState(" ");
	const [alert_type, setAlertType] = useState("success");
	let timerId;

	const handleOpenAlert = ({ type, message }) => {
		// Clear the previous timer if it exists
		if (timerId) {
			clearTimeout(timerId);
		}

		setIsAlertOpen(true);
		setAlertMessage(message);
		setAlertType(type ?? "success");
		// Close the alert automatically after 3000 milliseconds (adjust as needed)
		// Set a new timer
		timerId = setTimeout(() => {
			setIsAlertOpen(false);
			setAlertMessage("");
		}, 3000);
	};
	const handleCloseAlert = () => {
		if (timerId) {
			clearTimeout(timerId);
		}
		setIsAlertOpen(false);
		setAlertMessage("");
	};

	return (
		<AlertContext.Provider value={handleOpenAlert}>
			<Alert
				alert_open={isAlertOpen}
				message={alert_message}
				onCloseAlert={handleCloseAlert}
				type={alert_type}
			/>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertProvider;

