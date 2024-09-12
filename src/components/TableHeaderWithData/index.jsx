import "./style.css";
import messages from "./messages.json";

function TableHeaderWithData() {
  return (
    <thead>
      <tr className="row-item-container">
        <td className="bordered-cell">
          <p className="table-column-header-text-style">{messages["mid"]}</p>
        </td>
        <td className="bordered-cell">
          <p className="table-column-header-text-style">{messages["FullName"]}</p>
        </td>
        <td className="bordered-cell">
          <p className="table-column-header-text-style">{messages["contactNumber"]}</p>
        </td>
        <td className="bordered-cell">
          <p className="table-column-header-text-style">{messages["Address"]}</p>
        </td>
        <td className="action-cell">
          <p className="table-column-header-text-style">{messages["actions"]}</p>
        </td>
      </tr>
    </thead>
  );
}

export default TableHeaderWithData;
