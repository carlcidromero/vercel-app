import Head from "next/head";
import React, { useState } from "react";
import SpotifyPlaylist from "../components/spotify-playlist/spotify-playlist";
import styles from "./index.module.scss";
import { IoMdCloseCircle } from "react-icons/io";

const Home = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const onClickAnchor = (event: React.MouseEvent) => {
    event.preventDefault();
    const { href } = event.currentTarget as HTMLAnchorElement;
    setSelectedPlaylist(href);
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
        <SpotifyPlaylist src={selectedPlaylist} />
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
            <a href="https://open.spotify.com/album/4mJhtGGooABxKeC5n7hzoy?si=QZrxeagaR1efvvpMk3Fcaw">
              UFC 2
            </a>
            &apos;s and{" "}
            <a
              href="https://open.spotify.com/embed/playlist/6Y87WJ4WzDSmKmxxefi8XS?utm_source=generator&theme=0"
              onClick={(event: React.MouseEvent) => onClickAnchor(event)}
            >
              Cyberpunk 2077
            </a>
            &apos;s original soundtracks, as well as on Sleep Steady&apos;s
            final, trailblazing effort titled{" "}
            <a href="https://open.spotify.com/album/4Vv3UPKOYNzTRdatWmeikU?si=0zrXyZEBQ7yzHQ2ROSve1A">
              Trunk
            </a>
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
