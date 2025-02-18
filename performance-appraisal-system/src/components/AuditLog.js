// components/AuditLog.js
import React, { useState, useEffect } from 'react';
import { fetchAuditLog } from '../services/AuditService';

const AuditLog = () => {
  const [auditLog, setAuditLog] = useState([]);

  useEffect(() => {
    fetchAuditLog()
      .then(response => setAuditLog(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Audit Log</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Action</th>
            <th>Target</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {auditLog.map(log => (
            <tr key={log.id}>
              <td>{log.action}</td>
              <td>{log.targetName}</td>
              <td>{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLog;
