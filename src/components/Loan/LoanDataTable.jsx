
import React, { useState } from 'react'
import LoanTableRow from './LoanTableRow';
import "../../styles/table.css";
import LoanTableHeader from './LoanTableHeader';


const LoanDataTable = ({data}) => {
    const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

    
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let x = a[sortConfig.key];
    let y = b[sortConfig.key];
    if (typeof x === "string") x = x.toLowerCase();
    if (typeof y === "string") y = y.toLowerCase();

    if (x < y) return sortConfig.direction === "asc" ? -1 : 1;
    if (x > y) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });


  return (
    <table className="data-table">

        <LoanTableHeader 
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        />
        <tbody>
        {sortedData.map((row, index) => (
          <LoanTableRow key={index} row={row} />
        ))}
      </tbody>

    </table>
  )
}

export default LoanDataTable