import React, { useState } from "react";
import { useTaskDispatch } from "../../../context/TaskContext";
import PopUp from "../../../containers/PopUp";
import TaskEditForm from "../TaskEditForm";

const EditTaskButton = ({ task }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	return (
		<>
			{/* Add Task button */}
			<button
				className="text-blue-500"
				onClick={() => setIsPopupOpen(!isPopupOpen)}
			>
				Edit
			</button>

			{/* TaskFromOpu */}
			<PopUp
				isOpen={isPopupOpen}
				onClosePopup={() => {
					setIsPopupOpen(!isPopupOpen);
				}}
				open_style={"translate-x-[0%]"}
				close_style={"translate-x-[100%]"}
			>
				<TaskEditForm
					closeForm={() => setIsPopupOpen(false)}
					selected_task={task}
				/>
			</PopUp>
		</>
	);
};

export default EditTaskButton;

