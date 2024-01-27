import { priority_list } from "../../../utils/PriorityList";

const TaskForm = ({
	task_state,
	setTaskState,
	onFormSubmit,
	isTaskEditing,
}) => {
	const updateHandler = ({ key_name, value }) => {
		setTaskState({ ...task_state, [key_name]: value });
	};
	return (
		<form
			className="mx-auto   w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4   lg:p-11"
			onSubmit={onFormSubmit}
		>
			<h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
				{isTaskEditing ? "Edit Task" : "Add New Task"}
			</h2>

			<div className="space-y-9 text-white lg:space-y-10">
				<div className="space-y-2 lg:space-y-3">
					<label htmlFor="title">Title</label>
					<input
						className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
						type="text"
						name="title"
						id="title"
						value={task_state?.title}
						onChange={(e) =>
							updateHandler({
								key_name: "title",
								value: e.target.value,
							})
						}
					/>
				</div>

				<div className="space-y-2 lg:space-y-3">
					<label htmlFor="description">
						Description
					</label>
					<textarea
						className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
						type="text"
						name="description"
						id="description"
						value={task_state?.description}
						onChange={(e) =>
							updateHandler({
								key_name: "description",
								value: e.target.value,
							})
						}
					></textarea>
				</div>

				<div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
					<div className="space-y-2 lg:space-y-3">
						<label htmlFor="tags">Tags</label>
						<input
							className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
							type="text"
							name="tags"
							id="tags"
							value={task_state?.tags}
							onChange={(e) =>
								updateHandler({
									key_name: "tags",
									value: e.target
										.value,
								})
							}
						/>
					</div>

					<div className="space-y-2 lg:space-y-3">
						<label htmlFor="priority">
							Priority
						</label>
						<select
							className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
							name="priority"
							id="priority"
							onChange={(e) =>
								updateHandler({
									key_name: "priority",
									value: e.target
										.value,
								})
							}
						>
							<option
								selected
								value=""
							>
								Select Priority
							</option>
							{priority_list?.map((pr) => {
								return (
									<option
										value={
											pr.value
										}
										key={
											pr.value
										}
										selected={
											pr.value ===
											task_state?.priority
										}
									>
										{pr.label}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			</div>

			<div className="mt-16 flex justify-center lg:mt-20">
				<button
					type="submit"
					className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
				>
					{isTaskEditing
						? "Update task"
						: "Create new Task"}
				</button>
			</div>
		</form>
	);
};

export default TaskForm;

