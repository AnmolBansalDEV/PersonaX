import React from "react";
import styles from "@/styles/Navbar.module.css";

function Nav() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbarh1}>
        Persona<span className={styles.navbarh1span}>X</span>
      </h1>
    </div>
  );
}

export default Nav;
