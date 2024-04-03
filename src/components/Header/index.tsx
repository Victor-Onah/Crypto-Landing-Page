import { Link } from "react-router-dom";
import "./index.scss";
import { RiBitCoinLine } from "react-icons/ri";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { PiHamburger } from "react-icons/pi";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div id="header" role="banner">
			<div>
				<Link to={"/"} id="logo">
					<RiBitCoinLine /> Cryptic
				</Link>
				<nav role="navigation" id="desktop-nav">
					<div>
						<Link to={"#"}>Buy/Sell</Link>
						<Link to={"#"}>Grow</Link>
						<Link to={"#"}>Market</Link>
						<Link to={"#"}>Support</Link>
					</div>
					<div>
						<Link id="signup-btn" to={"#"}>
							Sign Up
						</Link>
						<Link id="login-btn" to={"#"}>
							Login
						</Link>
					</div>
				</nav>
				<nav role="navigation" id="mobile-nav">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						role="button"
						title={isMenuOpen ? "Open" : "Close"}
						aria-label="Menu toggle button"
					>
						{isMenuOpen ? <CgClose /> : <PiHamburger />}
					</button>
					<div id="menu-list" className={isMenuOpen ? "open" : "close"}>
						<div>
							<Link to={"#"}>Buy/Sell</Link>
							<Link to={"#"}>Grow</Link>
							<Link to={"#"}>Market</Link>
							<Link to={"#"}>Support</Link>
						</div>
						<div>
							<hr />
							<Link id="signup-btn" to={"#"}>
								Sign Up
							</Link>
							<Link id="login-btn" to={"#"}>
								Login
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
