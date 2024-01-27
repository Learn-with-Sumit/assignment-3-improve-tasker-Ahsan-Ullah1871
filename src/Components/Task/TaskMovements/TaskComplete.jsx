import React from "react";
import { SVGICONS } from "../../../constants/Icons";
import { useTaskDispatch } from "../../../context/TaskContext";

const TaskComplete = ({ task }) => {
	const task_dispatch = useTaskDispatch();
	return (
		<button
			onClick={() => {
				task_dispatch({
					action_type: "edit_single_task_by_id",
					...task,
					is_finished: !task.is_finished,
				});
			}}
		>
			{task?.is_finished
				? SVGICONS.star_fill
				: SVGICONS.start_outline}
		</button>
	);
};

export default TaskComplete;

