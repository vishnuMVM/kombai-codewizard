import TableHeaderWithData from "../TableHeaderWithData";
import ProductTableRenderer from "../ProductTableRenderer";
import "./style.css";

function ProductTableDisplay({ productTableRowsData }) {
  return (
    <table className="product-table-styles">
      <TableHeaderWithData />
      <ProductTableRenderer productTableRowsData={productTableRowsData} />
    </table>
  );
}

export default ProductTableDisplay;
