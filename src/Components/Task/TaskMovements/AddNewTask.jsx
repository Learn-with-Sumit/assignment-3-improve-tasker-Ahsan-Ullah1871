import { useState } from "react";
import PopUp from "../../../containers/PopUp";
import NewTaskForm from "../NewTaskForm";

const AddNewTask = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	return (
		<>
			{/* Add Task button */}
			<button
				className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
				onClick={() => setIsPopupOpen(!isPopupOpen)}
			>
				Add Task
			</button>

			{/* TaskFromOpu */}
			<PopUp
				isOpen={isPopupOpen}
				setOpen={setIsPopupOpen}
				open_style={"translate-x-[0%]"}
				close_style={"translate-x-[100%]"}
			>
				<NewTaskForm />
			</PopUp>
		</>
	);
};

export default AddNewTask;

