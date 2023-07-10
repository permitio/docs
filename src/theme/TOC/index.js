import React from "react";
import OriginalTOC from "@theme-original/TOC";
import EditThisPage from "@theme/EditThisPage";
import Divider from "@mui/material/Divider";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function TOC({ toc, editUrl, ...props }) {
	const URL_BASE_PATH = "https://github.com/permitio/docs/tree/master/docs";
	const URL_TRACKING =
		"?utm_source=docs&utm_medium=docs-toc&utm_campaign=edit-on-github&utm_id=permit-docs";

	return (
		<div className="toc-wrapper">
			<h2>Contents</h2>
			<OriginalTOC toc={toc} {...props} />
			<BrowserOnly>
				{() => (
					<EditThisPage
						editUrl={
							URL_BASE_PATH + window.location.pathname + ".mdx" + URL_TRACKING
						}
					/>
				)}
			</BrowserOnly>
		</div>
	);
}
