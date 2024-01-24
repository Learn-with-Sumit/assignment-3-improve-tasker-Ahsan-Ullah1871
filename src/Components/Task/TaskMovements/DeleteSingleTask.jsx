import { useTaskDispatch } from "../../../context/TaskContext";

const DeleteSingleTask = ({ task_id }) => {
	const task_dispatch = useTaskDispatch();
	return (
		<button
			className="text-red-500"
			onClick={() =>
				task_dispatch({
					action_type: "delete_single_task_by_id",
					id: task_id,
				})
			}
		>
			Delete
		</button>
	);
};

export default DeleteSingleTask;

