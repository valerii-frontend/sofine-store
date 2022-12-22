import { InstagramIcon, YoutubeIcon, TwitterIcon, FaceBookIcon } from "../Icons";

import styles from "./Social.module.css";

export default function Social({ isLight }) {
  return (
    <div className={styles.icons}>
      <a href='https://www.facebook.com' target='_blank'>
        <FaceBookIcon color={isLight ? "black" : "white"} />
      </a>
      <a href='https://www.twitter.com' target='_blank'>
        <TwitterIcon color={isLight ? "black" : "white"} />
      </a>
      <a href='https://www.instagram.com' target='_blank'>
        <InstagramIcon color={isLight ? "black" : "white"} />
      </a>
      <a href='https://www.youtube.com' target='_blank'>
        <YoutubeIcon color={isLight ? "black" : "white"} />
      </a>
    </div>
  );
}
