import React from "react";
import styles from "./Table.module.css";
import User from "../../models/User";

/**
 *  Interface of table column element
 */
export interface TableColumnElement {
  /** key of rendered element in cell */
  key: string;
  /** render function to display cell by key */
  render: (arg0: any, arg1: any) => string;
  /** width of column */
  width?: string;
}

interface TableComponentProps {
  /** array of string for build row */
  headerRow: string[],
  /** data to display */
  data: Array<any>,
  /** array of table column elements */
  columnsRow: TableColumnElement[],
  /** click handler */
  onClick: (arg0: User) => void,
}

/**
 * Table component
 *
 * P.S. I know, that in real project i would probably choose ready for prod solution like react table or something,
 * but i was thinking that not showing my coding skill if i choose ready solution. I tried make fast solution for simple table render
 * It's far from ideal but it works ;)
 *
 * TODO (Jakuba): Adjust specific connect table with User into entity and pass entity type to props for reuse
 *
 * @param data- Component receive any data as props and displays it in table body
 * @param headerRow - array of string for header row
 * @param columnsRow - array of table column which consist of key and render function for cell
 * @param onClick - some click handler
 */
export const TableComponent = ({
  data,
  headerRow,
  columnsRow,
  onClick,
}: TableComponentProps ) => {
  const onRowClick = (user: User) => {
    onClick(user);
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headerRow.map((headerCol: string) => (
            <th key={headerCol}>
              {headerCol}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
      {data.map((user: User, index) => (
        <tr key={`${user.fullName}-${index}`} onClick={() => onRowClick(user)}>
          {columnsRow.map((column, index) => (
            <td key={`${column.key}-${index}`} style={{width: column.width || 'inherit'}}>
              {column.render(user, column.key)}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export const Table = React.memo(TableComponent);
