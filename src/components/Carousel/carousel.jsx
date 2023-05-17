import "./carousel.css";
import { useState } from "react";
import Arrow from "../../assets/arrow_down.svg";

function Carousel({ logement }) {
	const pictures = logement.pictures;
	const [picture, setPicture] = useState(pictures[0]);

	function nextPicture() {
		const currentIndex = logement.pictures.indexOf(picture);
		setPicture(
			pictures[currentIndex >= pictures.length - 1 ? 0 : currentIndex + 1]
		);
	}

	function previousPicture() {
		const currentIndex = logement.pictures.indexOf(picture);
		setPicture(
			pictures[currentIndex <= 0 ? pictures.length - 1 : currentIndex - 1]
		);
	}

	return (
		<div className="carousel-container">
			<img className="cover" src={picture} alt={logement.title} />
			{pictures.length > 1 &&
			<>
				<img
					onClick={previousPicture}
					className="arrow left"
					src={Arrow}
					alt="Précédente"
				/>
				<span className="picture-number">{logement.pictures.indexOf(picture)+1}/{pictures.length}</span>
				<img
					onClick={nextPicture}
					className="arrow right"
					src={Arrow}
					alt="Suivante"
				/>
			</>}
		</div>
	);
}

export default Carousel;
