import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './styles.css'

const PurchaseHistory = () => {
  const [purchaseHistoryData, setPurchaseHistoryData] = useState([{'id': 1, 'product_id': 1, 'name': 'Les Paul', 'price': 2799.99, 'purchase_date': new Date().toLocaleDateString('en-US')}, {'id': 2, 'product_id': 2, 'name': 'SG', 'price': 1599.99, 'purchase_date': new Date().toLocaleDateString('en-US')}, {'id': 3, 'product_id': 8, 'name': 'SM 57', 'price': 99.99, 'purchase_date': new Date().toLocaleDateString('en-US')}, {'id': 4, 'product_id': 10, 'name': 'American Professional II Precision Bass', 'price': 1749, 'purchase_date': new Date().toLocaleDateString('en-US')}]);



  return (
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Purchase Date</th>
        </tr>
      </thead>
      <tbody>
        {purchaseHistoryData.map(history => (
          <tr key={history.id}>
            <td>{history.id}</td>
            <td>{history.product_id}</td>
            <td>{history.name}</td>
            <td>{history.price}</td>
            <td>{history.purchase_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PurchaseHistory;
