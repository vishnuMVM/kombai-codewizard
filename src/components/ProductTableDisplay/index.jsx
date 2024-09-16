import React, { useState } from "react";
import TableHeaderWithData from "../TableHeaderWithData";
import ProductTableRenderer from "../ProductTableRenderer";
import "./style.css";

function ProductTableDisplay({productTableRowsData}) {
  const [sortBy, setSortBy] = useState({ field: 'MId', sort: 'asc' });
  const [sortState, setSortState] = useState({ MId: 'asc' });

  const handleSortClicked = (sortObj) => {
    setSortBy(sortObj);
    setSortState({ [sortObj.field]: sortObj.sort });
  };

  return (
    <table className="product-table-styles">
      <TableHeaderWithData onSortClicked={handleSortClicked} sortState={sortState} />
      <ProductTableRenderer sortBy={sortBy} productTableRowsData={productTableRowsData}/>
    </table>
  );
}

export default ProductTableDisplay;
