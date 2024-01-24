export const taskReducer = (tasks_list, action) => {
	const { action_type, ...payload } = action || {};
	switch (action_type) {
		case "add_new_task":
			return [...tasks_list, payload];
		case "delete_single_task_by_id":
			return tasks_list.filter((task) => task.id !== payload.id);
		case "edit_single_task_by_id":
			return tasks_list.map((task) => {
				if (task.id !== payload.id) return task;
				else {
					return payload;
				}
			});
		case "delete_all_tasks":
			return [];

		default:
			return tasks_list;
	}
};

