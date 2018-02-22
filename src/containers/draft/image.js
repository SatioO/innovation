import React from "react";
import { Editor } from "react-draft-wysiwyg";

function uploadImageCallBack(file) {
	return new Promise((resolve, reject) => {
		alert("Image uploading successful");
		resolve();
	});
}

export const EditorImage = () => (
	<Editor
		wrapperClassName="demo-wrapper"
		editorClassName="demo-editor"
		toolbar={{
			inline: { inDropdown: true },
			list: { inDropdown: true },
			textAlign: { inDropdown: true },
			link: { inDropdown: true },
			history: { inDropdown: true },
			image: {
				uploadCallback: uploadImageCallBack,
				alt: { present: true, mandatory: true }
			}
		}}
	/>
);
