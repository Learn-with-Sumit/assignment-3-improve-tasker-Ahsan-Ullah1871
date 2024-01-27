import InfoCard from "../../containers/InfoCard";
import { useTaskList, useTaskSearch } from "../../context/TaskContext";
import { searchTaskHandler } from "../../utils/Search";
import TaskListTableBody from "./TaskTable/TaskListTableBody";
import TaskListTableHeader from "./TaskTable/TaskListTableHeader";

const TaskList = () => {
	const tasks = useTaskList();
	const { search_text } = useTaskSearch();

	// task list after search
	let task_list = tasks?.filter((task) =>
		searchTaskHandler(task, search_text)
	);

	return (
		<div className="overflow-auto">
			{task_list?.length > 0 ? (
				<table className="table-fixed overflow-auto xl:w-full">
					<TaskListTableHeader />
					<TaskListTableBody tasks={task_list} />
				</table>
			) : (
				<InfoCard
					heading={"No Tasks Found"}
					image_url={"/assets/searching.png"}
					desc={
						"You currently have no tasks. Add new tasks to get started.Or no tasks match your search criteria. Try a different search term."
					}
				/>
			)}
		</div>
	);
};

export default TaskList;

