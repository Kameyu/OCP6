import "./card.css";

function Card({ logement }) {
	return (
		// <Link to=...>
		<article className="card">
			<div className="gradient">
				<h2>{logement.title}</h2>
			</div>
			<img src={logement.cover} alt={logement.title} />
		</article>
		// </Link>
	);
}

export default Card;
