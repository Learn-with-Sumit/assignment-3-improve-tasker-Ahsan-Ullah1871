import ConfirmationCard from "../../../containers/ConfirmationCard";
import PopUp from "../../../containers/PopUp";
import { useAlert } from "../../../context/AlertContext";
import { useTaskDispatch, useTaskList } from "../../../context/TaskContext";
import { useState } from "react";

const DeleteSingleTask = ({ task_title, task_id }) => {
	const task_dispatch = useTaskDispatch();
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const handleOpenAlert = useAlert();
	const tasks = useTaskList();
	return (
		<>
			{/* Delete   Task button */}

			<button
				className="text-red-500"
				onClick={() => {
					if (tasks.length > 0) {
						setIsPopupOpen(true);
					}
				}}
			>
				Delete
			</button>

			{/* Confirmation popup */}
			<PopUp
				isOpen={isPopupOpen}
				onClosePopup={() => {
					setIsPopupOpen(!isPopupOpen);
				}}
				open_style={"translate-y-[0%]"}
				close_style={"-translate-y-[100%]"}
				children_component_style={
					" max-w-md w-full h-auto  relative mx-auto my-auto"
				}
			>
				<ConfirmationCard
					heading={"Delete selected task"}
					desc={`Are you sure you want to delete this "${task_title}" task? This action is irreversible and will remove  this current task. Please confirm if you wish to proceed. Once deleted, the tasks cannot be recovered.`}
					image_url={"/assets/delete.png"}
					button_title={`Confirm  `}
					onPrimaryButtonCLick={() => {
						task_dispatch({
							action_type:
								"delete_single_task_by_id",
							id: task_id,
						});
						setIsPopupOpen(false);
						handleOpenAlert({
							message: "  Task deleted successfully",
							type: "success",
						});
					}}
				/>
			</PopUp>
		</>
	);
};

export default DeleteSingleTask;

