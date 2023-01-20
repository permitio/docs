import React from "react";
import cx from "classnames";

export default function ActionTile(props) {
	const redirectUser = () => {
		window.location.href = props.redirect;
	};

	return (
		<div
			className={cx(
				"flex flex-col",
				props.bg ? props.bg : "bg-slate-100",
				props.text ? props.text : "text-slate-800",
				"my-3 w-64 mr-3 h-40 rounded"
			)}
		>
			<div
				className={cx(
					props.bg2 ? props.bg2 : "bg-slate-200",
					"w-full px-4 py-2 rounded"
				)}
			>
				<span className="text-base mb-1 font-bold">{props.title}</span>
			</div>
			<div className="px-4 pt-4 flex flex-col h-full">
				<span className="mb-2 text-sm">{props.description}</span>
			</div>
			<div className="px-4 pb-4 h-10 rounded font-semibold">
				<span
					className="hover:cursor-pointer hover:text-[#4e3bdb]"
					onClick={() => redirectUser()}
				>
					Learn More →
				</span>
			</div>
		</div>
	);
}
