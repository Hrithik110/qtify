import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import Search from "../Search/Search";
import styles from "./navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button text='Give Feedback'></Button>
    </nav>
  );
}

export default Navbar;
