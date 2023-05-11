import React from "react";
import "../../utils/styles/home.css";
import Banner from "../../components/Banner";
import Background from "../../assets/home_banner.webp";
import Card from "../../components/Card";

function Home() {
	return (
		<React.Fragment>
			<div>
				<Banner
					bannerImage={Background}
					bannerText="Chez vous, partout et ailleurs"
				/>
			</div>
			<main className="main-container">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</main>
		</React.Fragment>
	);
}

export default Home;
