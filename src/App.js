import "./App.css";
import Create from "./components/create";
import Delete from "./components/delete";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="main">
       
        <div>
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/update" element={<Update />} />
            <Route exact path="/delete" element={<Delete />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
