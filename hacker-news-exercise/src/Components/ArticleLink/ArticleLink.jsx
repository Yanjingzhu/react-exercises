import React, { Fragment } from "react";
import PropTypes from "prop-types";

function ParseUrl(link) {
  if (link.startsWith("www.")) {
    link = link.substring(4);
  }
  return `(${link})`;
}

const ArticleLink = ({ article }) => (
  <Fragment>
    <a className="article-link" href={article.link}>
      {article.title}
      <span className="article-link-domain">{ParseUrl(article.link.match(/[^/][^/]*/gi)[1])}</span>
    </a>
  </Fragment>
);

ArticleLink.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

export default ArticleLink;