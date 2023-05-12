import "./collapse.css";
import arrowUp from "../../assets/arrow_up.svg";
import arrowDown from "../../assets/arrow_down.svg";
import { useState } from "react";

function Collapse({ title, content }) {
	const [state, setState] = useState("up");

	function toggleState(e, state) {
		e.preventDefault();
		const [newValue, newAlt] = [
			state === "down" ? "up" : "down",
			state === "down" ? "Déplier" : "Replier",
		];
		const collapseElement = document.getElementById("collapse-button");
		setState(newValue);
		collapseElement.setAttribute("alt", newAlt);
		collapseElement.parentNode.setAttribute("value", newValue);
	}

	return (
		<>
			<div className="collapse-bar">
				<h2>{title}</h2>
				<img
					onClick={(e) => toggleState(e, state)}
					src={state === "up" ? arrowDown : arrowUp}
					alt="Déplier"
				/>
			</div>
			{state === "down" && (
				<div className="collapse-container">
					<p>{content}</p>
				</div>
			)}
		</>
	);
}

export default Collapse;
