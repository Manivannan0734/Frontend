'use client'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Hello.module.css'
import axios from 'axios'
const Hello = () => {
const [data,setData]=useState([]);

useEffect(()=>{
axios.get('https://backend-opal-sigma-65.vercel.app/api/data').then(res=>{setData(res.data)}).catch(console.log("error"))
},[]);

  return (
    <div className={styles.container}>
      <h1>Nichi in Employee Details 2024</h1>
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
    </div>
  )
}

export default Hello
