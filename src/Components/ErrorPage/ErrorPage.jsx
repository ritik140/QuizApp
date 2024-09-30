import React from "react";
import "./errorpage.css"; // Ensure to create this CSS file

const ErrorPage = () => {
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops!</p>
        <button className="error-button" onClick={goHome}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
