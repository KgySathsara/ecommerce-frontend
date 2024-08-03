import React from 'react';
import { Card, Col, Row } from 'antd';

const DashboardBox = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Products" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Odres" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Messages" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
);
export default DashboardBox;