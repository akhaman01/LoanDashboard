
import React from 'react'

import "../styles/filters.css"

import {FaSearch, FaTimes} from "react-icons/fa"

const Filter = ({data,setFilters, searchQuery, setSearchQuery}) => {
  const property = [...new Set(data.map((d) => d.PROPERTY_STATE))];
  const ownerships = [...new Set(data.map((d) => d.OWNERSHIP_TYPE))];
  // const loanstatus = [...new Set(data.map((d) => d.LOAN_STATUS))];



  return (
    <div className="filters-container">
        <div>
            <label>Filter by Property</label>
            <select onChange={(e) => setFilters((f) => ({ ...f, PROPERTY_STATE: e.target.value }))}>

             <options value="">All</options>

            {property.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
            </select>
        </div>

        <div>
             <label>Filter by Ownership:</label>
        <select onChange={(e) => setFilters((f) => ({ ...f, OWNERSHIP_TYPE: e.target.value }))}>
          <option value="">All</option>
          {ownerships.map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
        </select>
        </div>

              {/* <div>
             <label>Filter by Loan Status:</label>
        <select onChange={(e) => setFilters((f) => ({ ...f, LOAN_STATUS: e.target.value }))}>
          <option value="">All</option>
          {loanstatus.map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
        </select>
        </div> */}
         <div className='search-box'>
          <FaSearch className="search-icon"/>
        
        <input
          type="text"
          placeholder="Search by city"
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