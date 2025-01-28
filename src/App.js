import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.js";
import NewCharacter from "./pages/newCharacter/newCharacter.js";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/NewCharacter" element={<NewCharacter />} />
        </Routes>
      {/* </header> */}
    </div>
  );
}

export default App;
