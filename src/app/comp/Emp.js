'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../styles/Emp.module.css'

const Emp = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://192.168.0.42:8080/employee')
      .then(res => setData(res.data))
      .catch(() => console.error("Error fetching data"))
  }, [])

  const addEmp=()=>{
    axios.post('http://192.168.0.42:8080/employee')
      .then(res => setData(res.data))
      .catch(() => console.error("Error fetching data"))
  }

  return (
    <div className={styles.empcontainer}>
      <h1>Employee Details</h1>
      <table className={styles.emptable}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Employee Phone</th>
            <th>Employee Age</th>
            <th>Employee Salary</th>
            <th>Employee Department</th>
          </tr>
        </thead>
        <tbody c>
          {data.map((item, index) => (
            <tr className={styles.row} key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.age}</td>
              <td>{item.salary}</td>
              <td>{item.department}</td>
              <button>Delete Employee</button>
            </tr>
          ))}
        </tbody>
        
      </table>
      <button onClick={addEmp}>Add Employee</button>
    </div>
  )
}

export default Emp
