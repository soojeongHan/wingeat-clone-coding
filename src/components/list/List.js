import React from 'react';
import styles from './List.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Item = ({
  product, clickAddingProductShoppingCart
}) => {
  const { image, itemName, price } = product;
  return (
  <div className={cn(`product`)}>
    <div className={cn(`product-image`)} onClick={() => clickAddingProductShoppingCart(product)}>
      <img src={`https://image.wingeat.com/${image}`} alt={`product-${itemName}`} />
    </div>
    <div className={cn(`product-name`)}>
      <span>{itemName}</span>
    </div>
    <div className={cn(`product-price`)}>
      <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
    </div>
  </div>
  )
}

const List = ({
  data, loading, fetchMoreRef,
  clickAddingProductShoppingCart
}) => {
  return (
    <div className={cn('list')}>
      {/* SUBJECT */}
      <div className={cn('list-subject')}>
        <p>윙잇 MADE</p>
      </div>

      {/* PRODUCT LIST */}
      <div className={cn('product-list')}>
        {data.map((product,i) => 
          <Item
            key={i}
            product={product}
            clickAddingProductShoppingCart={clickAddingProductShoppingCart}
          /> 
        )}
      </div>
      <div className={cn('fetch-more-ref')} ref={fetchMoreRef} />
    </div>
  );
}

export default List;