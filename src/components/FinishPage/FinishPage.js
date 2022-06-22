import React from "react";
import MainButton from "../MainButton";
import ShareLink from "react-twitter-share-link";

import { Link } from "react-router-dom";
import leftimg1 from "../../assets/img/hooligans.png";
import rightimg1 from "../../assets/img/yakuza_5.png";
import topimg from "../../assets/img/WMC-1.png";
import twitter from "../../assets/img/twitter.png";
import { btnText } from "../utilities/translation";
import { useQuizProvider } from "../../context/context";

const FinishPage = () => {
  const { firstrole, secondrole } = useQuizProvider();
  return (
    <div className="page end-page">
      <div className="display-flex end-flex">
        <img src={topimg} alt="hooligan" />
        <h5 className="finish-title">
          CONGRATS!!! YOU ARE A <span>{firstrole.roleTitle}</span>
        </h5>
      </div>
      <span className="characteristics-title-top">Characteristics</span>
      <p>{firstrole.characteristicsWords}</p>

      <p>
        <span>{firstrole.roleTitle}</span> {firstrole.characteristics}
      </p>
      <span className="characteristics-title-top">Function</span>
      <p>
        <span>{firstrole.function}</span> {firstrole.characteristics}
      </p>
      <div className="characteristics-profile">
        <span className="characteristics-title">STRENGTHS</span>
        <span className="characteristics-content">{firstrole.strengths}</span>

        <span className="characteristics-title">ALLOWABLE WEAKNESSES </span>
        <span className="characteristics-content">{firstrole.weaknesses}</span>
      </div>

      <h5 className="second-title">
        SECONDARY ROLE: <span>{secondrole.roleTitle}</span>
      </h5>
      <p>{secondrole.characteristicsWords}</p>

      <p>
        <span>{secondrole.roleTitle}</span> {secondrole.characteristics}
      </p>
      <span className="characteristics-title-top">Function</span>
      <p>
        <span>{secondrole.function}</span> {secondrole.characteristics}
      </p>
      <div className="characteristics-profile">
        <span className="characteristics-title">STRENGTHS</span>
        <span className="characteristics-content">{secondrole.strengths}</span>

        <span className="characteristics-title">ALLOWABLE WEAKNESSES </span>
        <span className="characteristics-content">{secondrole.weaknesses}</span>
      </div>
      <div className="footer">
        <div className="footer-block">
          <div className="block-left">
            <img src={leftimg1} alt="hooligan" />
          </div>
          <div className="display-flex column">
            <div className="display-flex share-twitter">
              <img src={twitter} alt="hooligan" />
              {/* <Link to="/">
                <MainButton btnText={btnText.share} />
              </Link> */}

              <ShareLink link="https://your-site.com/some-page">
                {(link) => (
                  <a href={link} target="_blank">
                    <MainButton btnText={btnText.share} />
                  </a>
                )}
              </ShareLink>
            </div>
            <p className="conclusion-text">
              WE ASSIGNED YOU THE ROLE "{firstrole.roleTitle}" INSIDE RED CIRCLE
              MAFIA
            </p>
          </div>

          <div className="block-right">
            <img src={rightimg1} alt="hooligan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
