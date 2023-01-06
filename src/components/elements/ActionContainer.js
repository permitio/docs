import React from "react";
import cx from "classnames";

export default function ActionContainer(props) {
	const redirectUser = () => {
		document.push("/features/permit-elements/element/user-management");
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
						"font-semibold",
						props.reverse ? "ml-4" : "mr-4"
					)}
				>
					{props.title}
				</span>
				<span className={cx("mb-3", props.reverse ? "ml-4" : "mr-4")}>
					{props.description}
				</span>
				{props.callToAction ? (
					<span
						onClick={() => redirectUser()}
						className="font-semibold text-[#6851ff] hover:cursor-pointer"
					>
						Get Started →
					</span>
				) : null}
			</div>
			<div className="w-1/2">
				<img className="w-full" src={props.src} alt="placeholder-image" />
			</div>
		</div>
	);
}
