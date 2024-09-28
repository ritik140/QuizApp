import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout, QuizPage, Wrapper } from "./Components/index.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Wrapper />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
