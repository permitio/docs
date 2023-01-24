import React from "react";

export default function HelpSupportTile() {
	return (
		<div className="py-6 mt-8">
			<div className="flex">
				<span className="text-xl font-bold mr-2">Was this page helpful?</span>
				<button className="bg-[#6851ff] text-white ml-2 px-4 rounded font-semibold border-none cursor-pointer">
					Yes
				</button>
				<button className="bg-[#6851ff] text-white ml-2 px-4 rounded font-semibold border-none cursor-pointer">
					No
				</button>
			</div>
			<div className="my-4 border-y-black h-4"></div>
			<div className="flex">
				<div className="flex flex-col w-1/2 font-medium text-sm justify-around">
					<span className="">
						Questions?{" "}
						<a className="text-[#6851ff]" href="">
							Contact Us
						</a>
						.
					</span>
					<span>
						Watch our{" "}
						<a className="text-[#6851ff]" href="">
							developer tutorials
						</a>
						.
					</span>
					<span>
						Need help? Join our{" "}
						<a className="text-[#6851ff]" href="">
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
							className="w-28 bg-white dark:bg-[#6851ff] text-[#6851ff] dark:text-white font-medium text-sm border-none cursor-pointer"
							onClick={() => textBox()}
						>
							Sign Up
						</button>
					</div>
					<span className="text-xs mt-2">
						You can unsubscribe at any time. Read our{" "}
						<a href="https://permit.io" className="text-[#6851ff]">
							privacy policy
						</a>
						.
					</span>
				</div>
			</div>
		</div>
	);
}
