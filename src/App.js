import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/calculator" element={<Wrapper />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
