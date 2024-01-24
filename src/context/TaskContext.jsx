/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import { taskReducer } from "../reducer/Task/TaskReducer";
import { initial_task_data } from "../../data/TaskData";

const TaskListContext = createContext(null);
const TaskDispatchContext = createContext(null);
const TaskSearchContext = createContext(null);

export function useTaskList() {
	return useContext(TaskListContext);
}
export function useTaskDispatch() {
	return useContext(TaskDispatchContext);
}

export function useTaskSearch() {
	return useContext(TaskSearchContext);
}

const TaskProvider = ({ children }) => {
	const [tasks_list, dispatch] = useReducer(
		taskReducer,
		initial_task_data
	);
	const [search_text, setSearchText] = useState("");

	// search task by title
	const searchBokHandler = (task) => {
		if (search_text !== "" || search_text.length > 0) {
			return task.title
				.replace(/\s+/g, "")
				.toUpperCase()
				.includes(
					search_text.replace(/\s+/g, "").toUpperCase()
				);
		} else {
			return task;
		}
	};

	return (
		<TaskListContext.Provider
			value={tasks_list.filter(searchBokHandler)}
		>
			<TaskSearchContext.Provider
				value={{ search_text, setSearchText }}
			>
				<TaskDispatchContext.Provider value={dispatch}>
					{children}
				</TaskDispatchContext.Provider>
			</TaskSearchContext.Provider>
		</TaskListContext.Provider>
	);
};

export default TaskProvider;

