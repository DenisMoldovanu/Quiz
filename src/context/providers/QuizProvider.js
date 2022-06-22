import React, { useState } from "react";

export const QuizContext = React.createContext();

export const QuizProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [firstrole, setFirstRole] = useState("");
  const [secondrole, setSecondRole] = useState("");

  const getTotalById = (id) => {
    return results.reduce(
      (r, stepItem) =>
        r + (+stepItem.values.find((q) => q.id === id)?.value || 0),
      0
    );
  };

  return (
    <QuizContext.Provider
      value={{
        results,
        setResults,
        getTotalById,
        firstrole,
        setFirstRole,
        secondrole,
        setSecondRole,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
