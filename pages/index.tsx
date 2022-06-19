import Head from "next/head";
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Anchor from "../components/anchor/anchor";
import SpotifyPlayer from "../components/spotify-playlist/spotify-player";
import { SPOTIFY_LINKS } from "../constants/spotify-links";
import styles from "./index.module.scss";

const Home = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const onClickAnchor = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSelectedPlaylist(event.currentTarget.href);
  };

  const onClickClose = () => {
    setSelectedPlaylist("");
  };

  const renderPlaylist = () => {
    if (!selectedPlaylist) return;

    return (
      <div className={styles.spotifyPlaylistContainer}>
        <div onClick={onClickClose}>
          <IoMdCloseCircle />
          <span>close</span>
        </div>
        <SpotifyPlayer src={selectedPlaylist} />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>carlcidromero</title>
        <meta
          name="description"
          content="Personal website by Carl 'Cid' Romero"
        />
      </Head>
      <header className={styles.header}>carlcidromero</header>
      <main className={styles.main}>
        <article>
          <div className={styles.h1Group}>
            <h1>About Me</h1>
            <div role="doc-subtitle">
              <code>((rap) =&gt; code)()</code>
            </div>
          </div>
          <p>
            I&apos;m a kid that wanted to rap and play in the NBA-- all grown
            up.
          </p>
          <p>
            My basketball career floundered-- you can find my NBA scout footage
            nowhere and my basketball skills in the trashcan.
          </p>
          <p>
            My music career thrived-- you can hear my commercial efforts on{" "}
            <Anchor href={SPOTIFY_LINKS.UFC_2_OST} onClick={onClickAnchor}>
              UFC 2
            </Anchor>
            &apos;s and{" "}
            <Anchor
              href={SPOTIFY_LINKS.CYBERPUNK_2077_OST}
              onClick={onClickAnchor}
            >
              Cyberpunk 2077
            </Anchor>
            &apos;s original soundtracks, as well as on Sleep Steady&apos;s
            final, trailblazing effort titled{" "}
            <Anchor href={SPOTIFY_LINKS.TRUNK_ALBUM} onClick={onClickAnchor}>
              Trunk
            </Anchor>
            .
          </p>
          <p>
            My academic career is a passion-- I&apos;m a lifelong student and so
            enjoy geeking out to earn a living. During my music career, this
            meant I was audio engineering my own and clients&apos; music.
            Presently, with fatherhood as my main focus, I&apos;ve adopted a
            more sustainable lifestyle by transitioning to software engineering.
            My day-to-day is now filled with code and in my spare time,
            I&apos;ll probably tinker around with this website and other
            personal projects.
          </p>
          <p>
            The athlete in me still works out regularly but leaves all acrobatic
            feats to the esports athlete in me (train by day, Rocket League by
            night... all day).
          </p>
        </article>
        {renderPlaylist()}
      </main>
    </div>
  );
};

export default Home;
