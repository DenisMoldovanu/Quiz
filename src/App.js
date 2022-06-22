import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import Header from "./components/Header";
import SecondPage from "./components/SecondPage";
import Quiz from "./components/Quiz";

import FinishPage from "./components/FinishPage/FinishPage";
import { Provider } from "./context/Provider";
function App() {
  return (
    <Provider>
      <HashRouter basename="/" hastype="slash">
        <Header />
        <div className="layout">
          <div className="container">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/second-page" element={<SecondPage />} />
              <Route path="/quiz/:step" element={<Quiz />} />
              <Route path="/end" element={<FinishPage />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
