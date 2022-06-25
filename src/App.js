import React, { useState } from "react";

// import UseMemo from "./components/useMemo";
// import UseRef from "./components/useRef";

import "./App.css";
// import ClassContext from "./components/ClassContext";
import FunctionalContext from "./components/FunctionalContext";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <div className="App">
      {/* <UseMemo /> */}
      {/* <UseRef /> */}

      <ThemeProvider>
        <FunctionalContext />
      </ThemeProvider>
    </div>
  );
}

export default App;
