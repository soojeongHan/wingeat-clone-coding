import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Header = ({
  countProduceCart,
  handleMovePage,
}) => {
  return (
    <div className={cn('header')}>
      
      <div className={cn('header-top')}>
        <div className={cn('header-top-cart')} onClick={() => handleMovePage()}>
          <div className={cn('header-top-cart-count-product')}> 
            {countProduceCart}
          </div>
          <span>장바구니</span>
        </div>
      </div>

      <div className={cn('header-main')}>
        <div className={cn('header-main-logo')} onClick={() => handleMovePage()}>
          <img src="https://image.wingeat.com/logo/images/we_logo_center.png" alt="logo"/>
        </div>
      </div>
    </div>
  );
}

export default Header;