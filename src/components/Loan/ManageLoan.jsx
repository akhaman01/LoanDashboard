
import React, { useEffect, useState } from 'react'
import Filter from '../Filter';
import LoanDataTable from './LoanDataTable';

const ManageLoan = () => {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        PROPERTY_STATE: "",
        OWNERSHIP_TYPE: "",
        LOAN_STATUS: "",
    });

    useEffect(() => {
       const savedData = localStorage.getItem("loanData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setData(parsed);
      setFiltered(parsed);
      setLoading(false);
    } else {
      fetchLoanData();
    }
    },[]);

    const fetchLoanData = async () => {
       try{
         setLoading(true);
         const response = await fetch("https://raw.githubusercontent.com/rahulsoni-data/data/refs/heads/main/data.json");
         const result = await response.json();
         setData(result);
         setFiltered(result);
         localStorage.setItem("loanData", JSON.stringify(result));
       } catch(error){
        console.log("Error fetching the data", error);
       } finally {
         setLoading(false);
       }
    };

    useEffect(() => {
        let result = data;
        if (filters.PROPERTY_STATE) {
          result = result.filter(
            (item) => item.PROPERTY_STATE === filters.PROPERTY_STATE
          );
        }
        if (filters.OWNERSHIP_TYPE) {
          result = result.filter(
            (item) => item.OWNERSHIP_TYPE === filters.OWNERSHIP_TYPE
          );
        }
        if (filters.LOAN_STATUS) {
          result = result.filter(
            (item) => item.LOAN_STATUS === filters.LOAN_STATUS
          );
        }

        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          result = result.filter(
            (item) =>
              item.LOAN_PROGRAM?.toLowerCase().includes(query) ||
              item.PROPERTY_STATE?.toLowerCase().includes(query) ||
              item.PROPERTY_CITY?.toLowerCase().includes(query) ||
              item.OWNERSHIP_TYPE?.toLowerCase().includes(query) ||
              item.PROPERTY_TYPE?.toLowerCase().includes(query) ||
              item.LOAN_STATUS?.toLowerCase().includes(query)
          );
        }

        setFiltered(result);
    },[filters, data, searchQuery]);

    if (loading) {
      return (
        <div className='home-container'>
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        </div>
      );
    }

    return (
      <div className='home-container'>
          <Filter  
            data={data} 
            setFilters={setFilters}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filters={filters}
          />
          <LoanDataTable  
            data={filtered}
          />
      </div>
    )
}

export default ManageLoan