import "./home.css";
import React from "react";
import Card from "../../components/Card/card";
import Banner from "../../components/Banner/banner";
import Background from "../../assets/home_banner.webp";
import Logements from "../../utils/logements.json"

function Home() {
	return (
		<React.Fragment>
			<Banner
				bannerImage={Background}
				bannerText="Chez vous, partout et ailleurs"
				bannerAlt="Plage sur une côte rocheuse"
			/>
			<main className="main-container">
				{Logements.map((logement) => {
					return (<Card key={logement.id} logement={logement}/>);
				})}
			</main>
		</React.Fragment>
	);
}

export default Home;
