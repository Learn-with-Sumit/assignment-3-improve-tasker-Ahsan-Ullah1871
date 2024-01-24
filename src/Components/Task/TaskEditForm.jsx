import { useState } from "react";
import { useTaskDispatch, useTaskList } from "../../context/TaskContext";
import { get_next_id } from "../../utils/NextId";
import TaskForm from "./TaskForm/TaskForm";

const TaskEditForm = ({ closeForm, selected_task }) => {
	const task_dispatch = useTaskDispatch();

	// task state
	const [task_form, setTaskForm] = useState({
		title: selected_task?.title,
		is_finished: selected_task.is_finished,
		description: selected_task.description,
		tags: selected_task?.tags,
		priority: selected_task?.priority,
	});

	//
	const onFormSubmit = (e) => {
		e.preventDefault();
		task_dispatch({
			action_type: "edit_single_task_by_id",
			id: selected_task?.id,
			...task_form,
		});

		//
		closeForm();
	};

	return (
		<>
			<TaskForm
				task_state={task_form}
				setTaskState={setTaskForm}
				onFormSubmit={onFormSubmit}
				isTaskEditing={true}
			/>
		</>
	);
};

export default TaskEditForm;

