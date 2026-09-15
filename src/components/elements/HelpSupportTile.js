import React from "react";
import siteLinks from "@site/src/data/site-links";

export default function HelpSupportTile() {
	return (
		<div className="py-6 mt-8">
			<div className="flex">
				<span className="text-xl font-bold mr-2">Was this page helpful?</span>
				<button className="bg-pm-primary text-pm-on-primary ml-2 px-4 rounded font-semibold border-none cursor-pointer">
					Yes
				</button>
				<button className="bg-pm-primary text-pm-on-primary ml-2 px-4 rounded font-semibold border-none cursor-pointer">
					No
				</button>
			</div>
			<div className="my-4 border-y-black h-4"></div>
			<div className="flex">
				<div className="flex flex-col w-1/2 font-medium text-sm justify-around">
					<span className="">
						Questions?{" "}
						<a
							className="text-pm-link"
							href={siteLinks.DEMO}
							target="_blank"
							rel="noopener noreferrer"
						>
							Contact Us
						</a>
						.
					</span>
					<span>
						Watch our{" "}
						<a
							className="text-pm-link"
							href={siteLinks.VIDEOS}
							target="_blank"
							rel="noopener noreferrer"
						>
							developer tutorials
						</a>
						.
					</span>
					<span>
						Need help? Join our{" "}
						<a
							className="text-pm-link"
							href={siteLinks.COMMUNITY}
							target="_blank"
							rel="noopener noreferrer"
						>
							Slack
						</a>
						.
					</span>
				</div>
				<div className="flex flex-col w-1/2">
					<span className="font-medium text-sm mb-2">
						Sign up for developer updates:
					</span>
					<div className="w-full h-12 flex">
						<input
							onChange={(e) => {
								console.log(e.target.value);
								setEmail(e.target.value);
							}}
							placeholder="Email"
							className="w-full border-none outline-none text-sm dark:bg-white dark:text-slate-900 dark:pl-4"
						/>
						<button
							className="w-28 bg-white dark:bg-pm-primary text-pm-purple dark:text-pm-on-primary font-medium text-sm border-none cursor-pointer"
							onClick={() => textBox()}
						>
							Sign Up
						</button>
					</div>
					<span className="text-xs mt-2">
						You can unsubscribe at any time. Read our{" "}
						<a
							href={siteLinks.PRIVACY}
							className="text-pm-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							privacy policy
						</a>
						.
					</span>
				</div>
			</div>
		</div>
	);
}
