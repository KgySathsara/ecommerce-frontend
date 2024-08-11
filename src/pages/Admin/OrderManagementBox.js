import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Order Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
];

const OrderManagementBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/orders');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        message.error('Failed to load orders. Please try again later.');
      }
    };

    fetchOrders();
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey="id" // Set a unique key for each row
    />
  );
};

export default OrderManagementBox;
