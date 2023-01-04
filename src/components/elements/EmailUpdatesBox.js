import React, { useState } from "react";
import axios from "axios";

export default function EmailUpdatesBox(props) {
	const [success, setSuccess] = useState(false);
	const [email, setEmail] = useState(null);

	const addSubscriber = () => {
		// Replace URL with actual endpoint to add emails to HubSpot.
		const url = null;

		try {
			const response = axios.post({
				url,
				email,
			});

			if ((response.status = 200)) {
				setSuccess(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	// temporary for testing
	const textBox = () => {
		setSuccess(true);
	};

	return (
		<div className="w-full flex flex-col">
			<span className="text-xl font-bold">Sign up for updates</span>
			<div className="flex flex-col items-center bg-slate-50 mt-8 rounded px-20 py-6 h-60 justify-center">
				{success ? (
					<>
						<span className="text-2xl font-semibold text-blue-900">
							Thanks for signing up!
						</span>
						<span className="mt-4">
							We will keep you updated if anything new will get released.
						</span>
					</>
				) : (
					<>
						<span className="text-2xl font-semibold text-blue-900">
							Sign up to be notified of new features
						</span>
						<span className="mt-4">
							Provide your email to receive early access to eligible beta
							features for Permit Elements.
						</span>
						<div className="mt-4 w-full h-12 flex">
							<input
								onChange={(e) => {
									console.log(e.target.value);
									setEmail(e.target.value);
								}}
								placeholder="Email"
								className="w-full px-6 border-none outline-none"
							/>
							<button
								className="w-28 bg-white text-[#6851ff] font-semibold"
								onClick={() => textBox()}
							>
								Sign Up
							</button>
						</div>
						<span className="text-xs mt-2">
							Read our{" "}
							<a href="https://permit.io" className="text-[#6851ff]">
								privacy policy
							</a>
							.
						</span>
					</>
				)}
			</div>
		</div>
	);
}
