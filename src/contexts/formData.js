import { createContext, useContext } from "react";

export const FormContext = createContext();

//FormProvider
export const FormProvider = FormContext.Provider;
//Use the context
export const useForm = () => {
  return useContext(FormContext);
};
