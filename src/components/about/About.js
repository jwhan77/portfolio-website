import React from "react";

import snsData from "../sns/sns.json";

import aboutImg from "./aboutme.svg";

import "./About.css";

const About = () => {
  const snsArr = snsData.snsArr;

  return (
    <div className="about-me">
      <div className="about-images">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-text">
        <div className="name">Jungwon Han</div>
        <div className="txt">
          <div className="txt-1">Lorem ipsum dolor sit</div>
          <div className="txt-2">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="about-sns">
          {snsArr.map(
            (sns) =>
              sns.visible && (
                <a href={sns.url} key={sns.id} target="_blank" rel="noreferrer">
                  <div className="sns-oval">
                    <img src={sns.iconUrl} alt={sns.name} />
                  </div>
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
