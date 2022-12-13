import React, { useState } from "react";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div>
        <h3>Contact us for your sawmill needs!</h3>
        <h3>(123)-456-7890</h3>
        <h3>
          <a href="mailto:kristynerhaugen@gmail.com">
            EmailExample@example.com
          </a>
        </h3>
      </div>
    </div>
  );
}

export default App;
