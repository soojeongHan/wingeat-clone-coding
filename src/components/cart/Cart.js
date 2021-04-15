import React from 'react';
import styles from './Cart.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Cart = ({
  data,
  clickRemoveProductCart, toggleProductPayment
}) => {
  return (
    <div className={cn('cart')}>
      <div className={cn('cart__subject')}>장바구니</div>
      <div className={cn('cart__product-list-wrapper')}>
        {/* TODO : 장바구니 상품 리스트 표시
          * 확인 사항
            1) 개수 + 개수 조절 (개수는 1미만으로 갈 수 없도록 예외 처리 합니다)
        */}
        <div className={cn('cart__product-list')}>
          {data.map((product,i) => 
            <div className={cn('cart__product')} key={i}>
              {/* PRODUCT HEADER */}
              <div className={cn('cart__product__header')}>
                <div className={cn('cart__product__header__info')}>
                  <input type="checkbox" onClick={toggleProductPayment}/>
                  {product.itemName}
                </div>
                <div className={cn('cart__product__header__remove')}>
                  <button onClick={() => clickRemoveProductCart()}>X</button>
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
                  <div className={cn('cart__product__body__count')}>
                    <button>-</button>
                    <input defaultValue="1"/>
                    <button>+</button>
                  </div>
                </div>
              </div>
              
              {/* PRODUCT FOOTER */}
              <div className={cn('cart__product__footer')}>
                <p>합계: {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
              </div>
            </div>
          )} 
        </div>

        <div className={cn('cart__product-list__sum-account')}>
          {/* TODO : 총 결제 예정 금액을 표시
            1. list에서 결제하는지 상품인지 확인하고, 합계를 가져와 더해준다.
            2. 주문하기 Button
          */}
          <div className={cn('cart__product-list__display-account')}>
            <span>결제 예정 금액</span>
            <span className={cn('cart__product-list__payment-account')}>{"10000".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
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