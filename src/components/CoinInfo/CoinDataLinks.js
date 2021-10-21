import React from "react";

export function CoinDataLinks({ links, thumbImage }) {
  return (
    <div className="currency-links">
      <h3>Links:</h3>
      <div className="link-row">
        <h4 className="link-row-title">Website</h4>
        {links.homepage.map((homepageLink) => {
          if (homepageLink) {
            return (
              <a
                key={homepageLink}
                href={homepageLink}
                target="_blank"
                rel="noreferrer"
              >
                <img src={thumbImage} alt="thumbImage" />
              </a>
            );
          }
        })}
      </div>
      <div className="link-row">
        <h4 className="link-row-title">Source code</h4>
        {links.repos_url.github.map((githubLink) => {
          if (githubLink) {
            return (
              <a
                key={githubLink}
                href={githubLink}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
