import styles from "./top-heading.module.scss";

interface TopHeadingProps {
  children: string;
  h1: string;
}

const TopHeading: React.FC<TopHeadingProps> = (props) => {
  return (
    <div className="container">
      <div className={`rounded ${styles.h1Group}`}>
        <h1>{props.h1}</h1>
        <div role="doc-subtitle">
          <code className={styles.subtitle}>{props.children}</code>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
