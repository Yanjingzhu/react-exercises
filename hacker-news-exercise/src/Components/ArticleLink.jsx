import React from 'react';
import PropTypes from 'prop-types';

function ParseUrl(link) {
	if (link.startsWith('www.')) {
		link = link.substring(4);
	}
	return `(${link})`;
}

function ArticleLink({ article }) {
	const websites = async () => {
		const response = await fetch(
			'https://www.randomlists.com/data/websites.json'
		);
		const myJson = await response.json();
		console.log(`json ${myJson}`);
	};

	console.log(`lame ${websites}`);

	return (
		<>
			<a className="article-link" href={article.link}>
				{article.title}
				<span className="article-link-domain">
					{ParseUrl(article.link.match(/[^/][^/]*/gi)[1])}
				</span>
			</a>
		</>
	);
}

ArticleLink.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired
	}).isRequired
};

export default ArticleLink;
