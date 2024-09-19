import React, { useState } from "react";
import TableHeaderWithData from "../TableHeaderWithData";
import ProductTableRenderer from "../ProductTableRenderer";
import "./style.css";

function ProductTableDisplay({productTableRowsData,pageInfo}) {
  const [sortBy, setSortBy] = useState({ field: null, sort: "desc" });
 

  const handleSortClicked = (sortObj) => {
    setSortBy(sortObj);
  };

  return (
    <table className="product-table-styles">
      <TableHeaderWithData onSortClicked={handleSortClicked} sortState={sortBy} />
      <ProductTableRenderer sortBy={sortBy} productTableRowsData={productTableRowsData} pageInfo={pageInfo} />
    </table>
  );
}

export default ProductTableDisplay;
