import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuaryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false)
      }, 1000);
    }
  };
const openSearch = ()=>{
  setMobileMenu(false)
  setShowSearch(true)
}

const openMobileMenu = () =>{
  setMobileMenu(true)
  setShowSearch(false)
}

  return (
    <header className={`header ${mobileMenu?"mobileView":""}`}>
      <ContentWrapper>
        <div className="log">
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movie</li>
          <li className="menuItem">Tv shows</li>
          <li className="menuItem">
            <HiOutlineSearch />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch}/>
          {mobileMenu ? <VscChromeClose onClick={()=>setMobileMenu(false)}/> : <SlMenu onClick={openMobileMenu}/>}
        </div>
      </ContentWrapper>
     {showSearch && <div className="searchBar">
        <ContentWrapper>
        <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search movies and tv shows"
                  onKeyUp={searchQuaryHandler}
                  onClick={(e) => setQuery(e.target.value)}
                />
                <VscChromeClose onClick={()=>setShowSearch(false)}/>
              </div>
        </ContentWrapper>
      </div>}
    </header>
  );
};

export default Header;
