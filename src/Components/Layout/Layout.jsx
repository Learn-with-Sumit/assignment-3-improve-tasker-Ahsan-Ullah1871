import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="bg-[#191D26] font-[Inter] text-white">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
