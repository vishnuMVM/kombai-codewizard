import "./style.css";
import messages from "./messages.json";

function TableHeaderWithData({ onSortClicked, sortState }) {
  const handleSort = (field) => {
    const direction = sortState.field === field && sortState.sort === "asc" ? "desc" : "asc";
    onSortClicked({ field, sort: direction });
  };

  return (
    <thead>
      <tr className="row-item-container">
        <td className="bordered-cell" onClick={() => handleSort("MId")}>
          <p className="table-column-header-text-style">
            {messages["mid"]} {sortState.field === "MId" ? (sortState.sort === "asc" ? "▲" : "▼") : "▼"}
          </p>
        </td>
        <td className="bordered-cell" onClick={() => handleSort("FullName")}>
          <p className="table-column-header-text-style">
            {messages["FullName"]} {sortState.field === "FullName" ? (sortState.sort === "asc" ? "▲" : "▼") : "▼"}
          </p>
        </td>
        <td className="bordered-cell" onClick={() => handleSort("ContactNumber")}>
          <p className="table-column-header-text-style">
            {messages["contactNumber"]} {sortState.field === "ContactNumber" ? (sortState.sort === "asc" ? "▲" : "▼") : "▼"}
          </p>
        </td>
        <td className="bordered-cell" onClick={() => handleSort("Address")}>
          <p className="table-column-header-text-style">
            {messages["Address"]} {sortState.field === "Address" ? (sortState.sort === "asc" ? "▲" : "▼") : "▼"}
          </p>
        </td>
        <td className="action-cell">
          <p className="table-column-header-text-style">{messages["actions"]}</p>
        </td>
      </tr>
    </thead>
  );
}

export default TableHeaderWithData;
