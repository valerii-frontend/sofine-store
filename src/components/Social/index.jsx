import facebookIcon from "../../assets/icons/fb_WHITE.svg";
import twitterIcon from "../../assets/icons/twitter_WHITE.svg";
import instagramIcon from "../../assets/icons/insta_WHITE.svg";
import youtubeIcon from "../../assets/icons/yt_WHITE.svg";

import styles from "./Social.module.css";

export default function Social() {
  return (
    <div className={styles.icons}>
      <a href='https://www.facebook.com' target='_blank'>
        <img src={facebookIcon} alt='facebook icon' />
      </a>
      <a href='https://www.twitter.com' target='_blank'>
        <img src={twitterIcon} alt='twitter icon' />
      </a>
      <a href='https://www.instagram.com' target='_blank'>
        <img src={instagramIcon} alt='instagram icon' />
      </a>
      <a href='https://www.youtube.com' target='_blank'>
        <img src={youtubeIcon} alt='youtube icon' />
      </a>
    </div>
  );
}
