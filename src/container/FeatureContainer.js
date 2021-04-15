import React from 'react';
import Feature from '../components/feature/Feature';

const FeatureContainer = () => {
  const tmpData = [
    {
      "image": "feature/images/dcabfb7e-e89a-4f83-a3d6-5927b971bf79-w1200.jpg",
      "mobileImage": "feature/images/b2fc34e6-7686-4710-b78d-c9905ddd199d-w1080.jpg"
    },
    {
      "image": "feature/images/b672865b-697f-4ea6-abe2-fef44632cec3-w1200.png",
      "mobileImage": "feature/images/5c264a80-29f6-4b8c-9b06-1afc717d4727-w1080.png"
    },
    {
      "image": "feature/images/fa658fc8-68bd-4f9a-aea2-12b17d784bd0-w1200.jpg",
      "mobileImage": "feature/images/5963650e-4cc0-439b-8138-f75728d38f93-w1080.jpg"
    },
    {
      "image": "feature/images/89e7fe73-af10-4960-be8e-6d110cbf7fb5-w1200.jpg",
      "mobileImage": "feature/images/f296f863-830a-409b-96ae-401a0a002d93-w1080.jpg"
    },
    {
      "image": "feature/images/ae575cf1-46a0-4b96-a8b5-4b0d2838e524-w1200.jpg",
      "mobileImage": "feature/images/038afd38-1439-4f3e-9f16-5ff849d19303-w1080.jpg"
    }
  ];

  const clickMoveFeatureImage = () => {
    // TODO : Dot을 누르면, 해당 차례의 이미지로 변경된다.
  }

  return (
    <Feature data={tmpData} clickMoveFeatureImage={clickMoveFeatureImage}/>
  );
}

export default FeatureContainer;