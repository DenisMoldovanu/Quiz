import React from "react";
import { QuizProvider } from "./providers/QuizProvider";

export const Provider = ({ children }) => (
  <QuizProvider>{children}</QuizProvider>
);
