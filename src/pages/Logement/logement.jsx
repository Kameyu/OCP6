import "./logement.css";
import LogementList from "../../utils/logements.json";
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../../components/Carousel/carousel";
import Rating from "../../components/Rating/rating";
import Tags from "../../components/Tags/tags";
import Collapse from "../../components/Collapse/collapse";

function Logement() {
	const { id } = useParams();
	const logement = LogementList.find((logement) => logement.id === id);

	return (
		<main>
			{logement === undefined ? (
				<Navigate to="/404" />
			) : (
				<>
					<Carousel logement={logement} />
					<div className="info-container">
						<div className="description">
							<h1>{logement.title}</h1>
							<p>{logement.location}</p>
							<Tags tagList={logement.tags} />
						</div>
						<div className="host-profile">
							<div className="host-info">
								<p className="host-name">
									{logement.host.name}
								</p>
								<img
									className="host-picture"
									src={logement.host.picture}
									alt={logement.host.name}
								/>
							</div>
							<Rating grade={logement.rating} />
						</div>
					</div>
					<div className="info-collapses-container">
						<Collapse title="Description" content={logement.description}/>
						<Collapse title="Équipements" content={logement.equipments}/>
					</div>
				</>
			)}
		</main>
	);
}

export default Logement;
