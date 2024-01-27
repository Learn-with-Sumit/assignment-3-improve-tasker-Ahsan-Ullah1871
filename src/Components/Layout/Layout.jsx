/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";
import AlertProvider from "../../context/AlertContext";

const Layout = ({ children }) => {
	return (
		<AlertProvider>
			<div className="bg-[#191D26] font-[Inter] text-white min-h-screen">
				<Header />
				{children}
				<Footer />
			</div>
		</AlertProvider>
	);
};

export default Layout;

