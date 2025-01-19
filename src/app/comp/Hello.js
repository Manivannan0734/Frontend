'use client'

import React, { useState, useEffect } from 'react'
import styles from '../styles/Hello.module.css'
import Loader from './Loader'
import axios from 'axios'

const Hello = () => {
  const [data, setData] = useState([]); // For storing employee data
  const [loader, setLoader] = useState(true); // For showing the loader

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true); // Show the loader
      try {
        const response = await axios.get('https://backend-opal-sigma-65.vercel.app/api/data');
        setData(response.data); // Store the data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false); // Hide the loader
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Nichi Employee Details 2024</h1>

      {/* Show Loader while fetching data */}
      {loader ? (
        <Loader />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Employee Names</th>
              <th>Employee Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className={styles.tr} key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Hello;
