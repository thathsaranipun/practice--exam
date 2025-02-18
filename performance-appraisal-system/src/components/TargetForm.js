import React, { useState, useEffect } from 'react';
import { createTarget, updateTarget } from '../services/TargetService';

const TargetForm = ({ targetId }) => {
  const [target, setTarget] = useState({ name: '', description: '' });

  useEffect(() => {
    if (targetId) {
    }
  }, [targetId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (targetId) {
      updateTarget(targetId, target)
        .then(() => alert('Target updated'))
        .catch(error => console.error(error));
    } else {
      createTarget(target)
        .then(() => alert('Target created'))
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="targetName" className="form-label">Target Name</label>
        <input
          type="text"
          className="form-control"
          id="targetName"
          value={target.name}
          onChange={(e) => setTarget({ ...target, name: e.target.value })}
          placeholder="Enter Target Name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="targetDescription" className="form-label">Target Description</label>
        <textarea
          className="form-control"
          id="targetDescription"
          value={target.description}
          onChange={(e) => setTarget({ ...target, description: e.target.value })}
          placeholder="Enter Target Description"
          rows="3"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        {targetId ? 'Update Target' : 'Create Target'}
      </button>
    </form>
  );
};

export default TargetForm;