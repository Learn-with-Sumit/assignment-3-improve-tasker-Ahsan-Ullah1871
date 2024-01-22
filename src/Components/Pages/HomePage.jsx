import HeroBanner from "../Home/HeroBanner";
import TaskShowcase from "../Home/TaskShowcase";
import NewTaskForm from "../Task/NewTaskForm";

const HomePage = () => {
	return (
		<>
			<HeroBanner />
			<TaskShowcase />
			{/* <NewTaskForm /> */}
		</>
	);
};

export default HomePage;

