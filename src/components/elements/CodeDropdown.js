import React, { useState } from "react";
import anime from "animejs/lib/anime.es.js";
import ReactMarkdown from "react-markdown";
import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
import "./CodeDropdown.scss";
import { render } from "react-dom";

export default function CodeDropdown(props) {
	const [isOpen, setOpen] = useState(props.open);
	const [mode, setMode] = useState("dark");
	const [language, setLanguage] = useState(props.language);
	const [languages, setLanguages] = useState(props.languages);
	const [code] = useState(props.code);

	const [currentKey, setCurrentKey] = useState(0);

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
					<span className="text-xl text-slate-500 dark:text-slate-400 mr-3 font-semibold">
						{props.number}
					</span>
					<span className="text-xl font-semibold mr-3 text-slate-900 dark:text-slate-300">
						{props.title}
					</span>
					{props.client ? (
						<span className="text-xs bg-slate-200 dark:bg-slate-200 0 px-1.5 py-0.5 rounded text-slate-900">
							Client-side
						</span>
					) : null}
					{props.server ? (
						<span className="text-xs bg-slate-200 dark:bg-slate-200 px-1.5 py-0.5 rounded text-slate-900">
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
						<div className="w-full bg-[#0f2540] h-8 flex items-center border-b-2 border-black rounded-t-md">
							{languages.map((lang, i) => {
								return (
									<div
										key={i}
										className="text-white h-full px-3 flex items-center justify-center hover:bg-[#4e3bdb] hover:cursor-pointer text-xs font-semibold first:rounded-tl-md"
										onClick={() => setCurrentKey(i)}
									>
										{lang}
									</div>
								);
							})}
						</div>
						<CodeBlock
							style={{ width: "100%" }}
							text={code[currentKey]}
							language={language[currentKey]}
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
