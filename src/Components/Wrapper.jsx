import React, { useEffect, useState } from "react";
import { FormProvider } from "../contexts/formData";
import MainPage from "./MainPage/MainPage";
import FetchQuiz from "./FetchQuiz";

const Wrapper = () => {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <FormProvider
      value={{
        data,
        setData,
      }}
    >
      <MainPage />
      <FetchQuiz />
    </FormProvider>
  );
};

export default Wrapper;
