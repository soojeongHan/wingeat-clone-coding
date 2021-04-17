import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Header = ({
  countProductCart,
  handleMovePage,
}) => {
  return (
    <div className={cn('header')}>
      
      <div className={cn('header__top')}>
        <div className={cn('header__top__cart')} onClick={() => handleMovePage("/cart")}>
          <div className={cn('header__top__cart__count-product')}> 
            {countProductCart}
          </div>
          <span>장바구니</span>
        </div>
      </div>

      <div className={cn('header__main')}>
        <div className={cn('header__main__logo')} onClick={() => handleMovePage("/")}>
          <img src="https://image.wingeat.com/logo/images/we_logo_center.png" alt="logo"/>
        </div>
      </div>
    </div>
  );
}

export default Header;