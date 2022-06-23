import Head from "next/head";
import Header from "../components/header/header";
import ContactInfo from "../content/contact-info/contact-info";
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
        <ContactInfo />
      </main>
    </div>
  );
};

export default Home;
