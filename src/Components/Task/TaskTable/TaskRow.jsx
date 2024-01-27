import { useTaskDispatch } from "../../../context/TaskContext";
import { priorities_labels, priority_list } from "../../../utils/PriorityList";
import { random_colors, selectColorForTag } from "../../../utils/RandomColors";
import DeleteSingleTask from "../TaskMovements/DeleteSingleTask";
import EditTaskButton from "../TaskMovements/EditTaskButton";
import TaskComplete from "../TaskMovements/TaskComplete";

/* eslint-disable react/prop-types */
const TaskRow = ({ task }) => {
	return (
		<tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
			<td>
				<TaskComplete task={task} />
			</td>
			<td>{task?.title}</td>
			<td>
				<div>{task?.description}</div>
			</td>
			<td>
				<ul className="flex justify-center gap-1.5 flex-wrap">
					{task?.tags?.split(",").map((tag) => {
						return (
							<li key={tag}>
								<span
									className={`inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]`}
									style={selectColorForTag(
										tag
									)}
								>
									{tag}
								</span>
							</li>
						);
					})}
				</ul>
			</td>
			<td className="text-center">
				{priorities_labels?.[task?.priority]}
			</td>
			<td>
				<div className="flex items-center justify-center space-x-3">
					<DeleteSingleTask
						task_title={task?.title}
						task_id={task.id}
					/>
					<EditTaskButton task={task} />
				</div>
			</td>
		</tr>
	);
};

export default TaskRow;

