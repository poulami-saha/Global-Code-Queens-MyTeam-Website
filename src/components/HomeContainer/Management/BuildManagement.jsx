import { Typography } from "../../utility";
import Idea from "./Idea";
import styles from "./BuildManagement.module.css";
import { Ideas } from "./Ideas.js";

const BuildManagement = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.rectangle}></div>
        <div className={styles.ideas}>
          <Typography elType="h2" className={styles.header}>
            Build & manage distributed teams like no one else.
          </Typography>

          <article>
            {Ideas.map(({ id, title, description, avatar }) => {
              return (
                <Idea
                  key={id}
                  title={title}
                  description={description}
                  avatar={avatar}
                />
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default BuildManagement;
