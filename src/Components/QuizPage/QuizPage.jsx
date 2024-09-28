import React, { useState } from "react";
import "./quizpage.css";
const QuizPage = () => {
  const [score, setScore] = useState(0);
  const [option, setOption] = useState("");
  const handelOption = (option) => {
    setOption(option);
  };
  return (
    <div className="mainp">
      <div className="sectionp">
        <h1 className="heading">Question:</h1>
        <div>
          <h1 className="quest">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            molestiae consequuntur, repudiandae veritatis reprehenderit unde,
            hic sed laboriosam praesentium beatae necessitatibus, aut at.
            Veniam, vero animi ipsam aliquam quisquam eveniet.
          </h1>
        </div>
        <div className="options">
          <div className="op">
            <button
              className={`btnp ${option == 1 ? "one" : ""}`}
              type="button"
              onClick={() => handelOption(1)}
            >
              Option1
            </button>
            <button
              className="btnp"
              type="button"
              onClick={() => handelOption(2)}
            >
              Option2
            </button>
          </div>
          <div className="op">
            <button
              className="btnp"
              type="button"
              onClick={() => handelOption(3)}
            >
              option3
            </button>
            <button
              className="btnp"
              type="button"
              onClick={() => handelOption(4)}
            >
              option 4
            </button>
          </div>
        </div>
        <div>
          <h1>score:{score}</h1>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
