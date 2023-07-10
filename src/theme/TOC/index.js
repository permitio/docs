import React from "react";
import OriginalTOC from "@theme-original/TOC";
import EditThisPage from "@theme/EditThisPage";
import Divider from "@mui/material/Divider";

export default function TOC({ toc, editUrl, ...props }) {
	const URL_BASE_PATH = "https://github.com/permitio/docs/tree/master/docs";

	return (
		<div className="toc-wrapper">
			<h2>Contents</h2>
			<OriginalTOC toc={toc} {...props} />
			{/* <Divider className="divider" /> */}
			<EditThisPage
				editUrl={URL_BASE_PATH + window.location.pathname + ".mdx"}
			/>
		</div>
	);
}
