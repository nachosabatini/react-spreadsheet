import React from "react";
import styles from "./Header.module.css";

type Props = {
  children?: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return <div className={styles.header}>{children}</div>;
};

export default Header;
