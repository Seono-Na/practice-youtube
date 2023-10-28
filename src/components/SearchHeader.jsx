import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  return (
    <div>
      <Link to="/">
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form>
        <input />
        <BsSearch />
      </form>
    </div>
  );
}
