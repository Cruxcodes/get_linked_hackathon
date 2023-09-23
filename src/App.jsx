// import { useState } from "react";
import "./App.css";
import "./styles/styles.css";
// import Accordion from "./LandingPage/Accordion";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./LandingPage/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
