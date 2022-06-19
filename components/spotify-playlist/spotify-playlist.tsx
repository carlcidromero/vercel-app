import styles from "./spotify-playlist.module.scss";

interface SpotifyPlaylistProps {
  height?: string;
  src: string;
  width?: string;
}

const SpotifyPlaylist: React.FC<SpotifyPlaylistProps> = (props) => {
  return (
    <div className={styles.container}>
      <iframe
        src={props.src}
        width={props.width}
        height="380"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

SpotifyPlaylist.defaultProps = { height: "380", width: "100%" };

export default SpotifyPlaylist;
