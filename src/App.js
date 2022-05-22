import "./App.css";
import Landing from "./components/landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bg from "./components/bg/Bg";
import PanelPresupuestar from "./components/presupuestar/PanelPresupuestar";
import PanelFechas from "./components/fechas/PanelFechas";

function App() {
  return (
    <div className="App">
      <Bg>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/presupuestar" element={<PanelPresupuestar />} />
            <Route path="/fechas" element={<PanelFechas />} />
          </Routes>
        </Router>
      </Bg>
    </div>
  );
}

export default App;
