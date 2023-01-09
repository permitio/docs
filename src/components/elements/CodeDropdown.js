import React, { useState } from "react";
import anime from "animejs/lib/anime.es.js";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";
import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
import "./CodeDropdown.scss";

export default function CodeDropdown(props) {
	const [isOpen, setOpen] = useState(props.open);
	const [mode, setMode] = useState("dark");
	const [language, setLanguage] = useState("javascript");
	const [languages, setLanguages] = useState(["npm", "yarn"]);

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

	const renderLanguages = () => {
		languages.map((lang) => {
			console.log(lang);
			return <div>{lang}</div>;
		});
	};

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

					<div className="parentCodeSelector w-full">
						<div className="w-full bg-[#002451] h-8">{renderLanguages()}</div>
						<CodeBlock
							style={{ width: "100%" }}
							text={props.code}
							language={language}
							showLineNumbers={props.showLineNumbers}
							theme={tomorrowNightBlue}
							wrapLines={true}
							CodeBlock
						/>
					</div>
				</div>
			) : null}
		</div>
	);
}
