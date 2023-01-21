import React, { useCallback, useState, memo, useMemo } from "react";
import Header from "../Header/header";
import styles from "./Cell.module.css";

type Props = {
  rowIndex: number;
  columnIndex: number;
  columnName: string;
  setCellValue: any;
  computeCell: any;
  currentCellValue: string;
};

const Cell = ({
  rowIndex,
  columnIndex,
  columnName,
  setCellValue,
  computeCell,
  currentCellValue,
}: Props) => {
  const [edit, setEdit] = useState(false);

  const value = useMemo(() => {
    if (edit) {
      return currentCellValue || "";
    }
    return computeCell({ row: rowIndex, column: columnName });
  }, [edit, currentCellValue, rowIndex, columnName, computeCell]);

  const handleChange = useCallback(
    (event: any) => {
      setCellValue({
        row: rowIndex,
        column: columnName,
        value: event.target.value,
      });
    },
    [setCellValue, rowIndex, columnName]
  );

  if (columnIndex === 0 && rowIndex === 0) {
    return <Header />;
  }

  if (columnIndex === 0) {
    return <Header>{rowIndex}</Header>;
  }

  if (rowIndex === 0) {
    return <Header>{columnName}</Header>;
  }
  return (
    <input
      className={styles.cell}
      onBlur={() => setEdit(false)}
      onFocus={() => setEdit(true)}
      value={value}
      type="text"
      onChange={handleChange}
    />
  );
};

export default memo(Cell);
