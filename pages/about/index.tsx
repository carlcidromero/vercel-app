import Head from "next/head";
import React, { useState } from "react";
import Article from "../../components/article/article";
import Header from "../../components/header/header";
import SpotifyPlayer from "../../components/spotify-player/spotify-player";
import AboutMe from "../../content/about-me/about-me";
import styles from "./about.module.scss";

const Home = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const onClickAnchor = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setSelectedPlaylist(event.currentTarget.href);

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 1000);
  };

  const onClickClose = () => {
    setSelectedPlaylist("");
  };

  return (
    <div className="container">
      <Head>
        <title>carlcidromero</title>
        <meta
          name="description"
          content="Personal website by Carl 'Cid' Romero"
        />
      </Head>
      <Header />
      <main>
        <Article>
          <AboutMe onClickAnchor={(event) => onClickAnchor(event)} />
        </Article>
        {selectedPlaylist ? (
          <div className={styles.spotifyPlaylistContainer}>
            <SpotifyPlayer onClickClose={onClickClose} src={selectedPlaylist} />
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
