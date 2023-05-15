import "./apropos.css";
import React from "react";
import Background from "../../assets/apropos_banner.webp";
import Banner from "../../components/Banner/banner";
import Collapse from "../../components/Collapse/collapse";
import About from "../../utils/about.json";

function Apropos() {
	return (
		<React.Fragment>
			<div id="about" className="banner">
				<Banner
					bannerImage={Background}
					bannerText=""
					bannerAlt="Vue sur une région montagneuse avec une rivière"
				/>
			</div>
			<main className="about-main">
				<div className="about-container">
					{About.map((item) => {
						return (
							<Collapse
								key={item.title}
								title={item.title}
								content={item.content}
							/>
						);
					})}
				</div>
			</main>
		</React.Fragment>
	);
}

export default Apropos;
