import React, { useState } from "react";
import { CodeBlock } from "@atlaskit/code";
import GlobalTheme from "@atlaskit/theme/components";

export default function CodeBlockComponent(props) {
	const [mode, setMode] = useState("dark");

	return (
		<GlobalTheme.Provider value={() => ({ mode })}>
			<CodeBlock
				language={props.language}
				showLineNumbers={props.showLineNumbers}
				text={props.code}
			/>
		</GlobalTheme.Provider>
	);
}
