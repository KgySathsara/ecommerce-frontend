import React, { useState, useEffect } from 'react';
import { Layout, Form, Input, Button, Table, Modal, message, Row, Col, Card, Upload } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import Sidebar from '../../components/Navbar/Sidebar';
import './ProductManagement.css';

const { Header, Sider, Content } = Layout;

const ProductManagement = () => {
  const [form] = Form.useForm();
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
        message.error('There was an error fetching the products!');
      });
  }, []);

  const handleAddProduct = () => {
    setEditingProduct(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== productId));
        message.success('Product deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the product!', error);
        message.error('There was an error deleting the product!');
      });
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
        if (fileList.length > 0) {
          formData.append('file', fileList[0].originFileObj);
        }

        const request = editingProduct
          ? axios.put(`http://localhost:8000/api/products/${editingProduct.id}`, formData)
          : axios.post('http://localhost:8000/api/products', formData);

        request
          .then(response => {
            const updatedProduct = response.data.product;
            setProducts(editingProduct
              ? products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
              : [...products, updatedProduct]);
            message.success(`Product ${editingProduct ? 'updated' : 'added'} successfully`);
            setIsModalOpen(false);
            setFileList([]);
          })
          .catch(error => {
            console.error(`There was an error ${editingProduct ? 'updating' : 'adding'} the product!`, error);
            message.error(`There was an error ${editingProduct ? 'updating' : 'adding'} the product!`);
          });
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFileList([]);
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Image',
      dataIndex: 'image_path',
      key: 'image_path',
      render: (text) => <img src={text} alt="Product" style={{ width: 50, height: 50 }} />
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => handleEditProduct(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDeleteProduct(record.id)} style={{ marginLeft: 8 }} />
        </>
      ),
    },
  ];

  return (
    <Layout className="product-management">
      <Sider width={256} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-content">
            <h2>Product Management</h2>
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAddProduct} className="add-button">
              Add Product
            </Button>
          </div>
        </Header>
        <Content className="management-content">
          <Row>
            <Col span={24}>
              <Card>
                <Table columns={columns} dataSource={products} rowKey="id" />
              </Card>
            </Col>
          </Row>
        </Content>

        <Modal
          title={editingProduct ? 'Edit Product' : 'Add Product'}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={editingProduct}
          >
            <Form.Item
              label="Product Name"
              name="name"
              rules={[{ required: true, message: 'Please input the product name!' }]}
            >
              <Input placeholder="Enter product name" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input the product description!' }]}
            >
              <Input.TextArea placeholder="Enter product description" />
            </Form.Item>

            <Form.Item
              label="Upload Product Image"
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={e => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e?.fileList;
              }}
            >
              <Upload fileList={fileList} onChange={({ fileList }) => setFileList(fileList)}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </Layout>
    </Layout>
  );
};

export default ProductManagement;
