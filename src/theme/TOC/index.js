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
					<EditThisPage
						editUrl={
							URL_BASE_PATH +
							window.location.pathname +
							getFileForPathname(window.location.pathname)
						}
					/>
				)}
			</BrowserOnly>
		</div>
	);
}
