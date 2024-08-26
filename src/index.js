import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello from React !</h1>
}

// Since React V18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)