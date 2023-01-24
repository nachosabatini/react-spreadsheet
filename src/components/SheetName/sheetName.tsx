import React from "react";
import styles from "./SheetName.module.css";

const SheetName = () => {
  const [sheetName, setSheetName] = React.useState<string>();

  const handleChange = (event: any) => {
    setSheetName(event.target.value);
  };

  return (
    <input
      type="text"
      className={styles.sheetNameInput}
      value={sheetName}
      onChange={handleChange}
      placeholder="Untitled spreadsheet"
    />
  );
};

export default SheetName;
