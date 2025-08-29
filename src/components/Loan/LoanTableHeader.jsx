import React from 'react'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

const headers = [
  { key: "LOAN_PROGRAM", label: "Loan Program" },
  { key: "OWNERSHIP_TYPE", label: "Ownership Type" },
  { key: "PROPERTY_STATE", label: "Property State" },
  { key: "PROPERTY_CITY", label: "Property City" },
  { key: "PROPERTY_TYPE", label: "Property Type" },
  { key: "ORIGINAL_LOAN_BAL", label: "Original Loan Balance" },
  { key: "CURRENT_INTEREST_RATE", label: "Current Interest Rate" },
  { key: "LOAN_STATUS", label: "Loan Status" },
];

const LoanTableHeader = ({sortConfig, setSortConfig}) => {

    const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

   const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="sort-icon" />;
    if (sortConfig.direction === "asc") return <FaSortUp className="sort-icon active" />;
    return <FaSortDown className="sort-icon active" />;
  };


  return (
     <thead>
      <tr>
        {headers.map((h) => (
          <th key={h.key} onClick={() => handleSort(h.key)}>
            {h.label}
            {renderSortIcon(h.key)}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default LoanTableHeader