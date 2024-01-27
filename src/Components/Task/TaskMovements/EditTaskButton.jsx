import React, { useState } from "react";
import { useTaskDispatch } from "../../../context/TaskContext";
import PopUp from "../../../containers/PopUp";
import TaskEditForm from "../TaskEditForm";
import Alert from "../../../containers/Alert";
import { useAlert } from "../../../context/AlertContext";

const EditTaskButton = ({ task }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const handleOpenAlert = useAlert();

	return (
		<>
			{/* Add Task button */}
			<button
				className="text-blue-500"
				onClick={() => setIsPopupOpen(!isPopupOpen)}
			>
				Edit
			</button>

			{/* Edit task form open */}
			<PopUp
				isOpen={isPopupOpen}
				onClosePopup={() => {
					setIsPopupOpen(!isPopupOpen);
				}}
				open_style={"translate-x-[0%]"}
				close_style={"-translate-x-[100%]"}
				children_component_style={
					" max-w-[740px] w-full h-auto  relative mx-auto my-auto"
				}
			>
				<TaskEditForm
					closeForm={() => {
						setIsPopupOpen(false);
						handleOpenAlert({
							message: "Task updated successfully",
							type: "success",
						});
					}}
					selected_task={task}
				/>
			</PopUp>
		</>
	);
};

export default EditTaskButton;

