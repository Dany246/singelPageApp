import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { InstrumentListPage } from "./components/InstrumentListPage";
import { InstrumentSinglePage } from "./components/InstrumentSinglePage";
// import { InstrumentListPage } from "./InstrumentListPage";

import  InstrumentCreatePage  from "./components/InstrumentCreatePage";
import InstrumentUpdate from "./components/InstrumentUpdate";
function App() {
  
  return (
    <>
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>
                <span className="nav-link">Hangszerek</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/uj-hangszer`} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                <span className="nav-link">Új hangszer</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        {/* <Route path="/" element="Hangszer listaoldal" /> */}
        <Route path="/" element={<InstrumentListPage />} />
        { <Route path="/hangszer/:hangszerId" element={<InstrumentSinglePage />} />}
        {<Route path="/uj-hangszer" element={<InstrumentCreatePage />} />}
        <Route path="/modosit/:hangszerId" element={<InstrumentUpdate/>} />
      
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
