import InactiveStar from "../../assets/star_inactive.svg"
import ActiveStar from "../../assets/star_active.svg"
import "./rating.css"

function Rating({grade}) {

	function renderStars() {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < grade)
				stars.push(<img className="star" src={ActiveStar} alt="Étoile active"/>);
			else
				stars.push(<img className="star" src={InactiveStar} alt="Étoile inactive"/>);
		}
		return stars;
	}

	return (
		<ul className="stars-container">
			{renderStars().map((star, index) => {
				return (<li key={index}>{star}</li>)
			})}
		</ul>
	)
}

export default Rating