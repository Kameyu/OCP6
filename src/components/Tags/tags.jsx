import "./tags.css"

function Tags({ tagList }) {
	return (
		<ul className="tag-list">
			{tagList.map((tag, index) => {
				return (
					<li className="tag" key={index}>
						{tag}
					</li>
				);
			})}
		</ul>
	);
}

export default Tags;
