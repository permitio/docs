import React from "react";
import cx from "classnames";
import Link from "@docusaurus/Link";

// Action card with a "Learn more" link. Colours come from the pm-* Tailwind
// tokens so the tile follows the theme (it used fixed slate greys), and the
// action is a real link instead of a click handler on a span.
export default function ActionTile(props) {
	return (
		<div
			className={cx(
				"flex flex-col",
				props.alt ? "bg-pm-primary text-pm-on-primary" : "bg-pm-surface-2 text-pm-text",
				"my-3 w-64 mr-3 h-40 rounded"
			)}
		>
			<div className={cx(props.alt ? "bg-pm-purple" : "bg-pm-surface-3", "w-full px-4 py-2 rounded")}>
				<span className="text-base mb-1 font-bold">{props.title}</span>
			</div>
			<div className="px-4 pt-4 flex flex-col h-full">
				<span className="mb-2 text-sm">{props.description}</span>
			</div>
			<div className="px-4 pb-4 h-10 rounded font-semibold">
				<Link to={props.redirect} className="pm-action-tile__link">
					Learn more →
				</Link>
			</div>
		</div>
	);
}
