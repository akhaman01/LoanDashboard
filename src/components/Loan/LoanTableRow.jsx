import React from 'react'

const LoanTableRow = ({ row }) => {
  const formatCurrency = (amount) => {
    const numAmount = parseFloat(amount) || 0;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numAmount);
  };

  const formatInterestRate = (rate) => {
    const numRate = parseFloat(rate) || 0;
    return `${numRate.toFixed(2)}%`;
  };

  const getStatusBadge = (status) => {
    const statusLower = status?.toLowerCase() || '';
    let className = 'status-badge ';
    
    if (statusLower.includes('active') || statusLower.includes('current')) {
      className += 'status-active';
    } else if (statusLower.includes('inactive') || statusLower.includes('closed')) {
      className += 'status-inactive';
    } else {
      className += 'status-pending';
    }
    
    return <span className={className}>{status}</span>;
  };

  return (
    <tr>
      <td>{row.LOAN_PROGRAM}</td>
      <td>{row.OWNERSHIP_TYPE}</td>
      <td>{row.PROPERTY_STATE}</td>
      <td>{row.PROPERTY_CITY}</td>
      <td>{row.PROPERTY_TYPE}</td>
      <td className="loan-amount">{formatCurrency(row.ORIGINAL_LOAN_BAL)}</td>
      <td className="interest-rate">{formatInterestRate(row.CURRENT_INTEREST_RATE)}</td>
      <td>{getStatusBadge(row.LOAN_STATUS)}</td>
    </tr>
  )
}

export default LoanTableRow