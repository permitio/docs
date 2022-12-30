import React from "react";

export default function ActionContainer(props) {
	const redirectUser = () => {
		document.push("/features/permit-elements/element/user-management");
	};

	return (
		<div className="w-full flex my-8">
			<div className="flex w-1/2 flex-col justify-center">
				<span className="font-semibold mb-3">{props.title}</span>
				<span className="mb-3">{props.description}</span>
				<span
					onClick={() => redirectUser()}
					className="font-semibold text-[#6851ff] hover:cursor-pointer"
				>
					Get Started →
				</span>
			</div>
			<div className="w-1/2">
				<img className="w-full" src={props.src} alt="placeholder-image" />
			</div>
		</div>
	);
}
