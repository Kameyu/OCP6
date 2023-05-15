import "./home.css";
import React from "react";
import Card from "../../components/Card/card";
import Banner from "../../components/Banner/banner";
import Background from "../../assets/home_banner.webp";
import Logements from "../../utils/logements.json";
import { Link } from "react-router-dom";

function Home() {
	return (
		<React.Fragment>
			<div className="banner">
				<Banner
					bannerImage={Background}
					bannerText="Chez vous, partout et ailleurs"
					bannerAlt="Plage sur une côte rocheuse"
				/>
			</div>
			<main className="home-main">
				<div className="main-container">
					{Logements.map((logement) => {
						return (
							<Link
								key={logement.id}
								to={`logement/${logement.id}`}
							>
								<Card logement={logement} />
							</Link>
						);
					})}
				</div>
			</main>
		</React.Fragment>
	);
}

export default Home;
