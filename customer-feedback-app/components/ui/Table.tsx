import React from "react";

type TableProps = {
  columns: string[];
  data: Record<string, any>[];
  className?: string;
};

const Table: React.FC<TableProps> = ({ columns, data, className = "" }) => {
  return (
    <table
      className={`w-full border-collapse border border-gray-300 ${className}`}
    >
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              className="border border-gray-300 px-4 py-2 bg-gray-100"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="odd:bg-gray-50 even:bg-white">
            {columns.map((column) => (
              <td key={column} className="border border-gray-300 px-4 py-2">
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
