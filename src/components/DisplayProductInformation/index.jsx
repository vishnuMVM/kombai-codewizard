import ProductDisplaySection from "../ProductDisplaySection";
import "./style.css";
import messages from "./messages.json";

function DisplayProductInformation({ productTableRowsData }) {
  return (
    <div className="table-screen-container1">
      <ProductDisplaySection productTableRowsData={productTableRowsData} />
      <p className="reference-application-label">{messages["viewing_reference_application"]}</p>
    </div>
  );
}

export default DisplayProductInformation;
