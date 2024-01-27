import { useState } from "react";
import PopUp from "../../../containers/PopUp";
import NewTaskForm from "../NewTaskForm";
import { useAlert } from "../../../context/AlertContext";

const AddNewTask = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const handleOpenAlert = useAlert();

	return (
		<>
			{/* Add Task button */}
			<button
				className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
				onClick={() => setIsPopupOpen(!isPopupOpen)}
			>
				Add Task
			</button>

			{/* TaskFromOpu */}
			<PopUp
				isOpen={isPopupOpen}
				onClosePopup={() => {
					setIsPopupOpen(!isPopupOpen);
				}}
				open_style={"translate-x-[0%]"}
				close_style={"translate-x-[100%]"}
				children_component_style={
					" max-w-[740px] w-full h-auto  relative mx-auto my-auto"
				}
			>
				<NewTaskForm
					closeForm={() => {
						setIsPopupOpen(false);
						handleOpenAlert({
							message: "Task added successfully",
							type: "success",
						});
					}}
				/>
			</PopUp>
		</>
	);
};

export default AddNewTask;

