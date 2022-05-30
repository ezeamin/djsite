import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bg from "./components/bg/Bg";
import CannotBeLogged from "./components/routing/CannotBeLogged";
import Layout from "./components/routing/Layout";
import RequireAuth from "./components/routing/RequireAuth";
import { AuthProvider } from "./context/AuthProvider";
import Dashboard from "./components/admin/dashboard/Dashboard";
import PanelNewEvento from "./components/admin/newEvento/PanelNewEvento";
import Login from "./components/admin/login/Login";
import PanelFechaOcupada from "./components/admin/newFechaOcupada/PanelFechaOcupada";

//ola

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Bg>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Auth routes */}
                <Route element={<CannotBeLogged />}>
                  <Route path="/login" element={<Login />} />
                </Route>

                <Route element={<RequireAuth />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/evento" element={<PanelNewEvento />} />
                  <Route path="/evento/:id/:id2" element={<PanelNewEvento edit/>} />
                  <Route path="/fechaocupada" element={<PanelFechaOcupada />} />
                  <Route path="/fechaocupada/:id/:id2" element={<PanelFechaOcupada edit/>} />
                </Route> 
              </Route>
            </Routes>
          </Router>
        </Bg>
      </AuthProvider>
    </div>
  );
}

export default App;
