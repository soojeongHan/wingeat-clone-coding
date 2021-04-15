import React from 'react';
import styles from './List.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const List = ({
  data,
  clickAddingProductShoppingCart
}) => {
  return (
    <div className={cn('list')}>
      <div className={cn('list-subject')}>
        <p>윙잇 MADE</p>
      </div>
      {/* TODO : 상품 리스트 표시
        1. 장바구니 추가 기능
        2. Infinite Scroll 기능
          - page 1부터 시작하여 6까지 page를 1씩 증가시켜 API를 호출(page 6 이하까지)
      */}
      <div className={cn('product-list')}>
        {data.map((product,i) => 
          <div className={cn(`product`)} key={i}>
            <div className={cn(`product-image`)} onClick={() => clickAddingProductShoppingCart()}>
              <img src={`https://image.wingeat.com/${product.image}`} alt={`product-${product.itemName}`} />
            </div>
            <div className={cn(`product-name`)}>
              <span>{product.itemName}</span>
            </div>
            <div className={cn(`product-price`)}>
              <span>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
            </div>
          </div>)}
      </div>
    </div>
  );
}

export default List;