import React from 'react';
import styles from './Cart.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Item = ({
  product, 
  toggleProductPayment, clickRemoveProductCart, handleCountingProduct
}) => {
  return (
    <div className={cn('cart__product')}>
      {/* PRODUCT HEADER */}
      <div className={cn('cart__product__header')}>
        <div className={cn('cart__product__header__info')}>
          <input type="checkbox" checked={product.selected} onChange={() => toggleProductPayment(product.id)}/>
          {product.itemName}
        </div>
        <div className={cn('cart__product__header__remove')}>
          <button onClick={() => clickRemoveProductCart(product.id)}>X</button>
        </div>
      </div>

      {/* PRODUCT BODY */}
      <div className={cn('cart__product__body')}>
        <div className={cn('cart__product__body__image')}>
          <img src={`https://image.wingeat.com/${product.image}`} alt="img" />
        </div>
        <div className={cn('cart__product__body__info')}>
          <div className={cn('cart__product__body__price')}>
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </div>
          <div className={cn('cart__product__body__count')} onClick={(e) => handleCountingProduct(e, product.id)}>
            <button data-value="-1">-</button>
            <div className={cn('cart__product__body__display__count')}>{product.count}</div>
            <button data-value="+1">+</button>
          </div>
        </div>
      </div>
      
      {/* PRODUCT FOOTER */}
      <div className={cn('cart__product__footer')}>
        <p>합계: {(product.price * product.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
      </div>
    </div>
  )
}

const Cart = ({
  data, paymentPrice,
  clickRemoveProductCart, toggleProductPayment, handleCountingProduct
}) => {
  return (
    <div className={cn('cart')}>
      <div className={cn('cart__subject')}>장바구니</div>
      <div className={cn('cart__product-list-wrapper')}>
        <div className={cn('cart__product-list')}>
          {data.length 
            ? data.map((product,i) => 
                <Item key={i} product={product} toggleProductPayment={toggleProductPayment} clickRemoveProductCart={clickRemoveProductCart} handleCountingProduct={handleCountingProduct}/>  
              )
            : <div className={cn('cart__product-list__not-found')}>장바구니에 담긴 상품이 없음</div>
          } 
        </div>

        <div className={cn('cart__product-list__sum-account')}>
          <div className={cn('cart__product-list__display-account')}>
            <span>결제 예정 금액</span>
            <span className={cn('cart__product-list__payment-account')}>{paymentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
          </div>
          <div className={cn('cart__product-list__payment')}>
            <button>주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;