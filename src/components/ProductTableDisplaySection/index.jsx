import ProductTableDisplay from "../ProductTableDisplay";
import { useState, useEffect } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";
import { GetManagersCount } from '../../services/service'; 

function ProductTableDisplaySection({ productTableRowsData }) {
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 5 }); 
  const [totalRows, setTotalRows] = useState(0); 

  useEffect(() => {
    GetManagersCount().then((response) => {
      if (response.status) {
        setTotalRows(response.values); 
      }
    });
  }, []);


  const handlePageChange = (direction) => {
    const totalPages = Math.ceil(totalRows / pageInfo.pageSize); 
    if (direction === "next" && pageInfo.page < totalPages - 1) {
      setPageInfo((prev) => ({ ...prev, page: prev.page + 1 }));
    } else if (direction === "prev" && pageInfo.page > 0) {
      setPageInfo((prev) => ({ ...prev, page: prev.page - 1 }));
    }
  };

  
  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPageInfo({ page: 0, pageSize: newSize }); 
  };

  return (
    <div className="product-table-container">
      <ProductTableDisplay 
        productTableRowsData={productTableRowsData} 
        pageInfo={pageInfo} 
      />
      <div className="row-summary-widget">
        <div className="row-counter-container1">
          <label htmlFor="rowsPerPage">Rows per page:</label>
          <select id="rowsPerPage" value={pageInfo.pageSize} onChange={handlePageSizeChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          {/* <SvgIcon1 className="svg-container3" /> */}
        </div>
        
        <div className="row-counter-container">
          <div className="result-info-bar">
            <button onClick={() => handlePageChange("prev")} disabled={pageInfo.page === 0}>
              <SvgIcon3 className="svg-container4" />
            </button>
            <p className="status-text">
              {totalRows === 0
                ? "0-0 of 0" 
                : `${pageInfo.page * pageInfo.pageSize + 1} - ${Math.min((pageInfo.page + 1) * pageInfo.pageSize, totalRows)} of ${totalRows}`}
            </p>
            <button onClick={() => handlePageChange("next")} disabled={pageInfo.page >= Math.ceil(totalRows / pageInfo.pageSize) - 1}>
              <SvgIcon4 className="svg-container4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTableDisplaySection;
