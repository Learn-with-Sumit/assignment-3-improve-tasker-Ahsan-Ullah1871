import { useState } from "react";
import { useTaskDispatch, useTaskList } from "../../context/TaskContext";
import { get_next_id } from "../../utils/NextId";
import TaskForm from "./TaskForm/TaskForm";
import { useAlert } from "../../context/AlertContext";

const TaskEditForm = ({ closeForm, selected_task }) => {
	const task_dispatch = useTaskDispatch();
	const handleOpenAlert = useAlert();

	// task state
	const [task_form, setTaskForm] = useState({
		title: selected_task?.title,
		is_finished: selected_task.is_finished,
		description: selected_task.description,
		tags: selected_task?.tags,
		priority: selected_task?.priority,
	});

	//onFormSubmit
	const onFormSubmit = () => {
		task_dispatch({
			action_type: "edit_single_task_by_id",
			id: selected_task?.id,
			...task_form,
		});

		//
		closeForm();
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
				isTaskEditing={true}
			/>
		</>
	);
};

export default TaskEditForm;

