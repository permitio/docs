import React, { useCallback } from "react";
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

	const onEditThisPageClick = useCallback(() => {
		if (window.gtag) {
			window.gtag("event", "click_edit_github", {
				event_category: "EditOnGitHub",
				event_label: "edit_on_github",
				value: window.location.pathname,
			});
		}
	}, []);

	return (
		<div className="toc-wrapper">
			<h2>Contents</h2>
			<OriginalTOC toc={toc} {...props} />
			<BrowserOnly>
				{() => (
					<>
						<div onClick={onEditThisPageClick}>
							<EditThisPage
								editUrl={
									URL_BASE_PATH +
									window.location.pathname +
									getFileForPathname(window.location.pathname)
								}
							/>
						</div>
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
								id="join-community"
								className="font-semibold text-[0.875rem] hover:text-slate-900 hover:underline hover:cursor-pointer"
							>
								Join our community
							</a>
						</div>
						<div className="flex content-center items-center mt-2 hover:opacity-75">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="19px"
								height="19px"
								fill="#2196f3"
								alt="Zoom Logo"
								className="h-full mr-[6px] ml-[-1px]"
							>
								<circle cx="24" cy="24" r="20" fill="#2196f3" />
								<path
									fill="#fff"
									d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
								/>
								<polygon fill="#fff" points="37,31 31,27 31,21 37,17" />
							</svg>
							<a
								href="https://io.permit.io/docs-to-call"
								target="_blank"
								id="join-community"
								className="font-semibold text-[0.875rem] hover:text-slate-900 hover:underline hover:cursor-pointer"
							>
								Schedule a call
							</a>
						</div>
					</>
				)}
			</BrowserOnly>
		</div>
	);
}
