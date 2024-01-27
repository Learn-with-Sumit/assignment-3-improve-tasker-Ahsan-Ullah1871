import InfoCard from "../../containers/InfoCard";
import { useTaskList } from "../../context/TaskContext";
import TaskListTableBody from "./TaskTable/TaskListTableBody";
import TaskListTableHeader from "./TaskTable/TaskListTableHeader";

const TaskList = () => {
	const tasks = useTaskList();

	return (
		<div className="overflow-auto">
			{tasks?.length > 0 ? (
				<table className="table-fixed overflow-auto xl:w-full">
					<TaskListTableHeader />
					<TaskListTableBody />
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

