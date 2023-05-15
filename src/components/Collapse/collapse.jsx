import "./collapse.css";
import arrowUp from "../../assets/arrow_down.svg";
import { useState } from "react";

function Collapse({ title, content }) {
	const [state, setState] = useState("up");

	function toggleState(e, state) {
		const [newValue, newAlt] = [
			state === "down" ? "up" : "down",
			state === "down" ? "Déplier" : "Replier"
		];

		const collapseElement = e.target;
		collapseElement.style.rotate = state === "up" ? "none" : "180deg";
		setState(newValue);
		collapseElement.setAttribute("alt", newAlt);
		e.target.parentNode.parentNode.style.height = state === "up" ? "unset" : "100%";
	}

	return (
		<div className="collapse-container">
			<div className="collapse-bar">
				<h2>{title}</h2>
				<img
					onClick={(e) => toggleState(e, state)}
					src={arrowUp}
					alt="Déplier"
				/>
			</div>
			{state === "down" && (
				<div className="collapse-content">
					{Array.isArray(content) ? (
						<ul className="collapse-list">
							{content.map((item, index) => {
								return <li key={index}>{item}</li>
							})}
						</ul>
					) : (
						<p>{content}</p>
					)}
				</div>
			)}
		</div>
	);
}

export default Collapse;
