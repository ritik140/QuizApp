import React, { useEffect } from "react";
import { useForm } from "../contexts/formData";
import { useNavigate } from "react-router-dom";

const FetchQuiz = () => {
  const navigate = useNavigate();
  const { data } = useForm();
  useEffect(() => {

    if (data != null) {
      // Only make the API call if all values are set
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=zl2fVySWZk7mLhyUv37NNYS3E4D6zrf39pAx5dPW&category=${data.category}&difficulty=${data.difficulty}&limit=${data.quest}`
      )
        .then((response) => response.json()) // <-- Return the JSON data
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      navigate("/quiz");
    }
  }, [data]);
  // navigate("/quiz"); // Effect will re-run when these values change

  return <div></div>;
};

export default FetchQuiz;
