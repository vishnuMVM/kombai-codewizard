import ProductTableDisplay from "../ProductTableDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";
import messages from "./messages.json";

function ProductTableDisplaySection({ productTableRowsData }) {
  return (
    <div className="product-table-container">
      <ProductTableDisplay productTableRowsData={productTableRowsData} />
      <div className="row-summary-widget">
        <div className="row-counter-container1">
          <p className="row-description-text-style">{messages["5_rows"]}</p>
          <SvgIcon1 className="svg-container3" />
        </div>
        <div className="row-counter-container">
          <SvgIcon2 className="svg-container3" />
          <div className="result-info-bar">
            <SvgIcon3 className="svg-container4" />
            <p className="status-text">1 - 5 of 5</p>
          </div>
          <SvgIcon4 className="svg-container3" />
          <SvgIcon5 className="svg-container3" />
        </div>
      </div>
    </div>
  );
}

export default ProductTableDisplaySection;
