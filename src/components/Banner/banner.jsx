import "./banner.css";

function Banner({ bannerImage, bannerText, bannerAlt }) {
	return (
		<>
			<img src={bannerImage} alt={bannerAlt} />
			<div className="mask">
				{bannerText !== "" && <h1>{bannerText}</h1>}
			</div>
		</>
	);
}

export default Banner;
