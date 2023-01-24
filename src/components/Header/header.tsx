import React from "react";
import logo from "../../assets/images/logo.png";
import MenuBar from "../MenuBar/menuBar";
import SheetName from "../SheetName/sheetName";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>
      <div className={styles.mainSectionContainer}>
        <SheetName />
        <MenuBar />
      </div>
    </header>
  );
};

export default Header;
