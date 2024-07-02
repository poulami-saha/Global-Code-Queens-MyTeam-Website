import React, { FC } from "react";
import typography from "../../utility/Typography/Typography.module.css";
import styles from "./SuccessStories.module.css";

import avatar_Kady from "../../../assets/avatar-kady.jpg";
import avatar_Aisha from "../../../assets/avatar-aiysha.jpg";
import avatar_Arthur from "../../../assets/avatar-arthur.jpg";



const SuccessStory = ({ quote, name, title, avatar, altText }) => {
  return (
    <div className={styles.SuccessStories_content}>
      <p className={typography.body2}>{quote}</p>
      <h3 className={`${typography.h3} ${styles.SuccessStories_name}`}>{name}</h3>
      <p className={styles.SuccessStories_caption}>{title}</p>
      <div className={styles.SuccessStories_image}>
        <img src={avatar} alt={altText} />
      </div>
    </div>
  );
};

export const SuccessStories = () => {
  return (
    <section className={styles.SuccessStories}>
      <div className={styles.SuccessStories_wrapper}>
        <h2 className={`${typography.h2} ${styles.SuccessStories_heading}`}>
          Delivering real results for top companies. Some of our <span>success stories.</span>
        </h2>

        <article className={styles.SuccessStories_contents}>
          <SuccessStory
            quote="The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned."
            name="Kady Baker"
            title="Product Manager at Bookmark"
            avatar={avatar_Kady}
            altText="Kady Baker"
          />
          <SuccessStory
            quote="We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!"
            name="Aiysha Reese"
            title="Founder of Manage"
            avatar={avatar_Aisha}
            altText="Aiysha Reese"
          />
          <SuccessStory
            quote="Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month."
            name="Arthur Clarke"
            title="Co-founder of MyPhysio"
            avatar={avatar_Arthur}
            altText="Arthur Clarke"
          />
        </article>
      </div>
    </section>
  );
};
