import React from 'react';
import { Image } from 'antd';

const AnimalFeed = () => (
  <Image.PreviewGroup
    items={[
      'https://tse4.mm.bing.net/th?id=OIP.cHFZKKKsTpFdbYtUaVHZ3AHaEK&pid=Api&P=0&h=220',
      'https://tse4.mm.bing.net/th?id=OIP.bDRToYhwuFfg-kDfm43-MgHaEc&pid=Api&P=0&h=220',
      'https://tse3.mm.bing.net/th?id=OIP.rHAvBl9q0wyb1iNDMqEFEQHaE8&pid=Api&P=0&h=220',
      'https://tse1.mm.bing.net/th?id=OIP.0RsH9pqgeu3C1F0oLKEZUQHaE8&pid=Api&P=0&h=220',
      'https://tse1.mm.bing.net/th?id=OIP.07mTQefAak8twZvku11IzAHaEN&pid=Api&P=0&h=220',
      'https://tse2.explicit.bing.net/th?id=OIP.68YOCXQFz9421L7BPvhhEQAAAA&pid=Api&P=0&h=220',
    ]}
  >
    <Image
      width={300}
      src="https://tse2.explicit.bing.net/th?id=OIP.68YOCXQFz9421L7BPvhhEQAAAA&pid=Api&P=0&h=220"
    />
  </Image.PreviewGroup>
);
export default AnimalFeed;