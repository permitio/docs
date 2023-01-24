import React from "react";
import cx from "classnames";

export default function ActionContainer(props) {
	const redirectUser = () => {
		window.location.href = props.redirect;
	};

	return (
		<div
			className={cx(
				"w-full",
				"flex",
				"my-8",
				props.reverse ? "flex-row-reverse" : null
			)}
		>
			<div className="flex w-1/2 flex-col justify-center">
				<span
					className={cx(
						"mb-3",
						"text-lg",
						"font-semibold",
						props.reverse ? "ml-6" : "mr-6"
					)}
				>
					{props.title}
				</span>
				<span className={cx("mb-3", props.reverse ? "ml-6" : "mr-6")}>
					{props.description}
				</span>
				{props.callToAction ? (
					<span
						onClick={() => redirectUser()}
						className={cx(
							"font-semibold",
							"text-[#6851ff]",
							"hover:cursor-pointer",
							props.reverse ? "ml-6" : "mr-6"
						)}
					>
						{props.callToAction} →
					</span>
				) : null}
			</div>
			<div className="w-1/2">
				<img className="w-full" src={props.src} alt="placeholder-image" />
			</div>
		</div>
	);
}
