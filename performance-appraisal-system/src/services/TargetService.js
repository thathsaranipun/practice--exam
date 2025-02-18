// services/TargetService.js
import axios from 'axios';

const API_URL = 'http://localhost:7111/api/v1/targets';

// Helper function to handle API responses
const handleResponse = (response) => response.data;

// Fetch Targets with pagination
export const fetchTargets = async (page, pageSize) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&pageSize=${pageSize}`);
    return handleResponse(response); // Return only the data
  } catch (error) {
    console.error("Error fetching targets:", error);
    throw error; // Propagate error for further handling in components
  }
};

// Create a new Target
export const createTarget = async (target) => {
  try {
    const response = await axios.post(API_URL, target, {
      headers: {
        'Content-Type': 'application/json', // Ensure the content type is set for POST requests
        'Accept': 'application/json',
      }
    });
    return handleResponse(response); // Return created target data
  } catch (error) {
    console.error("Error creating target:", error);
    throw error; // Propagate error for further handling
  }
};

// Update an existing Target
export const updateTarget = async (id, target) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, target, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return handleResponse(response); // Return updated target data
  } catch (error) {
    console.error("Error updating target:", error);
    throw error; // Propagate error for further handling
  }
};

// Delete a Target
export const deleteTarget = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return handleResponse(response); // Return any response if needed (e.g., success message)
  } catch (error) {
    console.error("Error deleting target:", error);
    throw error; // Propagate error for further handling
  }
};
