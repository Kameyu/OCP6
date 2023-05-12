import "./banner.css";

function Banner({ bannerImage, bannerText, bannerAlt }) {
	return (
		<div className="banner">
			<img src={bannerImage} alt={bannerAlt} />
			<div className="mask">
				{bannerText !== "" && <h1>{bannerText}</h1>}
			</div>
		</div>
	);
}

export default Banner;
