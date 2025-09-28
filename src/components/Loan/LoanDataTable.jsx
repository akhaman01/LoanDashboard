
import React, { useState } from 'react'
import LoanTableRow from './LoanTableRow';
import "../../styles/table.css";
import LoanTableHeader from './LoanTableHeader';
import ExportButton from '../ExportButton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LoanDataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let x = a[sortConfig.key];
    let y = b[sortConfig.key];
    
    if (sortConfig.key === 'ORIGINAL_LOAN_BAL' || sortConfig.key === 'CURRENT_INTEREST_RATE') {
      x = parseFloat(x) || 0;
      y = parseFloat(y) || 0;
    } else if (typeof x === "string") {
      x = x.toLowerCase();
    }
    if (typeof y === "string" && sortConfig.key !== 'ORIGINAL_LOAN_BAL' && sortConfig.key !== 'CURRENT_INTEREST_RATE') {
      y = y.toLowerCase();
    }

    if (x < y) return sortConfig.direction === "asc" ? -1 : 1;
    if (x > y) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div>
          <h2>Loan Data</h2>
          <div className="table-info">
            Showing {startIndex + 1}-{Math.min(endIndex, sortedData.length)} of {sortedData.length} loans
          </div>
        </div>
        <ExportButton data={sortedData} filename="filtered-loan-data" />
      </div>
      
      <table className="data-table">
        <LoanTableHeader 
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
        />
        <tbody>
          {currentData.map((row, index) => (
            <LoanTableRow key={startIndex + index} row={row} />
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="pagination-container">
          <div className="pagination-info">
            Page {currentPage} of {totalPages}
          </div>
          <div className="pagination-controls">
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaChevronLeft /> Previous
            </button>
            
            {getPageNumbers().map(page => (
              <button
                key={page}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoanDataTable