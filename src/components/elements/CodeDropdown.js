import React, { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "@atlaskit/code";
import GlobalTheme from "@atlaskit/theme/components";
import { ThemeModes } from "@atlaskit/theme/types";

export default function CodeDropdown(props) {
	const [isOpen, setOpen] = useState(props.open);
	const [mode, setMode] = useState("dark");

	// FUTURE ANIMATION POSSIBILITIES

	// useEffect(() => {
	// 	var t1 = anime
	// 		.timeline({
	// 			targets: ".test",
	// 			easing: "easeInOutSine",
	// 			delay: anime.stagger(200),
	// 			height: [0, "200px"],
	// 			duration: 500,
	// 		})
	// 		.add({
	// 			delay: 200,
	// 			opacity: ["0", "1"],
	// 		});
	// }, [isOpen]);

	return (
		<div className="flex flex-col">
			<div className="w-full flex justify-between items-center p-3 border-t-[1px] border-solid border-l-0 border-b-0 border-r-0 border-slate-200">
				<div className="flex justify-center items-center">
					<span className="text-xl text-slate-500 mr-3 font-semibold">
						{props.number}
					</span>
					<span className="text-xl font-semibold mr-3 text-slate-900">
						{props.title}
					</span>
					{props.client ? (
						<span className="text-xs bg-slate-200 px-1.5 py-0.5 rounded">
							Client-side
						</span>
					) : null}
					{props.server ? (
						<span className="text-xs bg-slate-200 px-1.5 py-0.5 rounded">
							Server-side
						</span>
					) : null}
				</div>
				<div
					className="hover:cursor-pointer flex items-center"
					onClick={() => setOpen(!isOpen)}
				>
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 15.75l7.5-7.5 7.5 7.5"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					)}
				</div>
			</div>
			{isOpen ? (
				<div className="w-full mb-6 px-3">
					<ReactMarkdown>{props.children}</ReactMarkdown>

					<GlobalTheme.Provider value={() => ({ mode })}>
						<CodeBlock
							language={props.language}
							showLineNumbers={props.showLineNumbers}
							text={props.code}
						/>
					</GlobalTheme.Provider>
				</div>
			) : null}
		</div>
	);
}
