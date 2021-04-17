import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import { countingCart } from '../redux/modules/shopping';

const HeaderContainer = () => {
  // TODO : local storage에서 데이터 가져와서 숫자를 카운팅하는 변수.
  // list와 header 컨테이너에서 사용해서, 전역으로 상태관리를 사용해야한다. => Redux
  const dispatch = useDispatch();
  const countProductCart = useSelector(state => state.shopping.countCart);
  React.useEffect(() => {
    dispatch(countingCart(localStorage.length));
  }, [countProductCart, dispatch]);
  
  // url에 따른 페이지 이동, 1) 로고 2) 장바구니
  const clickMovePage = React.useCallback((url) => {
    dispatch(push(url));
  }, [dispatch]);
  
  return (
    <Header countProductCart={countProductCart} handleMovePage={clickMovePage}/>
  );
}

export default HeaderContainer;