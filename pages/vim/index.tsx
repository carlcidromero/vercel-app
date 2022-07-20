import Article from "../../components/article/article";
import Header from "../../components/header/header";

const Vim = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Article>
          <h1>Vim</h1>
          <p>
            Vim is perfect-- the amount of time I spend learning it is greatly
            outweighed by the amount of time I save using it, which is then
            neutralized by the amount of time I spend tinkering around with it.
          </p>
        </Article>
      </main>
    </div>
  );
};

export default Vim;
