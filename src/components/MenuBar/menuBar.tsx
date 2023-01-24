import React from "react";
import styles from "./MenuBar.module.css";

const menuLabels = [
  "File",
  "Edit",
  "View",
  "Insert",
  "Format",
  "Data",
  "Tools",
  "Help",
];

const MenuBar = () => {
  return (
    <div className={styles.menuBarContainer}>
      {menuLabels.map((label, i) => {
        return (
          <div className={styles.menuItem} key={i}>
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default MenuBar;
