import TaskListTableBody from "./TaskTable/TaskListTableBody";
import TaskListTableHeader from "./TaskTable/TaskListTableHeader";

const TaskList = () => {
	return (
		<div className="overflow-auto">
			<table className="table-fixed overflow-auto xl:w-full">
				<TaskListTableHeader />
				<TaskListTableBody />
			</table>
		</div>
	);
};

export default TaskList;

