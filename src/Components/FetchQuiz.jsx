import React, { useEffect, useState } from "react";
import { useForm } from "../contexts/formData";
import { useNavigate } from "react-router-dom";

const FetchQuiz = () => {
  const navigate = useNavigate();
  const { data } = useForm();
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (data != null) {
      // Only make the API call if all values are set
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=zl2fVySWZk7mLhyUv37NNYS3E4D6zrf39pAx5dPW&category=${data.category}&difficulty=${data.difficulty}&limit=${data.quest}`
      )
        .then((response) => response.json()) // <-- Return the JSON data
        .then((fetchedData) => {
          const formattedData = fetchedData.map((item) => ({
            question: item.question,
            options: item.answers,
            correctAns: item.correct_answers,
          }));
          setValue(formattedData); // Set the quiz data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          navigate("/error-page");
        });
    }
  }, [data]);

  useEffect(() => {
    if (value) {
      // console.log(value);
      navigate("/quiz", { state: { value } });
    }
  }, [value, navigate]);
};

export default FetchQuiz;
