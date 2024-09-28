import "./mainpage.css";
import React, { useState, useEffect } from "react";
import { useForm } from "../../contexts/formData";

const MainPage = () => {
  const { setData } = useForm();

  const [category, setCategory] = useState("Linux");
  const [difficulty, setDifficulty] = useState("");
  const [quest, setQuest] = useState(10);

  const handelButton = (level) => {
    setDifficulty(level);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setData({ category, difficulty, quest });
    console.log(category, difficulty, quest);
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
                className={`bt ${difficulty == "easy" ? "easy" : ""}`}
                type="button"
                onClick={() => handelButton("easy")}
              >
                Easy
              </button>
              <button
                className={`bt ${difficulty == "medium" ? "medium" : ""}`}
                type="button"
                onClick={() => handelButton("medium")}
              >
                Medium
              </button>
              <button
                className={`bt ${difficulty == "hard" ? "hard" : ""}`}
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
              value={quest}
              onChange={(e) => setQuest(e.target.value)}
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
