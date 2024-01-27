// search task by title
export const searchTaskHandler = (task, search_text) => {
	if (search_text !== "" || search_text.length > 0) {
		return task.title
			.replace(/\s+/g, "")
			.toUpperCase()
			.includes(search_text.replace(/\s+/g, "").toUpperCase());
	} else {
		return task;
	}
};

