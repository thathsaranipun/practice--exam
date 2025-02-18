// components/TargetList.js
import React, { useState, useEffect } from 'react';
import { fetchTargets, deleteTarget } from '../services/TargetService';

const TargetList = () => {
  const [targets, setTargets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchTargets(currentPage, pageSize)
      .then(response => setTargets(response.data))
      .catch(error => console.error(error));
  }, [currentPage, pageSize]);

  const handleDelete = (id) => {
    deleteTarget(id)
      .then(() => fetchTargets(currentPage, pageSize))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Manage Targets</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {targets.map(target => (
            <tr key={target.id}>
              <td>{target.name}</td>
              <td>{target.description}</td>
              <td>
                <button onClick={() => handleDelete(target.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Component */}
      {/* Implement pagination here */}
    </div>
  );
};

export default TargetList;
