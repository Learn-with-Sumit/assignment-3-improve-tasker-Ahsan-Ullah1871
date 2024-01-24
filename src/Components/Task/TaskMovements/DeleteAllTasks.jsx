import { useTaskDispatch } from "../../../context/TaskContext";

const DeleteAllTasks = () => {
	const task_dispatch = useTaskDispatch();
	return (
		<button
			className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
			onClick={() =>
				task_dispatch({ action_type: "delete_all_tasks" })
			}
		>
			Delete All
		</button>
	);
};

export default DeleteAllTasks;

