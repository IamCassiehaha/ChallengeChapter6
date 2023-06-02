import React, { useState } from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/SearchResult/${searchKeyword}`);
  }

  
  const handleLogout = async () => {
    try {
      localStorage.removeItem('isLogin')
      localStorage.removeItem('token')
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar_container">
      <a href="/">
        <h1 id="judul_web">MovieList</h1>
      </a>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
          type="text"
          placeholder="What do you want to watch?"
        ></input>
        <button type="submit">
          <SearchIcon color="white" id="Search_Icon"></SearchIcon>
        </button>
      </form>
      <div className="button_navbar_all">
        <Button onClick={handleLogout}>Log Out</Button>
        {/* <Button onClick={() => navigate ('/Login')} variant="outlined" id="button_login">
          Login
        </Button>
        <Button onClick={() => navigate ('/Register')} variant="contained" id="button_register">
          Register
        </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
