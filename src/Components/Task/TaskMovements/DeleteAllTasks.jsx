import { useState } from "react";
import { useTaskDispatch, useTaskList } from "../../../context/TaskContext";
import PopUp from "../../../containers/PopUp";
import ConfirmationCard from "../../../containers/ConfirmationCard";
import { useAlert } from "../../../context/AlertContext";

const DeleteAllTasks = () => {
	const task_dispatch = useTaskDispatch();
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const handleOpenAlert = useAlert();
	const tasks = useTaskList();

	return (
		<>
			{/* Delete All Task button */}
			<button
				className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
				onClick={() => {
					if (tasks.length > 0) {
						setIsPopupOpen(true);
					} else {
						handleOpenAlert({
							message: "There are no tasks to delete at the moment",
							type: "error",
						});
					}
				}}
			>
				Delete All
			</button>

			{/* TaskFromOpu */}
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
					heading={"Delete All tasks"}
					desc={
						"Are you sure you want to delete all tasks? This action is irreversible and will remove all your current tasks. Please confirm if you wish to proceed. Once deleted, the tasks cannot be recovered."
					}
					image_url={"/assets/delete_all.png"}
					button_title={"Confirm"}
					onPrimaryButtonCLick={() => {
						task_dispatch({
							action_type:
								"delete_all_tasks",
						});
						setIsPopupOpen(false);
						handleOpenAlert({
							message: "All Tasks deleted successfully",
							type: "success",
						});
					}}
				/>
			</PopUp>
		</>
	);
};

export default DeleteAllTasks;

