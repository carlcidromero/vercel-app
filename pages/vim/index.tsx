/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import Article from "../../components/article/article";
import Header from "../../components/header/header";
import TopHeading from "../../components/top-heading/top-heading";
import screenshot from "../../public/terminal-screenshot.png";
import styles from "./vim.module.scss";

const Vim = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Article>
          <TopHeading h1="Life With Vim">¯\_(ツ)_/¯</TopHeading>
          <p>
            Vim is perfect-- the amount of time I spend learning it is greatly
            outweighed by the amount of time I save using it, which is then
            neutralized by the amount of time I spend tinkering around with it.
          </p>
          <h2>Vim As IDE</h2>
          <div className="container">
            <Image
              alt="Screenshot of a terminal split vertically into two panes-- the left pane contains Typescript code and the right pane contains output from an executed command."
              className={styles.image}
              quality={100}
              src={screenshot}
            />
          </div>
          <code className="todo">// TODO: Write about using Vim as IDE</code>
        </Article>
      </main>
    </div>
  );
};

export default Vim;
