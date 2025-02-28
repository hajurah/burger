// import React from "./react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure this is imported first
import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Feedback from "./Component/Feedback";

// import Footar from "./component/Footar";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Feedback />
    </>
  );
}

export default App;
