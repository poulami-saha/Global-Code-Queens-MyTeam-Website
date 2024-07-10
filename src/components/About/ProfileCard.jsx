import { useState } from "react";

// styling
import styles from "./ProfileCard.module.css";

// components
import Typography from "../utility/Typography/Typography";
import Button from "../utility/Button/Button";
import { ReactComponent as CrossIcon } from "../../assets/icon-cross.svg";
import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icon-linkedin.svg";

const ProfileCard = ({ person: { name, title, quote, avatar }}) => {
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    setShowQuote((prev) => !prev);
  };

  const avatarContainer = () => (
    <div className={styles.avatarContainer}>
      <img src={avatar} alt={`${name}`} className={styles.avatar} />
      <Typography elType="h3" className={styles.name}>
        {name}
      </Typography>
      <Typography elType="body2" className={styles.title}>
        {title}
      </Typography>
    </div>
  );

  const quoteContainer = () => (
    <div className={styles.quoteContainer}>
      <Typography elType="h3" className={styles.name}>
        {name}
      </Typography>
      <Typography elType="body2" className={styles.quote}>
        {`"${quote}"`}
      </Typography>
      <div>
        <TwitterIcon className={styles.twitterIcon} />
        <LinkedinIcon className={styles.linkedinIcon} />
      </div>
    </div>
  );

  return (
    <div className={styles.card}>
      {!showQuote ? avatarContainer() : quoteContainer()}
      <Button
        elType="dark"
        className={`${styles.mainButton} ${
          showQuote ? styles.hideButton : styles.showButton
        }`}
        onClick={handleClick}
      >
        {!showQuote ? (
          <CrossIcon />
        ) : (
          <CloseIcon className={styles.closeIcon} />
        )}
      </Button>
    </div>
  );
};

export default ProfileCard;
