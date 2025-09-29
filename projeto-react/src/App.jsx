import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./paginas/Home";

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
