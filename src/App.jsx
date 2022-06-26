import "./styles/App.css";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chardetails from "./pages/Chardetails";
import Seasons from "./pages/Seasons";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="characters/:_id" element={<Chardetails />} />
          <Route exact path="/theoffice" element={<Home />} />
          <Route path="/seasons" element={<Seasons />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
