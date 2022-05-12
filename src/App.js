import "./App.css";
import Landing from "./components/landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bg from "./components/bg/Bg";
import PanelPresupuestar from "./components/presupuestar/PanelPresupuestar";
import CannotBeLogged from "./components/routing/CannotBeLogged";
import Layout from "./components/routing/Layout";
import RequireAuth from "./components/routing/RequireAuth";
import { AuthProvider } from "./context/AuthProvider";
import Dashboard from "./components/admin/dashboard/Dashboard";
import PanelNewEvento from "./components/admin/newEvento/PanelNewEvento";
import Login from "./components/admin/login/Login";

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
                </Route>

                {/* Public routes
                <Route path="/" element={<Landing />} />
                <Route path="/presupuestar" element={<PanelPresupuestar />} /> */}
              </Route>
            </Routes>
          </Router>
        </Bg>
      </AuthProvider>
    </div>
  );
}

export default App;
