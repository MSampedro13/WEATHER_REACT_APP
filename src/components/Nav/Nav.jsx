import React from "react";
import Logo from "./img/clima.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import s from "../Nav/Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={s.nav}>
      <section>
        <Link to="/">
          <span className={s.title}>
            <img className={s.logo} src={Logo} alt="" />
            Listado de ciudades
          </span>
        </Link>
      </section>
      <section className={s.searchBar}>
        <SearchBar onSearch={onSearch} />
      </section>
    </nav>
  );
}

export default Nav;
