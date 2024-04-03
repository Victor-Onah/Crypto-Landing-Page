import { RiBitCoinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
	return (
		<footer>
			<div>
				<h3 style={{ fontWeight: 500, fontSize: 24 }}>
					<Link to={"/"} id="logo">
						<RiBitCoinLine /> Cryptic
					</Link>
				</h3>
				<p>
					Cryptic, the world's leading bitcoin ATM operator, makes it so
					crypping easy to trade bitcoin via cash, cards, or bank transfers.
				</p>
			</div>
			<div>
				<ul>
					<li>
						<Link to={"#"}>Company</Link>
					</li>
					<li>
						<Link to={"#"}>About</Link>
					</li>
					<li>
						<Link to={"#"}>Careers</Link>
					</li>
					<li>
						<Link to={"#"}>Press</Link>
					</li>
					<li>
						<Link to={"#"}>News</Link>
					</li>
					<li>
						<Link to={"#"}>Merch</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<Link to={"#"}>Privacy Policy and Terms of Service</Link>
					</li>
					<li>
						<Link to={"#"}>Cryptic Privacy Policy</Link>
					</li>
					<li>
						<Link to={"#"}>Cryptic Biometrics Privacy Policy</Link>
					</li>
					<li>
						<Link to={"#"}>Cryptic Financial Privacy Notice</Link>
					</li>
					<li>
						<Link to={"#"}>Cryptic Terms of Service</Link>
					</li>
					<li>
						<Link to={"#"}>Cryptic Trade Desk terms of Service</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
