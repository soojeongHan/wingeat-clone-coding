import React from 'react';
import Header from '../components/header/Header';

const HeaderContainer = () => {
  // TODO : local storage에서 데이터 가져와서 숫자를 카운팅하는 변수.
  const countProduceCart = 0;

  // TODO : 1. 로고 -> 홈페이지, 2. 장바구니 텍스트 -> 장바구니 페이지로 이동하는 함수.
  const clickMovePage = () => {
    
  }
  return (
    <Header countProduceCart={countProduceCart} handleMovePage={clickMovePage}/>
  );
}

export default HeaderContainer;