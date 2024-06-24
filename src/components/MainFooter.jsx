import React from "react";
import MainFooterStyle from "../All_FooterStyles/MainFooterStyle.module.css";
import FooterImage from "../assets/bg-pattern-home-6-about-5.svg";

function MainFooter() {
  return (
    <div className={MainFooterStyle.footerHero}>
      <img src={FooterImage} alt="bg-home-6" />

      <div>
        <h1>Ready to get started?</h1>
      </div>
      <div className={MainFooterStyle.btn}>
        <button>contact us</button>
      </div>
    </div>
  );
}

export default MainFooter;
