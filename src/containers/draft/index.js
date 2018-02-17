import React from "react";
import { Link } from "react-router-dom";

export const Draft = () => {
	return (
		<div>
			<h3>
				<Link to="/draft/mentions">Mentions Demo</Link> #
			</h3>
			<blockquote>
				<p>This allows the user to choose an entry from a list</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/draft/emoji">Emojis Demo</Link> #
			</h3>
			<blockquote>
				<p>
					Consistent Emoji display across all platforms, independent of the host
					system.
				</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/draft/hashtag">Hashtag Demo</Link> #
			</h3>
			<blockquote>
				<p>Highlighting words starting with a number sign (#).</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/draft/inline">Inline Demo</Link> #
			</h3>
			<blockquote>
				<p>Toolbar shows up once we select part of the text</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/draft/sidebar">Static Toolbar Demo</Link> #
			</h3>
			<blockquote>
				<p>The toolbar can be used for formatting text</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/draft/video">Videos Demo</Link> #
			</h3>
			<blockquote>
				<p>The editor can be used to add videos</p>
			</blockquote>
			<hr />
		</div>
	);
};

export { default as Mentions } from "./mentions";
export { default as Emojis } from "./emoji";
export { default as Hashtags } from "./hashtag";
export { default as Inlines } from "./inline";
export { default as SideToolbars } from "./sidetoolbar";
export { default as Videos } from "./videos";
