import TaskProvider from "../../context/TaskContext";
import TaskList from "../Task/TaskList";
import AddNewTask from "../Task/TaskMovements/AddNewTask";
import DeleteAllTasks from "../Task/TaskMovements/DeleteAllTasks";
import TasksSearch from "../Task/TaskMovements/TasksSearch";

const TaskShowcase = () => {
	return (
		<TaskProvider>
			<section
				className="mb-20"
				id="tasks"
			>
				<div className="container">
					<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
						{/* Tasks showcase header */}
						<div className="mb-14 items-center justify-between sm:flex">
							<h2 className="text-2xl font-semibold max-sm:mb-4">
								Your Tasks
							</h2>
							<div className="flex items-center space-x-5">
								<TasksSearch />
								<AddNewTask />
								<DeleteAllTasks />
							</div>
						</div>

						{/* TaskList */}
						<TaskList />
					</div>
				</div>
			</section>
		</TaskProvider>
	);
};

export default TaskShowcase;

