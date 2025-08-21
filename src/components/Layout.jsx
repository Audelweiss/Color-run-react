import { Outlet } from "react-router-dom";
import Navbar from "./organims/Navbar";
import Footer from "./organims/Footer";

export default function Layout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
