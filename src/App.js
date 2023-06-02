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
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/SeeAllMovie" element={<SeeAllMovie />} />
              <Route path="/Details/:id" element={<Details />} />
              <Route path="/SearchResult/:param" element={<SearchResult />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserAuthContextProvider>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
