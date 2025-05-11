import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DemoComponent from "@site/src/components/DemoComponent.live";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Transform your React components into live code blocks with ease."
    >
      <main className={styles["main-section"]}>
        <article className={styles["hero-section"]}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <section>
            <h2>Features</h2>
            <ul>
              <li>Live code editing and rendering</li>
              <li>Seamless integration with React and TypeScript</li>
              <li>Customizable and extensible</li>
            </ul>
          </section>
          <section>
            <h2>Get Started</h2>
            <p>
              Check out our <Link to="/docs/basic">documentation</Link> to learn
              how to use React Live Unplugin in your projects.
            </p>
          </section>
        </article>
        <section className={styles["demo-section"]}>
          <h2>Live Code Demo</h2>
          <DemoComponent />
        </section>
      </main>
    </Layout>
  );
}
