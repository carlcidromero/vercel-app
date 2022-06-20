import Head from "next/head";
import React, { useState } from "react";
import Anchor from "../components/anchor/anchor";
import Article from "../components/article/article";
import Header from "../components/header/header";
import SpotifyPlayer from "../components/spotify-player/spotify-player";
import TopHeading from "../components/top-heading/top-heading";
import { SPOTIFY_LINKS } from "../constants/spotify-links";
import styles from "./index.module.scss";

const Home = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const onClickLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSelectedPlaylist(event.currentTarget.href);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 500);
  };

  const onClickClose = () => {
    setSelectedPlaylist("");
  };

  const getAboutMe = () => (
    <Article>
      <TopHeading h1="About Me">((rap) =&gt; code)()</TopHeading>
      <p>
        I&apos;m a kid that wanted to rap and play in the NBA-- all grown up.
      </p>
      <p>
        My basketball career floundered-- you can find my NBA scout footage
        nowhere and my basketball skills in the trashcan.
      </p>
      <p>
        My rap career thrived-- you can hear my commercial efforts on{" "}
        <Anchor href={SPOTIFY_LINKS.UFC_2_OST} onClick={onClickLink}>
          UFC 2
        </Anchor>
        &apos;s and{" "}
        <Anchor href={SPOTIFY_LINKS.CYBERPUNK_2077_OST} onClick={onClickLink}>
          Cyberpunk 2077
        </Anchor>
        &apos;s original soundtracks, as well as on Sleep Steady&apos;s final,
        trailblazing effort titled{" "}
        <Anchor href={SPOTIFY_LINKS.TRUNK_ALBUM} onClick={onClickLink}>
          Trunk
        </Anchor>
        .
      </p>
      <p>
        My academic career is a passion-- I&apos;m a lifelong student and so
        enjoy geeking out to earn a living. During my music career, this meant I
        was audio engineering my own and clients&apos; music. Presently, with
        fatherhood as my main focus, I&apos;ve adopted a more sustainable
        lifestyle by transitioning to software engineering. My day-to-day is now
        filled with code and in my spare time, I&apos;ll probably tinker around
        with this website and other personal projects.
      </p>
      <p>
        The athlete in me still works out regularly but leaves all acrobatic
        feats to the esports athlete in me (train by day, Rocket League by
        night... all day).
      </p>
    </Article>
  );

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
        {selectedPlaylist ? (
          <div className={styles.spotifyPlaylistContainer}>
            <SpotifyPlayer onClickClose={onClickClose} src={selectedPlaylist} />
          </div>
        ) : null}
        {getAboutMe()}
      </main>
    </div>
  );
};

export default Home;
