import React, { useState, useEffect } from 'react';
import { exportToCSV, exportToPDF } from '../services/ExportService';

const ReportPage = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    // Fetch report data from your API
    // setReportData(fetchedData);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Report</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {reportData.length > 0 ? (
              reportData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex gap-3">
        <button onClick={() => exportToCSV(reportData)} className="btn btn-success">Export to CSV</button>
        <button onClick={() => exportToPDF(reportData)} className="btn btn-danger">Export to PDF</button>
      </div>
    </div>
  );
};

export default ReportPage;