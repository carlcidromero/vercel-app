import Head from "next/head";
import Header from "../components/header/header";
import LinkTree from "../content/link-tree/link-tree";
import Portrait from "../content/portrait/portrait";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>carlcidromero.vercel.app</title>
        <meta
          name="description"
          content="Personal website by Carl 'Cid' Romero-- built using Next.js, deployed using Vercel."
        />
      </Head>
      <Header />
      <main>
        <Portrait />
        <LinkTree />
      </main>
    </div>
  );
};

export default Home;
