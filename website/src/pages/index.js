import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
// Temporary bug in docusaurus
// import Rocket from '@site/static/img/rocket.svg';
// import animateRapidSpaceMan from '../components/rocket/animation'

const features = [
  {
    title: <>Easy to Use</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Rapid provides a fast and robust approach for building your REST-based APIs
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
     //  imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Rapid allows you to focus on your API's resource model and rely on well-established conventions for the nitty-gritty details
      </>
    ),
  },
  {
    title: <>Based on Open Standards</>,
    //   imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Rapid is an Open Specification build by OASIS members and the community.
        Rapid is based on existing standards like OData, OpenAPI, and GraphQL
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className={classnames('col col--5')}>
              {/* <Rocket></Rocket> */}
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

// setTimeout(animateRapidSpaceMan, 1000)

export default Home;

