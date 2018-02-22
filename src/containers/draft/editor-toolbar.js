/* @flow */

import React from "react";
import { Editor } from "react-draft-wysiwyg";
import sampleEditorContent from "./sampleEditorContent";

const EditorToolbarWhenFocused = () => (
	<div className="demo-section">
		<div className="demo-section-wrapper">
			<div className="demo-editor-wrapper">
				<Editor
					toolbarClassName="demo-toolbar-absolute"
					wrapperClassName="demo-wrapper-relative"
					editorClassName="demo-editor-plain"
					defaultEditorState={sampleEditorContent}
					toolbarOnFocus
					toolbar={{
						options: ["inline", "blockType", "fontSize", "fontFamily"],
						inline: {
							inDropdown: true,
							options: [
								"bold",
								"italic",
								"underline",
								"strikethrough",
								"monospace"
							],
							bold: { className: "bordered-option-classname" },
							italic: { className: "bordered-option-classname" },
							underline: { className: "bordered-option-classname" },
							strikethrough: { className: "bordered-option-classname" },
							code: { className: "bordered-option-classname" }
						},
						blockType: {
							className: "bordered-option-classname"
						},
						fontSize: {
							className: "bordered-option-classname"
						},
						fontFamily: {
							className: "bordered-option-classname"
						}
					}}
				/>
			</div>
		</div>
	</div>
);

export default EditorToolbarWhenFocused;
