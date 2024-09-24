import React, { useState } from "react";
import "../Css/MainPage.css";

const MainPage = () => {
  const [input, setInput] = useState(10);
  const [active, setActive] = useState("");
  const [category, setCategory] = useState("Linux");

  const handelButton = (level) => {
    setActive(level);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Category:", category);
    console.log("Difficulty Level:", active);
    console.log("Number of Questions:", input);
  };

  return (
    <div className="main">
      <div className="section">
        <h1 id="title">QUIZ Time!</h1>
        <form onSubmit={formSubmit}>
          <ul className="form">
            <label className="text">Category:</label>
            <br />
            <select
              className="bar"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Linux">Linux</option>
              <option value="Bash">Bash</option>
              <option value="Docker">Docker</option>
              <option value="SQL">SQL</option>
              <option value="Code">Code</option>
            </select>
            <br />
            <label className="text">Difficulty:</label>
            <div className="btn">
              <button
                className={`bt ${active == "easy" ? "easy" : ""}`}
                type="button"
                onClick={() => handelButton("easy")}
              >
                Easy
              </button>
              <button
                className={`bt ${active == "medium" ? "medium" : ""}`}
                type="button"
                onClick={() => handelButton("medium")}
              >
                Medium
              </button>
              <button
                className={`bt ${active == "hard" ? "hard" : ""}`}
                type="button"
                onClick={() => handelButton("hard")}
              >
                Hard
              </button>
            </div>
            <label className="text">Number of Question:</label>
            <br />
            <input
              className="number_bar"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </ul>

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
