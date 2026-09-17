import React from "react";
import Link from "@docusaurus/Link";

// A preview image, title and one-line description for one Permit Element,
// rendered as a single link (it navigated from a click handler on a div, which
// keyboard and screen reader users could not reach). Same props as before.
export default function ElementTile(props) {
	return (
		<Link to={props.redirect} className="pm-element-tile flex flex-col w-96 max-w-full my-4 mx-1">
			<img src={props.src} alt={`${props.title} element preview`} className="w-full rounded" />
			<span className="flex mt-6 text-base">
				<span className="pm-element-tile__title mr-4 font-semibold text-pm-link">{props.title}</span>
				{props.recommended ? (
					<span className="flex items-center justify-center bg-pm-primary px-2 text-xs text-pm-on-primary font-bold rounded">
						RECOMMENDED
					</span>
				) : null}
			</span>
			<span className="my-2 text-sm text-pm-text">{props.description}</span>
		</Link>
	);
}
