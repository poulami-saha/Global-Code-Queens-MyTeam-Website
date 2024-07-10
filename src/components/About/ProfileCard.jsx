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

const ProfileCard = ({ person }) => {
  const { name, title, quote, avatar } = person;
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    setShowQuote(!showQuote);
  };

  return (
    <div className={styles.card}>
      {!showQuote ? (
        <div className={styles.avatarContainer}>
          <img src={avatar} alt={`${name}`} className={styles.avatar} />
          <Typography elType="h3" className={styles.name}>
            {name}
          </Typography>
          <Typography elType="body2" className={styles.title}>
            {title}
          </Typography>
          <Button
            elType="dark"
            className={styles.button}
            onClick={handleClick}
          >
            <CrossIcon className={styles.icon} />
          </Button>
        </div>
      ) : (
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
          <Button
            elType="dark"
            className={styles.button}
            onClick={handleClick}
          >
            <CloseIcon className={styles.closeIcon} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
