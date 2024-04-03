import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.scss";
import { IoWallet } from "react-icons/io5";
import { GrAtm } from "react-icons/gr";
import { GiTrade } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { memo, useEffect, useRef } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Home() {
	const Chart = memo(TradingViewWidget);
	return (
		<>
			<Helmet>
				<title>Cryptic - Online Crypto Trading Platform</title>
			</Helmet>
			<main id="home">
				<header>
					<h1>We Make Crypto Trading Simplified</h1>
					<p>
						Buy, sell and grow your crypto with Cryptic, the platform dedicated
						to every trader at entry level
					</p>
					<Link to={"/register"}>Get Started</Link>
					<div className="blop"></div>
					<div className="blop"></div>
					<div className="blop"></div>
					<img src="/images/bitcoin.svg" alt="Bitcoin image" />
					<img src="/images/litecoin.svg" alt="LiteCoin image" />
					<img src="/images/etherium.svg" alt="Etherium image" />
					<img src="/images/monero.svg" alt="Monero image" />
				</header>
				<div id="services">
					<div
						className="service"
						style={{
							gridArea: "one",
						}}
					>
						<div>
							<GiTrade />
						</div>
						<h3>Trade Desk</h3>
						<p>
							Invest in crypto anytime, anywhere with our safe, secure, and easy
							to use online platform
						</p>
					</div>
					<div
						className="service"
						style={{
							gridArea: "two",
						}}
					>
						<div>
							<GrAtm />
						</div>
						<h3>CoinFlip ATMs</h3>
						<p>
							We have thousands of ATMs located across the US, where you can
							easily convert cash to crypto
						</p>
					</div>
					<div
						className="service"
						style={{
							gridArea: "three",
						}}
					>
						<div>
							<IoWallet />
						</div>
						<h3>CoinFlip Wallet</h3>
						<p>
							Store your growing investments in our non-custodial wallet that
							gives you access to a full suite of DeFi services in one place
						</p>
					</div>
				</div>
				<div id="section-2">
					<h2>A crypto investment platform that invests in you</h2>
					<p>
						We invest more resources than any other platform in making sure
						great support from real people is a click away, whenever you need
						it.
					</p>
					<Link to={"/register"}>Get Started</Link>
				</div>
				<div id="section-3">
					<img
						style={{
							width: "100%",
							display: "block",
							transform: "translateY(5px)",
						}}
						src="/images/wavy.svg"
						alt="Wavy image"
					/>
					<div>
						<img src="/images/iconsshield.svg" alt="Animated 3D shield" />
						<div>
							<h2>24/7 access to full customer service support</h2>
							<p>
								We invest more resources than any other platform in making sure
								great support from real people is a click away, whenever you
								need it.
							</p>
							<Link to={"/register"}>Get Started</Link>
						</div>
					</div>
					<img
						style={{
							width: "100%",
							display: "block",
							transform: "scale(-1) translateY(5px)",
						}}
						src="/images/wavy.svg"
						alt="Wavy image"
					/>
				</div>
				<div id="section-4">
					<h2>Buy and sell with the lowest fees in the industry</h2>
					<p>
						Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using
						bank transfers or your credit/debit card
					</p>
					<a href="#">
						Learn more <BsArrowRight />
					</a>
				</div>
				<div style={{ padding: 16 }}>
					<Chart />
				</div>
				<div id="section-5">
					<img src="/images/icons.svg" alt="Animated 3D briefcase" />
					<div>
						<h2>Take your first step into a safe, secure crypto investing</h2>
						<p>
							Separated they liv in Bookmarks right at the coast of the famous
							semantics, large language oceans separated they live in Bookmarks
							right at the coast.
						</p>
						<Link to={"/register"}>Get Started</Link>
					</div>
				</div>
				<div id="section-6">
					<h2>Receive Transmissions</h2>
					<p>
						Unsubscribe at any time.{" "}
						<b style={{ fontWeight: 500 }}>
							Privacy policy <RiArrowRightUpLine />
						</b>
					</p>
					<form onSubmit={(e) => e.preventDefault()}>
						<input required type="email" />
						<button>
							<BsArrowRight />
						</button>
					</form>
				</div>
			</main>
		</>
	);
}

function TradingViewWidget() {
	const container = useRef<HTMLDivElement>({} as HTMLDivElement);

	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
        {
          "autosize": true,
          "symbol": "COINBASE:BTCUSD",
          "interval": "1",
          "timezone": "Africa/Lagos",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(0, 0, 0, 0.06)",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
		container.current.appendChild(script);
	}, []);

	return (
		<div
			className="tradingview-widget-container"
			ref={container}
			style={{ aspectRatio: "16/9", width: "100%", minHeight: 300 }}
		>
			<div
				className="tradingview-widget-container__widget"
				style={{ height: "calc(100% - 32px)", width: "100%" }}
			></div>
			<div className="tradingview-widget-copyright">
				<a
					href="https://www.tradingview.com/"
					rel="noopener nofollow"
					target="_blank"
				>
					<span className="blue-text">Track all markets on TradingView</span>
				</a>
			</div>
		</div>
	);
}
