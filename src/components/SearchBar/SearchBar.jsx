import React, { useState } from "react";
import s from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { FaAlignJustify } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      className={s.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <FaAlignJustify className={s.icon} />
      <input
        className={s.input}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={s.submit} type="submit">
        <BsSearch />
      </button>
    </form>
  );
}
