/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const PropTypes = require("prop-types");
const React = require("react");

function SocialFooter(props) {
  const repoUrl = `https://github.com/${props.config.organizationName}/${
    props.config.projectName
  }`;
  return (
    <div className="footerSection">
      <h5>Social</h5>
      <div className="social">
        {/* <a
          className="github-button" // part of the https://buttons.github.io/buttons.js script in siteConfig.js
          href={repoUrl}
          data-count-href={`${repoUrl}/stargazers`}
          data-show-count="true"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star this project on GitHub"
        >
          {props.config.projectName}
        </a> */}
      </div>
      {props.config.twitterUsername && (
        <div className="social">
          <a
            href={`https://twitter.com/${props.config.twitterUsername}`}
            className="twitter-follow-button"
          >
            Follow @{props.config.twitterUsername}
          </a>
        </div>
      )}
      {props.config.facebookAppId && (
        <div className="social">
          <div
            className="fb-like"
            data-href={props.config.url}
            data-colorscheme="dark"
            data-layout="standard"
            data-share="true"
            data-width="225"
            data-show-faces="false"
          />
        </div>
      )}
    </div>
  );
}

SocialFooter.propTypes = {
  config: PropTypes.object
};

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("doc1.html", this.props.language)}>
              Getting Started (or other categories)
            </a>
            <a href={this.docUrl("doc2.html", this.props.language)}>
              Guides (or other categories)
            </a>
            <a href="https://www.lambdatest.com/privacy">Privacy</a>
            <a href="https://www.lambdatest.com/terms-of-service">Terms</a>
            <a href="https://www.lambdatest.com/">Lambdatest Home</a>
          </div>
          <div>
            {/* <h5>Community</h5>
            <a href={this.pageUrl("users.html", this.props.language)}>
              User Showcase
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://discordapp.com/">Project Chat</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a> */}
          </div>
          <div>
            <SocialFooter config={this.props.config} />
          </div>
        </section>

        {/* <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
