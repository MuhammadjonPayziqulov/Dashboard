import { ITableHeader } from "../types"
import { ReactNode } from "react";

interface IProps {
  heads: Array<ITableHeader>;
  rows: Array<Record<string, ReactNode>>;
  onConfirm: (id: number) => void;
  onEdit: (id: string) => void;
}

export const CustomTable: React.FC<IProps> = ({ heads, rows, onConfirm, onEdit }) => {

  return (
    <table className="table_wrapper">
      <thead>
        <tr>
          {heads.map((head) => (
            <th key={head.key}
            >
              {head.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {heads.map((head) => {
              if (head.key === "action") {
                return (
                  <td key={head.key} className="list_btns">
                    <button className="edit_btn" onClick={() => onEdit(row.id as string)}>Edit</button>
                    <button className="delete_btn" onClick={() => onConfirm(Number(row.id))}>Delete</button>
                  </td>
                )
              } else {
                return (
                  <td key={head.key} style={head.style}>
                    {row[head.key]}
                  </td>
                )
              }
            }
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
