import Article from "../../components/article/article";
import Header from "../../components/header/header";
import LifeWithVim from "../../content/life-with-vim/life-with-vim";

const Vim = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Article>
          <LifeWithVim />
        </Article>
      </main>
    </div>
  );
};

export default Vim;
