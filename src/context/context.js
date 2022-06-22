import React, { useContext } from "react";
import { QuizContext } from "./providers/QuizProvider";

export const useQuizProvider = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuizProvider must be used within a QuizProvider");
  }
  return context;
};
