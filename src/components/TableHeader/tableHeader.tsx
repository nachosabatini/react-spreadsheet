import React from "react";
import styles from "./TableHeader.module.css";

type Props = {
  children?: React.ReactNode;
};

const TableHeader = ({ children }: Props) => {
  return <div className={styles.header}>{children}</div>;
};

export default TableHeader;
