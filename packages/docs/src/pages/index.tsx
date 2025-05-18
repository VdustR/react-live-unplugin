import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import img from "./image.png";
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
            <p>Turn React components into live code blocks with ease.</p>
          </section>
          <img
            className={styles["exam-img"]}
            src={img}
            alt="React Live Unplugin"
          />
          <section>
            <h2>Get Started</h2>
            <p>
              Check out our <Link to="/docs/basic">documentation</Link> to learn
              how to use React Live Unplugin in your projects.
            </p>
          </section>
        </article>
      </main>
    </Layout>
  );
}
