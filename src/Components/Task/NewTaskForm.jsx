import { useState } from "react";
import TaskForm from "./TaskForm/TaskForm";
import { useTaskDispatch, useTaskList } from "../../context/TaskContext";
import { get_next_id } from "../../utils/NextId";
import { useAlert } from "../../context/AlertContext";

const NewTaskForm = ({ closeForm }) => {
	const task_dispatch = useTaskDispatch();
	const task_list = useTaskList();
	const handleOpenAlert = useAlert();

	// task state
	const [task_form, setTaskForm] = useState({
		title: " ",
		is_finished: false,
		description: "",
		tags: "",
		priority: "",
	});

	//
	const onFormSubmit = () => {
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

	// startFormChecking
	const startFormChecking = (e) => {
		e.preventDefault();
		let check_items = 0;

		for (let key in task_form) {
			if (
				task_form[key]?.toString()?.replace(/\s/g, "")
					.length <= 0
			) {
				handleOpenAlert({
					type: "error",
					message: `Please enter the value of ${key} field`,
				});

				break;
			} else {
				check_items++;
			}
		}

		if (check_items === Object.keys(task_form).length) {
			onFormSubmit();
		}
	};

	return (
		<>
			<TaskForm
				task_state={task_form}
				setTaskState={setTaskForm}
				onFormSubmit={startFormChecking}
			/>
		</>
	);
};

export default NewTaskForm;

