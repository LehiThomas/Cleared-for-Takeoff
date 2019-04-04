import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
// import { adService } from "./services/AdService";
import "./index.css";
import App from "./App";

const startApp = () => {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById("root")
  );
};

if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      // adService.setAdMob(window.AdMob);
      startApp();
    },
    false
  );
} else {
  startApp();
}
