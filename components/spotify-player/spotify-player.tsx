import { useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./spotify-player.module.scss";

interface SpotifyPlayer {
  onClickClose: () => void;
  src: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayer> = (props) => {
  return (
    <div className={styles.container}>
      <iframe
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        className="rounded"
        frameBorder="0"
        height="380"
        src={props.src}
        width="100%"
      />
      <div onClick={props.onClickClose}>
        <IoMdCloseCircle />
        <span>close</span>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
