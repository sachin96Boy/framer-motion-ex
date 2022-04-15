import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Model from "./pages/Model";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home imageDetail={imageDetails} />} />
        <Route
          path="/model/:id"
          element={<Model imageDetail={imageDetails} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
