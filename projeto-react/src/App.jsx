import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./paginas/Home";
import ListaTarefas from "./paginas/ListaTarefas";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lista">Lista de Tarefas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lista" element={<ListaTarefas />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
