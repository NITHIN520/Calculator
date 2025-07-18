import React from "react";
import ErrorBoundary from "./ErrorBoundary"; // adjust the path if needed
import MyComponents from "./MyComponents";

function Aapp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <ErrorBoundary>
        <MyComponents />
      </ErrorBoundary>
    </div>
  );
}

export default Aapp;
