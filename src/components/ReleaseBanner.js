import React from "react";

export default function ReleaseBanner() {
	return (
		<div
			style={{
				backgroundColor: "#ff9db1",
				borderRadius: 5,
				marginBottom: 20,
			}}
		>
			<div
				style={{
					width: "100%",
					height: 40,
					backgroundColor: "rgb(255, 55, 95)",
					position: "relative",
					display: "flex",
					alignItems: "center",
					fontWeight: "bold",
				}}
			>
				<span style={{ padding: 20 }}>INFO</span>
			</div>
			<div style={{ padding: 20 }}>
				<span>
					This is documentation for Permit.io 1.0.0, which is{" "}
					<span style={{ fontWeight: "bold" }}>
						supported for backward compatibility only
					</span>
					.
				</span>
				<br />
				<span>
					For up-to-date documentation, see the latest version{" "}
					<a href="/" style={{ fontWeight: "bold" }}>
						(2.0.0)
					</a>
					.
				</span>
			</div>
		</div>
	);
}
