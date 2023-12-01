import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Rapid provides a fast and robust approach for building your REST-based
        APIs
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Rapid allows you to focus on your API's resource model and rely on
        well-established conventions for the nitty-gritty details
      </>
    ),
  },
  {
    title: "Based on Open Standards",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Rapid is an Open Specification built by OASIS members and the community.
        Rapid is based on existing standards like OData, OpenAPI, and GraphQL
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      {/* <div className="text--center padding-horiz--md"> */}
      <h3>{title}</h3>
      <p>{description}</p>
      {/* </div> */}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
