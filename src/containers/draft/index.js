import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";
import { CustomOption } from "./customToolbar";
import { ColorPic } from "./react-color";
import EditorToolbarWhenFocused from "./editor-toolbar";
import EditorI18n from "./localization";
import { EditorImage } from "./image";

export class Draft extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: EditorState.createEmpty()
		};
	}

	onEditorStateChange = editorState => {
		this.setState({
			editorState
		});
	};

	render() {
		const { editorState } = this.state;
		return (
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<h2>Text Editor</h2>
					<hr />
					<Editor
						editorState={editorState}
						wrapperClassName="demo-wrapper"
						editorClassName="demo-editor"
						onEditorStateChange={this.onEditorStateChange}
						toolbarCustomButtons={[<CustomOption />]}
						toolbar={{
							colorPicker: { component: ColorPic }
						}}
						localization={{
							locale: "en"
						}}
						mention={{
							separator: " ",
							trigger: "@",
							suggestions: [
								{ text: "APPLE", value: "apple", url: "apple" },
								{ text: "BANANA", value: "banana", url: "banana" },
								{ text: "CHERRY", value: "cherry", url: "cherry" },
								{ text: "DURIAN", value: "durian", url: "durian" },
								{ text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
								{ text: "FIG", value: "fig", url: "fig" },
								{ text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
								{ text: "HONEYDEW", value: "honeydew", url: "honeydew" }
							]
						}}
					/>
				</div>
				<div className="col-md-10 col-md-offset-1">
					<h3>Preview</h3>
					<hr />
				</div>
				<div className="col-md-10 col-md-offset-1">
					<textarea
						className="editorState"
						disabled
						value={
							editorState &&
							draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
						}
					/>
				</div>
				<div className="col-md-10 col-md-offset-1">
					<h2>Toolbar When Focused</h2>
					<hr />
					<EditorToolbarWhenFocused
						wrapperClassName="demo-wrapper"
						editorClassName="demo-editor"
					/>
				</div>
				<div className="col-md-10 col-md-offset-1">
					<h2>Image Upload.</h2>
					<hr />
					<EditorImage
						wrapperClassName="demo-wrapper"
						editorClassName="demo-editor"
					/>
				</div>
				<div className="col-md-10 col-md-offset-1">
					<h2>Editor i18n - korean locale.</h2>
					<hr />
					<EditorI18n
						wrapperClassName="demo-wrapper"
						editorClassName="demo-editor"
					/>
				</div>
			</div>
		);
	}
}
