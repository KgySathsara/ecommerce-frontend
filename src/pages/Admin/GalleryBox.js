import React, { useState } from 'react';
import { Image, Row, Col, Button, Modal, Input, Upload, message } from 'antd';
import { UploadOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './GalleryBox.css'; // Optional: add your own styles if needed

const GalleryBox = () => {
  const [images, setImages] = useState([
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200/0000FF/808080?text=Image3",
    "https://via.placeholder.com/200/FF0000/FFFFFF?text=Image4"
  ]);

  const [editingImageIndex, setEditingImageIndex] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editImageUrl, setEditImageUrl] = useState("");

  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingImageIndex(index);
    setEditImageUrl(images[index]);
    setEditModalVisible(true);
  };

  const handleAdd = () => {
    if (newImage) {
      setImages([...images, newImage]);
      setNewImage(null);
    } else {
      message.error('Please upload an image');
    }
  };

  const handleSaveEdit = () => {
    const updatedImages = [...images];
    updatedImages[editingImageIndex] = editImageUrl;
    setImages(updatedImages);
    setEditModalVisible(false);
  };

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      setNewImage(URL.createObjectURL(info.file.originFileObj));
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className="gallery-box">
      <Row gutter={16}>
        {images.map((src, index) => (
          <Col span={6} key={index} className="gallery-item">
            <Image
              width={200}
              src={src}
              alt={`Gallery Image ${index + 1}`}
            />
            <div className="gallery-actions">
              <Button
                icon={<EditOutlined />}
                onClick={() => handleEdit(index)}
              />
              <Button
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(index)}
              />
            </div>
          </Col>
        ))}
      </Row>
      <div className="gallery-add">
        <Upload
          showUploadList={false}
          customRequest={handleImageChange}
        >
          <Button icon={<UploadOutlined />}>Upload New Photo</Button>
        </Upload>
        <Button type="primary" onClick={handleAdd}>
          Add Photo
        </Button>
      </div>
      <Modal
        title="Edit Image"
        visible={editModalVisible}
        onOk={handleSaveEdit}
        onCancel={() => setEditModalVisible(false)}
      >
        <Input
          value={editImageUrl}
          onChange={(e) => setEditImageUrl(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default GalleryBox;
