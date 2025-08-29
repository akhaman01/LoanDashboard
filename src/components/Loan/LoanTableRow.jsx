import React from 'react'

const LoanTableRow = ({row}) => {


  return (
    <tr>
      <td>{row.LOAN_PROGRAM}</td>
      <td>{row.OWNERSHIP_TYPE}</td>
      <td>{row.PROPERTY_STATE}</td>
      <td>{row.PROPERTY_CITY}</td>
      <td>{row.PROPERTY_TYPE}</td>
      <td>{row.ORIGINAL_LOAN_BAL}</td>
      <td>{row.CURRENT_INTEREST_RATE}</td>
      <td>{row.LOAN_STATUS}</td>
    </tr>
  )
}

export default LoanTableRow