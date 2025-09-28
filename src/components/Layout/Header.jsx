import React from 'react'
import { FaChartBar, FaDatabase } from 'react-icons/fa'

const Header = () => {
  return (
     <header className="app-header">
      <h1>
        <FaChartBar style={{ marginRight: '10px', fontSize: '24px' }} />
        Loan Data Dashboard
        <FaDatabase style={{ marginLeft: '10px', fontSize: '20px', opacity: '0.7' }} />
      </h1>
    </header>
  )
}

export default Header