/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";
import PopUpProvider from "../../context/PopUpContext";

const Layout = ({ children }) => {
	return (
		<PopUpProvider>
			<div className="bg-[#191D26] font-[Inter] text-white">
				<Header />
				{children}
				<Footer />
			</div>
		</PopUpProvider>
	);
};

export default Layout;

