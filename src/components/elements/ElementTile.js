import React from "react";

export default function ElementTile(props) {
	const redirectUser = () => {
		window.location.href = props.redirect;
	};

	return (
		<div className="flex flex-col w-96 my-4 mx-1 hover:cursor-pointer">
			<img src={props.src} alt="placeholder" className="w-full rounded" />
			<div
				className="flex mt-6 text-base"
				onClick={() => {
					redirectUser();
				}}
			>
				<span className="mr-4 font-semibold text-[#6851ff]">{props.title}</span>
				{props.recommended ? (
					<div className="flex items-center justify-center bg-[#6851ff] px-2 text-xs text-white text-bold rounded">
						RECOMMENDED
					</div>
				) : null}
			</div>
			<span className="my-2 text-sm">{props.description}</span>
		</div>
	);
}
