import { useState } from "react";

// styling
import styles from "./ProfileCard.module.css";
import Typography from "../utility/Typography/Typography";

// images
import crossImg from "../../assets/icon-cross.svg";
import closeImg from "../../assets/icon-close.svg";
import twitterImg from "../../assets/icon-twitter.svg";
import linkedinImg from "../../assets/icon-linkedin.svg";

const ProfileCard = ({ person }) => {
  const { name, title, quote, avatar } = person;
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    setShowQuote(!showQuote);
  };

  return (
    <div>
      <div className={styles.container}>
        {!showQuote ? (
          <>
            <img src={avatar} alt={`${name}`} className={styles.avatar} />
            <Typography elType="h3" className={styles.name}>
              {name}
            </Typography>
            <Typography elType="body2" className={styles.title}>
              {title}
            </Typography>
            <button className={styles.button} id="show" onClick={handleClick}>
              <img src={crossImg} alt="show-quote" className={styles.icon} />
            </button>
          </>
        ) : (
          <>
            <Typography elType="h3" className={styles.name}>
              {name}
            </Typography>
            <Typography elType="body2" className={styles.quote}>
              {`"${quote}"`}
            </Typography>
            <div>
              <img src={twitterImg} alt="Twitter" className={styles.twitter} />
              <img
                src={linkedinImg}
                alt="LinkedIn"
                className={styles.linkedin}
              />
            </div>
            <button className={styles.button} id="close" onClick={handleClick}>
              <img src={closeImg} alt="hide-quote" className={styles.icon} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
