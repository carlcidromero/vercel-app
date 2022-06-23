import Image from "next/image";
import TopHeading from "../../components/top-heading/top-heading";
import screenshot from "../../public/terminal-screenshot.png";

const LifeWithVim = () => {
  return (
    <>
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
          className="rounded"
          quality={100}
          src={screenshot}
        />
      </div>
      <code className="todo">// TODO: Write about using Vim as IDE</code>
    </>
  );
};

export default LifeWithVim;
