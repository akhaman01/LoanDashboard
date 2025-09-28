import React from 'react'
import { FaDownload } from 'react-icons/fa'

const ExportButton = ({ data, filename = 'loan-data' }) => {
  const exportToCSV = () => {
    if (!data || data.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = [
      'LOAN_PROGRAM',
      'OWNERSHIP_TYPE', 
      'PROPERTY_STATE',
      'PROPERTY_CITY',
      'PROPERTY_TYPE',
      'ORIGINAL_LOAN_BAL',
      'CURRENT_INTEREST_RATE',
      'LOAN_STATUS'
    ];

    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = row[header] || '';
          // Escape commas and quotes in CSV
          return typeof value === 'string' && (value.includes(',') || value.includes('"'))
            ? `"${value.replace(/"/g, '""')}"`
            : value;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${filename}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button 
      className="export-btn"
      onClick={exportToCSV}
      title="Export data to CSV"
    >
      <FaDownload style={{ marginRight: '8px' }} />
      Export CSV
    </button>
  )
}

export default ExportButton