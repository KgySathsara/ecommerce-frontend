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
        const productsWithImages = response.data.products.map(product => ({
          ...product,
          image: product.image_url,
        }));
        setProducts(productsWithImages);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
        message.error('There was an error fetching the products!');
      });
  }, []);
  

  const handleAddProduct = () => {
    setEditingProduct(null);
    form.resetFields();
    setFileList([]);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    form.setFieldsValue({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    });
    setFileList([]);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    console.log('Deleting product with ID:', productId);
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
  

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('quantity', values.quantity);
  
    if (fileList.length > 0) {
      const upload = fileList[0].originFileObj;
      formData.append('upload', upload);
    }
  
    axios.post('http://localhost:8000/api/products', formData)
      .then(response => {
        const newProduct = response.data.product;
        setProducts([...products, newProduct]);
        message.success('Product added successfully');
        setIsModalOpen(false);
        setFileList([]); 
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
        message.error('There was an error adding the product!');
      });
  };
  

  const handleUpdate = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('quantity', values.quantity);

    if (fileList.length > 0) {
      const upload = fileList[0].originFileObj;

      if (!upload.type.startsWith('image/')) {
        message.error('Please upload only image files.');
        return;
      }

      formData.append('upload', upload);
    }

    axios.put(`http://localhost:8000/api/products/${editingProduct.id}`, formData)
      .then(response => {
        const updatedProduct = response.data.product;
        setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
        message.success('Product updated successfully');
        setIsModalOpen(false);
        setFileList([]);
      })
      .catch(error => {
        console.error('There was an error updating the product!', error);
        message.error('There was an error updating the product!');
      });
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        if (editingProduct) {
          handleUpdate(values);
        } else {
          handleSubmit(values);
        }
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFileList([]);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files (JPEG, PNG, JPG, GIF, SVG)!');
    }
    return isImage;
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
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => {
        if (!image) {
          return 'No Image';
        }

        const isImageUrl = typeof image === 'string' && image.startsWith('http');
        const imageSrc = isImageUrl
          ? image
          : `data:image/png;base64,${image}`;

        return (
          <img
            src={imageSrc}
            alt="Product"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        );
      },
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
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input the product price!' }]}
            >
              <Input
                type="number"
                placeholder="Enter product price"
              />
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[{ required: true, message: 'Please input the product quantity!' }]}
            >
              <Input type="number" placeholder="Enter product quantity" />
            </Form.Item>

            <Form.Item
              label="Upload Product Image"
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={e => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e && e.fileList;
              }}
              rules={[{ required: !editingProduct, message: 'Please upload a product image!' }]}
            >
              <Upload
                beforeUpload={beforeUpload}
                listType="picture"
                fileList={fileList}
                onChange={({ fileList }) => setFileList(fileList)}
                onRemove={() => setFileList([])}
              >
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
