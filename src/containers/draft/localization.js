import React from "react";
import { Editor } from "react-draft-wysiwyg";

const EditorI18n = () => (
	<div className="demo-section">
		<h3>7. Editor i18n - korean locale.</h3>
		<div className="demo-section-wrapper">
			<div className="demo-editor-wrapper">
				<Editor
					wrapperClassName="demo-wrapper"
					editorClassName="demo-editor"
					localization={{
						locale: "ko"
					}}
				/>
			</div>
		</div>
	</div>
);

export default EditorI18n;
