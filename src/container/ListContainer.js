import React from 'react';
import List from '../components/list/List';

const ListContainer = () => {
  const tmpData = [
    {
      "itemName": "쌀집아줌마 오곡/귀리뻥튀기 (8개입, 60g)",
      "price": 1980,
      "image": "item/images/64ea1347-c524-48a5-8fb6-71bed7e3eef0-w600.jpg",
      "id": "1"
    },
    {
      "itemName": "채담카레 (자연주의 채소 카레)",
      "price": 2750,
      "image": "item/images/042aa511-5dae-4c52-9724-f5e424d1ebae-w600.jpg",
      "id": "2"
    },
    {
      "itemName": "해남 아이스 엿구마 (150g, 1kg)",
      "price": 4980,
      "image": "item/images/a1eb32cb-f475-4cb0-a6de-4f4182bee3b9-w600.jpg",
      "id": "3"
    },
    {
      "itemName": "콩고물 앙금 인절미 (20개입)",
      "price": 12900,
      "image": "item/images/ba49b331-ec8a-4db6-ac93-aa4bf86d3deb-w600.jpg",
      "id": "4"
    }
  ];

  const clickAddingProductShoppingCart = () => {
    alert("추가되었습니다.")
  }

  return (
    <List 
      data={tmpData.concat(tmpData).concat(tmpData)}
      clickAddingProductShoppingCart={clickAddingProductShoppingCart}
    />
  );
}

export default ListContainer;