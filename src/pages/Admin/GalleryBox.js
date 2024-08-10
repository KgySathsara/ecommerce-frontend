import React, { useState, useEffect } from 'react';
import { Layout, Form, Input, Button, Table, Modal, message, Upload } from 'antd';
import { PlusOutlined, UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Buffer } from 'buffer';
import './OrderManagement.css';

const { Content } = Layout;

const GalleryBox = () => {
  const [form] = Form.useForm();
  const [images, setImages] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/gallery')
      .then(response => {
        const imagesWithBase64 = response.data.images.map(image => ({
          ...image,
          image: image.image ? Buffer.from(image.image).toString('base64') : null,
        }));
        setImages(imagesWithBase64);
      })
      .catch(error => {
        console.error('There was an error fetching the images!', error);
        message.error('There was an error fetching the images!');
      });
  }, []);

  const handleAddImage = () => {
    setEditingImage(null);
    form.resetFields();
    setFileList([]);
    setIsModalOpen(true);
  };

  const handleDeleteImage = (imageId) => {
    axios.delete(`http://localhost:8000/api/gallery/${imageId}`)
      .then(() => {
        setImages(images.filter(image => image.id !== imageId));
        message.success('Image deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the image!', error);
        message.error('There was an error deleting the image!');
      });
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
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

    axios.post('http://localhost:8000/api/gallery', formData)
      .then(response => {
        const newImage = response.data.image;
        setImages([...images, newImage]);
        message.success('Image added successfully');
        setIsModalOpen(false);
        setFileList([]);
      })
      .catch(error => {
        console.error('There was an error adding the image!', error);
        message.error('There was an error adding the image!');
      });
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        handleSubmit(values);
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
            alt="Gallery"
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
          <Button icon={<DeleteOutlined />} onClick={() => handleDeleteImage(record.id)} style={{ marginLeft: 8 }} />
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Content className="management-content">
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddImage} style={{ marginBottom: 16 }}>
          Add Image
        </Button>
        <Table columns={columns} dataSource={images} rowKey="id" />
        <Modal
          title={editingImage ? 'Edit Image' : 'Add Image'}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={editingImage}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input the image name!' }]}
            >
              <Input placeholder="Enter image name" />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input the image price!' }]}
            >
              <Input
                type="number"
                placeholder="Enter image price"
              />
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[{ required: true, message: 'Please input the image quantity!' }]}
            >
              <Input type="number" placeholder="Enter image quantity" />
            </Form.Item>

            <Form.Item
              label="Upload Image"
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={e => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e && e.fileList;
              }}
              rules={[{ required: !editingImage, message: 'Please upload an image!' }]}
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
      </Content>
    </Layout>
  );
};

export default GalleryBox;
