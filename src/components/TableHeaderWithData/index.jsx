import "./style.css";
import messages from "./messages.json";

function TableHeaderWithData() {
  return (
    <thead>
      <tr className="row-item-container">
        <td className="table-cell-header">
          <p className="table-column-header-text-style">Id</p>
        </td>
        <td className="bordered-cell">
          <p className="table-column-header-text-style">{messages["name"]}</p>
        </td>
        <td className="bordered-cell">
          <p className="table-column-header-text-style">{messages["description"]}</p>
        </td>
        <td className="bordered-cell">
          <p className="table-column-header-text-style">{messages["type"]}</p>
        </td>
        <td className="action-cell">
          <p className="table-column-header-text-style">{messages["actions"]}</p>
        </td>
      </tr>
    </thead>
  );
}

export default TableHeaderWithData;
