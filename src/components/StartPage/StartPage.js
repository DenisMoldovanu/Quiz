import React from "react";
import MainButton from "../MainButton";

import { Link } from "react-router-dom";
import leftimg1 from "../../assets/img/WMC.png";
import rightimg1 from "../../assets/img/hooligans_2.png";
import { btnText } from "../utilities/translation";

const StartPage = () => {
  return (
    <div className="page">
      <h5>DAO MEMBERS ROLE QUESTIONNAIRE</h5>
      <p>
        IN ORDER TO FUNCTION AT FULL CAPACITY AND TO BENEFIT FROM EACH MEMBER’S
        ABILITIES, RED CIRCLE MAFIA, LIKE ANY OTHER DAO, NEEDS ITS MEMBERS TO
        MAKE FULL USE OF THE ABILITIES THEY POSSESS
      </p>
      <p>
        WE, PEOPLE WHO KNOW HOW TO BRING OUT THE BEST OUT OF PEOPLE, HAVE
        CREATED THIS TEST. BY COMPLETING IT, YOU WILL FIND OUT WHAT ROLE YOU FIT
        IN THE DAO YOU BELONG TO. AND YOU WILL AUTOMATICALLY BE GIVEN THE ROLE
        ON THE SERVER.
      </p>
      <div className="footer">
        <div className="footer-block">
          <div className="block-left">
            <img src={leftimg1} alt="hooligan" />
          </div>
          <Link to="/second-page">
            <MainButton btnText={btnText.firstTitle} />
          </Link>
          <div className="block-right">
            <img src={rightimg1} alt="hooligan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
