import React, { useState } from "react";
import "../Css/MainPage.css";

const MainPage = () => {
  const [input, setInput] = useState(10);
  return (
    <div className="main">
      <div className="section">
        <h1 id="title">QUIZ Time!</h1>
        <form action="">
          <ul className="form">
            <label className="text">Category:</label>
            <br />
            <select className="bar">
              <option value="Linux">Linux</option>
              <option value="Bash">Bash</option>
              <option value="Docker">Docker</option>
              <option value="SQL">SQL</option>
              <option value="Code">Code</option>
            </select>
            <br />
            <label className="text">Difficulty:</label>
            <div className="btn">
              <button className="bt">Easy</button>
              <button className="bt">Medium</button>
              <button className="bt">Hard</button>
            </div>
            <label className="text">Number of Question:</label>
            <br />
            <input className="number_bar"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </ul>

          <button className="submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
