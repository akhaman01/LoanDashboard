
import React from 'react'
import "../styles/filters.css"
import { FaSearch, FaTimes, FaHome, FaUser } from "react-icons/fa"

const Filter = ({ data, setFilters, searchQuery, setSearchQuery, filters }) => {
  const property = [...new Set(data.map((d) => d.PROPERTY_STATE))].sort();
  const ownerships = [...new Set(data.map((d) => d.OWNERSHIP_TYPE))].sort();
  const loanStatus = [...new Set(data.map((d) => d.LOAN_STATUS))].sort();

  return (
    <div className="filters-container">
      <div className={`filter-group ${filters.PROPERTY_STATE ? 'active' : ''}`}>
        <label>
          <FaHome style={{ marginRight: '5px' }} />
          Property State
        </label>
        <select 
          value={filters.PROPERTY_STATE}
          onChange={(e) => setFilters((f) => ({ ...f, PROPERTY_STATE: e.target.value }))}
        >
          <option value="">All States</option>
          {property.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className={`filter-group ${filters.OWNERSHIP_TYPE ? 'active' : ''}`}>
        <label>
          <FaUser style={{ marginRight: '5px' }} />
          Ownership Type
        </label>
        <select 
          value={filters.OWNERSHIP_TYPE}
          onChange={(e) => setFilters((f) => ({ ...f, OWNERSHIP_TYPE: e.target.value }))}
        >
          <option value="">All Types</option>
          {ownerships.map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className={`filter-group ${filters.LOAN_STATUS ? 'active' : ''}`}>
        <label>Loan Status</label>
        <select 
          value={filters.LOAN_STATUS}
          onChange={(e) => setFilters((f) => ({ ...f, LOAN_STATUS: e.target.value }))}
        >
          <option value="">All Status</option>
          {loanStatus.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className='search-box'>
        <label>Search Loans</label>
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by program, city, state..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <FaTimes
            className="clear-icon"
            onClick={() => setSearchQuery("")}
          />
        )}
      </div>
    </div>
  )
}

export default Filter