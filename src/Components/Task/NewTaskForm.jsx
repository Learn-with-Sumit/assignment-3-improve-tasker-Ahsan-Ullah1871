import { useState } from "react";
import TaskForm from "./TaskForm/TaskForm";
import { useTaskDispatch, useTaskList } from "../../context/TaskContext";
import { get_next_id } from "../../utils/NextId";

const NewTaskForm = ({ closeForm }) => {
	const task_dispatch = useTaskDispatch();
	const task_list = useTaskList();

	// task state
	const [task_form, setTaskForm] = useState({
		title: " ",
		is_finished: false,
		description: "",
		tags: "",
		priority: "",
	});

	//
	const onFormSubmit = (e) => {
		e.preventDefault();
		task_dispatch({
			action_type: "add_new_task",
			id: get_next_id({ prev_data_list: task_list }),
			...task_form,
		});

		//
		closeForm();
		clearState();
	};

	// clear state
	const clearState = () => {
		setTaskForm({
			title: " ",
			is_finished: false,
			description: "",
			tags: "",
			priority: "",
		});
	};

	return (
		<>
			<TaskForm
				task_state={task_form}
				setTaskState={setTaskForm}
				onFormSubmit={onFormSubmit}
			/>
		</>
	);
};

export default NewTaskForm;

