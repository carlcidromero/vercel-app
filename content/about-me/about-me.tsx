import Anchor from "../../components/anchor/anchor";
import TopHeading from "../../components/top-heading/top-heading";
import { SPOTIFY_LINKS } from "../../constants/spotify-links";

interface AboutMeProps {
  onClickAnchor: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  return (
    <>
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
        <Anchor
          href={SPOTIFY_LINKS.UFC_2_OST}
          onClick={(event) => props.onClickAnchor(event)}
        >
          UFC 2
        </Anchor>
        &apos;s and{" "}
        <Anchor
          href={SPOTIFY_LINKS.CYBERPUNK_2077_OST}
          onClick={(event) => props.onClickAnchor(event)}
        >
          Cyberpunk 2077
        </Anchor>
        &apos;s original soundtracks, as well as on Sleep Steady&apos;s final,
        trailblazing effort titled{" "}
        <Anchor
          href={SPOTIFY_LINKS.TRUNK_ALBUM}
          onClick={(event) => props.onClickAnchor(event)}
        >
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
    </>
  );
};

export default AboutMe;
