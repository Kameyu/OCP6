import "../../utils/styles/banner.css";

function Banner({ bannerImage, bannerText }) {
	return (
		<div className="banner">
			<img src={bannerImage} alt="Bord de plage d'une côte rocheuse" />
			<div className="mask">
				{bannerText !== "" && <h1>{bannerText}</h1>}
			</div>
		</div>
	);
}

export default Banner;
