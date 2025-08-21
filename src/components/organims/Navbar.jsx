import { Link } from "react-router-dom";
import Button from "../atoms/Button";

export default function Navbar() {
	return (
		<nav className="container justify-between mx-auto navbar bg-base-100 items-center">
			<div className="">
				<Link
					className="btn btn-ghost lg:hover:bg-transparent normal-case text-xl items-center"
					to="/"
				>
					<img
						src="/logo.png"
						alt="Logo"
						className="h-12 lg:h-20 w-auto mr-2"
					/>
				</Link>
			</div>
			<div className="">
				<div className="dropdown static lg:hidden flex items-center">
					<label tabIndex={0} className="btn btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</label>
					<Button className="btn-primary" to="#s-inscrire">
						S’inscrire
					</Button>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-full left-0 top-16 z-50"
					>
						<li>
							<Link to="#accueil">Accueil</Link>
						</li>
						<li>
							<Link to="#concept">Concept</Link>
						</li>
						<li>
							<Link to="#agenda">Agenda</Link>
						</li>
						<li>
							<Link to="#join">Devenir bénévole</Link>
						</li>
						<li>
							<Button
								className="btn-outline my-4"
								to="#se-connecter"
							>
								Se connecter
							</Button>
						</li>
					</ul>
				</div>
				<ul className="menu menu-horizontal hidden lg:flex items-center space-x-4">
					<li>
						<Link to="#accueil">Accueil</Link>
					</li>
					<li>
						<Link to="#concept">Concept</Link>
					</li>
					<li>
						<Link to="#agenda">Agenda</Link>
					</li>
					<li>
						<Link to="#join">Devenir bénévole</Link>
					</li>
					<li>
						<Button className="btn-outline" to="#se-connecter">
							Se connecter
						</Button>
					</li>
					<li>
						<Button className="btn-primary" to="#s-inscrire">
							S’inscrire
						</Button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
