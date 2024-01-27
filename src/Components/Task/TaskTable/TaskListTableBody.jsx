import { useTaskList } from "../../../context/TaskContext";
import TaskRow from "./TaskRow";

const TaskListTableBody = ({ tasks }) => {
	return (
		<tbody>
			{tasks?.map((task) => (
				<TaskRow
					key={task?.id}
					task={task}
				/>
			))}
		</tbody>
	);
};

export default TaskListTableBody;

