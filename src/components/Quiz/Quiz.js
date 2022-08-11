import React, { useState, useEffect } from "react";
import MainButton from "../MainButton";
import { useNavigate } from "react-router-dom";
import { tests, teamRoles } from "../../Tests";
import { useQuizProvider } from "../../context/context";
import { useParams } from "react-router-dom";
import { btnText } from "../utilities/translation";

const Quiz = () => {
  const navigate = useNavigate();
  let params = useParams();
  const { step } = params;
  let countPage = 1;

  const { results, setResults, getTotalById, setFirstRole, setSecondRole } =
    useQuizProvider();
  const [error, setError] = useState("");
  const [stepResults, setStepResults] = useState(
    results.find((q) => q.step === step)?.values || []
  );

  useEffect(() => {
    if (step !== 1) navigate("/quiz/1");
  }, []);

  useEffect(() => {
    setStepResults(results.find((q) => q.step === step)?.values || []);
    setFirstRole(
      teamRoles.find((q) => q.id === questionWithMaxTotal[0].id)?.teamRole || []
    );
    setSecondRole(
      teamRoles.find(
        (q) =>
          q.id === questionWithMaxTotal[1].id &&
          questionWithMaxTotal[1].total > 0
      )?.teamRole || []
    );
  }, [step]);

  const handleChange = (checked, id, value = "") => {
    if (checked) {
      setStepResults([
        ...stepResults.filter((q) => q.id !== id),
        ...[{ id, value }],
      ]);
    } else {
      setStepResults(stepResults.filter((q) => q.id !== id));
    }
  };

  const handlePage = (e) => {
    let pageNumber = parseInt(e.target.innerHTML);

    if (pageNumber < step) {
      navigate("/quiz/" + pageNumber);
    }
  };

  const totalpoints = Object.values(stepResults).reduce(
    (r, { value }) => r + parseInt(value),
    0
  );

  const onSubmit = () => {
    countPage = +step + countPage;

    if (stepResults.find((q) => +q.value === 0 || +q.value <= 0 || !q.value)) {
      setError("YOU MUST ALLOCATE ALL 10 POINTS IN EACH SECTION");

      return;
    }
    if (totalpoints < 10) {
      setError("YOU MUST ALLOCATE ALL 10 POINTS IN EACH SECTION");
      return;
    } else if (totalpoints > 10) {
      setError("PLEASE SET MAX TOTAL OF 10 POINTS");
      return;
    } else {
      if (countPage > 7) {
        navigate("/end");
      } else {
        navigate("/quiz/" + countPage);
      }
      setError("");
    }
    setResults([
      ...results.filter((q) => q.step !== step),
      ...[
        {
          step: step,
          values: stepResults,
        },
      ],
    ]);
  };

  const questions = tests.find((q) => q.step === +step)?.questions;
  const title = tests.find((q) => q.step === +step)?.mainTitle;

  const resultsTotals = [1, 2, 3, 4, 5, 6, 7, 8].map((id) => ({
    id,
    total: getTotalById(id),
  }));

  const maxTotal = Math.max(...resultsTotals.map((o) => +o.total));

  const secondMax = function () {
    const arr = [...resultsTotals.map((o) => +o.total)]; // use int arrays
    const max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
  };
  const secondMaxTotal = secondMax();

  const questionWithMaxTotal = [
    ...resultsTotals.filter((q) => +q.total === +maxTotal),
    ...resultsTotals.filter((q) => +q.total === +secondMaxTotal),
  ];

  return (
    <div className="page">
      <h4>{title}</h4>

      <div className="tabel-test">
        <ul>
          {questions?.map((post, key) => (
            <div key={key} className="question-line">
              <div className="checkbox">
                <input
                  // disabled
                  onChange={(e) => handleChange(e.target.checked, post.id, 0)}
                  type="checkbox"
                  checked={
                    stepResults.find((q) => q.id === post.id) ? true : false
                  }
                  disabled={
                    stepResults.length === 3 &&
                    !stepResults.find((q) => q.id === post.id)
                      ? true
                      : false
                  }
                  className="checkbox-input"
                ></input>
                <span className="checkmark"></span>
              </div>
              <li>{post.title}</li>
              <div className="number-input">
                <input
                  id="points"
                  maxLength={stepResults.length === 1 ? "2" : "1"}
                  type="text"
                  value={
                    stepResults.find((q) => q.id === post.id)
                      ? stepResults.find((q) => q.id === post.id).value
                      : ""
                  }
                  disabled={
                    stepResults.find((q) => q.id === post.id) ? false : true
                  }
                  onChange={(e) => handleChange(true, post.id, e.target.value)}
                  onFocus={() => {
                    if (stepResults.find((q) => q.id === post.id).value == 0) {
                      handleChange(true, post.id, "");
                    }
                  }}
                  onBlur={() => {
                    if (stepResults.find((q) => q.id === post.id).value == "") {
                      handleChange(true, post.id, 0);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </ul>
        <div className="error">{error}</div>
      </div>
      <div className="footer">
        <div className="footer-block">
          <div className="block-left">
            {tests.map((quiz) => (
              <span
                onClick={handlePage}
                key={quiz.step}
                className={+quiz.step <= step ? "active-page" : ""}
              >
                {quiz.step}
              </span>
            ))}
          </div>
          <div>
            <MainButton btnText={btnText.next} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
