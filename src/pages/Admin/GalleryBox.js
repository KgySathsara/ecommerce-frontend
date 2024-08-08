import React, { useState } from 'react';
import { Layout, Image, Upload, Input, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import './OrderManagement.css';

const { Content } = Layout;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const GalleryBox = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [name, setName] = useState(''); 

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleInputChange = (e) => {
    setName(e.target.value); 
  };

  const handleSubmit = async () => {
    if (!name || !fileList.length) {
      message.error('Please fill in the name and upload at least one image.');
      return;
    }

    try {

      const formData = new FormData();
      formData.append('name', name);
      fileList.forEach((file) => {
        formData.append('images[]', file.originFileObj);
      });

      await axios.post('http://localhost:8000/api/gallery', formData);
      message.success('Gallery data submitted successfully');
    } catch (error) {
      message.error('Failed to submit gallery data');
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
        <Content className="management-content">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: 'none',
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
          <Input
            placeholder="Enter name"
            value={name}
            onChange={handleInputChange}
            style={{ marginTop: 16 }}
          />
          <Button type="primary" onClick={handleSubmit} style={{ marginTop: 16 }}>
            Submit
          </Button>
        </Content>
  );
};

export default GalleryBox;
