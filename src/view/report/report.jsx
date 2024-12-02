import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './report.css';

function Report() {
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Define an async function for fetching data
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading state to true
        const response = await axios.get('http://localhost:4000/employee');
        setData(response.data); // Store fetched data
      } catch (err) {
        setError(err.message); // Handle any errors
        console.error(err);
      } finally {
        setLoading(false); // Set loading state to false after completion
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <div>Loading...</div>; // Show a loading message while fetching
  if (error) return <div>Error: {error}</div>; // Show error message if something went wrong

  return (
    <div className='main-report'>
      <div className='report-title'>Report</div>
      <div className='report-search'>Search</div>
      <div className='report-table' style={{border: '1px solid black' }}>
        <table className='table-main'>
          <thead className='table-head'>
            <tr className='table-row'>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Total Days</th>
              <th>Start Date</th>
              <th>Days Taken</th>
              <th>Days Scheduled</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.employeeid}>
                <td>{item.employeeid}</td>
                <td>{item.name}</td>
                <td>{item.totaldays}</td>
                <td>{item.startdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Report;