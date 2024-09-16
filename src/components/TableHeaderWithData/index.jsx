import "./style.css";
import messages from "./messages.json";

function TableHeaderWithData({ onSortClicked, sortState }) {
  const handleSort = (field) => {
    const direction = sortState[field] === "asc" ? "desc" : "asc";
    onSortClicked({ field, sort: direction });
  };

  return (
    <thead>
      <tr className="row-item-container">
        <td className="bordered-cell" onClick={() => handleSort("MId")}>
          <p className="table-column-header-text-style">
            {messages["mid"]} {sortState.MId === "asc" ? "▲" : "▼"}
          </p>
        </td>
        <td className="bordered-cell" onClick={() => handleSort("FullName")}>
          <p className="table-column-header-text-style">
            {messages["FullName"]} {sortState.FullName === "asc" ? "▲" : "▼"}
          </p>
        </td>
        <td className="bordered-cell" onClick={() => handleSort("ContactNumber")}>
          <p className="table-column-header-text-style">
            {messages["contactNumber"]} {sortState.ContactNumber === "asc" ? "▲" : "▼"}
          </p>
        </td>
        <td className="bordered-cell" onClick={() => handleSort("Address")}>
          <p className="table-column-header-text-style">
            {messages["Address"]} {sortState.Address === "asc" ? "▲" : "▼"}
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
