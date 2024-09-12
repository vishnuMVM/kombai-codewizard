import ProductTableDisplaySection from "../ProductTableDisplaySection";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";
import messages from "./messages.json";

function ProductDisplaySection({ productTableRowsData }) {
  return (
    <div className="table-screen-container">
      <div className="table-screen-container3">
        <p className="table-heading-style">{messages["table_screen"]}</p>
        <div className="table-screen-container2">
          <SvgIcon1 className="svg-container" />
          <SvgIcon2 className="svg-container" />
          <SvgIcon3 className="svg-container" />
        </div>
      </div>
      <ProductTableDisplaySection productTableRowsData={productTableRowsData} />
    </div>
  );
}

export default ProductDisplaySection;
