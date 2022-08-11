import React from "react";
import MainButton from "../MainButton";

import { Link } from "react-router-dom";
import leftimg2 from "../../assets/img/yakuza_2.png";
import rightimg2 from "../../assets/img/hooligans_4.png";
import { btnText } from "../utilities/translation";

const SecondPage = () => {
  return (
    <div>
      <div className="page">
        <h5>RED CIRCLE MAFIA DAO ROLES INVENTORY</h5>
        <p>
          TO COMPLETE EACH SECTION OF THIS QUESTIONNAIRE, TICK IN THE FAR LEFT
          HAND COLUMN THE ONE, TWO OR THREE SENTENCES MOST APPLICABLE TO
          YOURSELF. THEN IN THE COLUMN ON THE RIGHT, APPORTION 10 POINTS BETWEEN
          THOSE SENTENCES THAT APPLY TO YOU: ONE OF WHICH YOU FEEL SUMS YOU UP
          WELL WHILE THE OTHER ONLY APPLIES SOME OF THE TIME.
        </p>
        <p>
          IN THIS INSTANCE YOU COULD GIVE YOUR FIRST CHOICE SEVEN POINTS AND THE
          REMAINING POINTS TO YOUR SECOND CHOICE. IN SOME INSTANCES YOU MIGHT
          DECIDE THAT THERE ARE TWO SENTENCES THAT APPLY TO YOU EQUALLY - IF
          THIS IS THE CASE, AWARD FIVE POINTS TO EACH.
        </p>
      </div>
      <div className="footer">
        <div className="footer-block">
          <div className="block-left">
            <img src={leftimg2} alt="hooligan" />
          </div>
          <Link to="/quiz/1">
            <MainButton btnText={btnText.secondTitle} />
          </Link>
          <div className="block-right">
            <img src={rightimg2} alt="hooligan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
