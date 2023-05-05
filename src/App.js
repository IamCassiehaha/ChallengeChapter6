import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeeAllMovie from "./pages/SeeAllMovie";
import NotFound from "./components/NotFound";
import Details from "./pages/Details";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserAuthContextProvider } from "./handleUser/UserAuth";

function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/SeeAllMovie" element={<SeeAllMovie />} />
            <Route path="/Details/:id" element={<Details />} />
            <Route path="/SearchResult" element={<SearchResult />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
