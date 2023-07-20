import React from "react";
import OriginalTOC from "@theme-original/TOC";
import EditThisPage from "@theme/EditThisPage";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function TOC({ toc, editUrl, ...props }) {
	const URL_BASE_PATH = "https://github.com/permitio/docs/tree/master/docs";

	// TODO: Needs improvement.
	// Avoids home.mdx files throwing a 404.
	const getFileForPathname = (pathname) => {
		if (pathname === "/") {
			return "home.mdx";
		}

		return ".mdx";
	};

	return (
		<div className="toc-wrapper">
			<h2>Contents</h2>
			<OriginalTOC toc={toc} {...props} />
			<BrowserOnly>
				{() => (
					<>
						<EditThisPage
							editUrl={
								URL_BASE_PATH +
								window.location.pathname +
								getFileForPathname(window.location.pathname)
							}
						/>
						<div className="flex content-center items-center mt-2 hover:opacity-75">
							<svg
								width="14"
								height="14"
								viewBox="0 0 60 60"
								fill="none"
								aria-hidden="true"
								alt="Slack Logo"
								className="h-full mr-2"
							>
								<path
									d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
									fill="#36C5F0"
								/>
								<path
									d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
									fill="#2EB67D"
								/>
								<path
									d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
									fill="#ECB22E"
								/>
								<path
									d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
									fill="#E01E5A"
								/>
							</svg>
							<a
								href="https://io.permit.io/docs-to-slack"
								target="_blank"
								className="font-semibold text-[0.875rem] hover:text-slate-900 hover:underline hover:cursor-pointer"
							>
								Join our community
							</a>
						</div>
					</>
				)}
			</BrowserOnly>
		</div>
	);
}
