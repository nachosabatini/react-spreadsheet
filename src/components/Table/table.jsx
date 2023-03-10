import { useState, useCallback, Fragment } from "react";
import styles from "./Table.module.css";
import Cell from "../Cell/cell";

const getColumnName = (index) =>
  String.fromCharCode("A".charCodeAt(0) + index - 1);

export const Table = ({ numberOfColumns, numberOfRows }) => {
  const [tableData, setTableData] = useState({});

  const setCellValue = useCallback(
    ({ row, column, value }) => {
      const newData = { ...tableData };
      newData[`${column}${row}`] = value;
      setTableData(newData);
    },
    [tableData, setTableData]
  );

  const computeCell = useCallback(
    ({ row, column }) => {
      const cellContent = tableData[`${column}${row}`];

      if (cellContent) {
        if (cellContent.charAt(0) === "=") {
          // This regex converts = "A1+A2" to ["A1","+","A2"]
          const expression = cellContent.substr(1).split(/([+*-/])/g);
          let substitutedExpression = "";

          expression.forEach((item) => {
            // Regex to test if it is of form alphabet followed by number ex: A1
            if (/^[A-z][0-9]+$/g.test(item || "")) {
              substitutedExpression +=
                tableData[(item || "").toUpperCase()] || 0;
            } else {
              substitutedExpression += item;
            }
          });

          try {
            const formulaPattern =
              /^=([A-Z]+)([0-9]+)([+*-/])([A-Z]+)([0-9]+)$/;
            const formulaMatch = cellContent.match(formulaPattern);

            //This validation is to check if the formula is of the form A1+A2
            //And prevent eval from executing any other formula like =alert(1)
            if (formulaMatch) {
              return eval(substitutedExpression);
            } else {
              return "ERROR!";
            }
          } catch (error) {
            return "ERROR!";
          }
        }
        return cellContent;
      }
      return "";
    },
    [tableData]
  );

  return (
    <div className={styles.table}>
      {Array(numberOfRows)
        .fill()
        .map((m, i) => {
          return (
            <Fragment key={i}>
              {Array(numberOfColumns)
                .fill()
                .map((m, j) => {
                  const columnName = getColumnName(j);
                  return (
                    <Cell
                      key={`${columnName}${i}`}
                      rowIndex={i}
                      columnIndex={j}
                      setCellValue={setCellValue}
                      currentCellValue={tableData[`${columnName}${i}`]}
                      computeCell={computeCell}
                      columnName={columnName}
                    />
                  );
                })}
            </Fragment>
          );
        })}
    </div>
  );
};
