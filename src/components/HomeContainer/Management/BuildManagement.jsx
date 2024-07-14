import Typography from "../../utility/Typography/Typography";
import Idea from "./Idea";
import styles from "./BuildManagement.module.css";
import { Ideas } from "./Ideas.ts";

const BuildManagement = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.rectangle}></div>
        <div className={styles.ideas}>
          <Typography elType="h2" className={styles.header}>
            Build & manage distributed teams like no one else.
          </Typography>

          <div>
            {Ideas.map(({ id, title, description, avatar, altText }) => {
              return (
                <Idea
                  key={id}
                  title={title}
                  description={description}
                  avatar={avatar}
                  altText={altText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildManagement;
