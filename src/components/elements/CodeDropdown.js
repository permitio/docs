import { useState } from "react";
import ThemeCodeBlock from "@theme/CodeBlock";

// Collapsible step with a language switcher over one code block. The tab bar
// shares .pm-code-tabs styling with the SDK <CodeBlock> (src/css/components/_code.scss).
export default function CodeDropdown({
	open = false,
	number,
	title,
	client,
	server,
	code = [],
	language = [],
	languages = [],
	showLineNumbers,
	children,
}) {
	const [isOpen, setOpen] = useState(open);
	const [currentKey, setCurrentKey] = useState(0);
	const badgeClass = "text-xs font-semibold bg-pm-surface-3 text-pm-text px-1.5 py-0.5 rounded";

	return (
		<div className="flex flex-col">
			<div className="w-full flex justify-between items-center p-3 border-0 border-t border-solid border-pm-border">
				<div className="flex justify-center items-center">
					<span className="text-xl text-pm-text-muted mr-3 font-semibold">{number}</span>
					<span className="text-xl font-semibold mr-3 text-pm-text">{title}</span>
					{client ? <span className={badgeClass}>Client-side</span> : null}
					{server ? <span className={badgeClass}>Server-side</span> : null}
				</div>
				<button
					type="button"
					className="clean-btn flex items-center text-pm-text-muted hover:text-pm-text"
					aria-expanded={isOpen}
					aria-label={isOpen ? "Collapse step" : "Expand step"}
					onClick={() => setOpen(!isOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d={isOpen ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"}
						/>
					</svg>
				</button>
			</div>
			{isOpen ? (
				<div className="w-full mb-6 px-3">
					{children}

					<div className="w-full">
						<div className="pm-code-tabs" role="group" aria-label="Language">
							{languages.map((lang, i) => (
								<button
									key={lang}
									type="button"
									className={`pm-code-tabs__item${i === currentKey ? " is-active" : ""}`}
									aria-pressed={i === currentKey}
									onClick={() => setCurrentKey(i)}
								>
									{lang}
								</button>
							))}
						</div>
						<ThemeCodeBlock language={language[currentKey]} showLineNumbers={showLineNumbers}>
							{code[currentKey]}
						</ThemeCodeBlock>
					</div>
				</div>
			) : null}
		</div>
	);
}
