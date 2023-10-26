import React from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SearchHeader() {
  return (
    <header>
      <Link to="/">
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form>
        <input />
        <BsSearch />
      </form>
    </header>
  );
}
