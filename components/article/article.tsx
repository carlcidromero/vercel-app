import styles from "./article.module.scss";

interface ArticleProps {
  children: React.ReactNode | React.ReactNode[];
}

const Article: React.FC<ArticleProps> = (props) => {
  return <article className={styles.article}>{props.children}</article>;
};

export default Article;
