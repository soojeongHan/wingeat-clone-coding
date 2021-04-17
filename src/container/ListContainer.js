import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/list/List';
import { getList, countingCart } from '../redux/modules/shopping';

/*
Infitite Scroll
  1) 스크롤이 맨 아래에 위치하면, 데이터를 요청한다.
    - 현재 pageNum이 담긴 상태가 필요하다. -> 전역으로 관리할 필요가 없다. -> List Container에서 관리한다.
    - 뷰포트 맨 끝에 도달하면, 데이터를 추가로 가져와 렌더링한다.
      - How ?
        1. IntersectionObserver를 사용한다.
           - 브라우저 뷰포트(Viewport)와 설정한 요소(Element)의 교차점을 관찰하며, 요소가 뷰포트에 포함되는지 포함되지 않는지, 더 쉽게는 사용자 화면에   
             지금 보이는 요소인지 아닌지를 구별하는 기능을 제공한다.
          - 리스트를 렌더링할 때, 맨 끝에 요소를 두고, 해당 요소가 뷰포트에 보일 때, 추가 데이터를 요청한다.
        2. Throttle을 사용한다.
          - 이벤트를 일정한 주기마다 발생하도록 하는 기술이다.
  2) 데이터를 렌더링한다.
*/

const FetchMoreList = (dispatch) => {
  const [pageNumber, setPageNumber] = React.useState(1);

  React.useLayoutEffect(() => {
    dispatch(getList(pageNumber));
  }, [dispatch, pageNumber]);

  const target = React.useRef(null);

  const {list, loading} = useSelector(state => state.shopping);
  
  React.useLayoutEffect(() => {
    let observer;
    if(target.current) {
      const lastPage = 6;
      observer = new IntersectionObserver(([{isIntersecting}]) => {
        // 관찰 대상이 루트 요소와 교차 상태로 들어갔으면, 페이지를 증가시킨다(lastPage 이하까지)
        if(isIntersecting) 
          setPageNumber((prevPageNumber) => prevPageNumber < lastPage ? prevPageNumber + 1 : prevPageNumber);
      });
      observer.observe(target.current);
    }
    // 컴포넌트가 언마운트될때, 옵저버 객체가 존재하면 관찰 중지.
    return () => observer && observer.disconnect();
  }, [target]);

  return {
    list, loading,
    target
  }
} 

const ListContainer = () => {
  /* 
    장바구니에 상품이 담기는 과정을 서버로 보내지 않고 로컬에서 처리한다고 하면,
    LocalStorage를 이용하여 장바구니 처리를 하고,
    Header 쪽에서의 장바구니 Counting은 Redux로 처리한다.
  */
  const dispatch = useDispatch();

  const clickAddingProductShoppingCart = React.useCallback((product) => {
    const copied = {...product}; // 객체 안에 call by Reference 되는 값이 없으니 Shallow Copy.
    const id = copied.id;
    delete copied.id;
    const getItem = localStorage.getItem(id);

    // 기존 localStorage에 상품이 있다면, 상품의 개수만 +1 처리한다.
    copied.count = getItem ? JSON.parse(getItem).count + 1 : 1;
    copied.selected = false;
    localStorage.setItem(id, JSON.stringify(copied));
    const length = localStorage.length;
    dispatch(countingCart(length));

    alert('장바구니에 상품이 추가되었습니다.');
  }, [dispatch]);
  
  const {list, loading, target} = FetchMoreList(dispatch);

  return (
    <List
      data={list || []} loading={loading} fetchMoreRef={target}
      clickAddingProductShoppingCart={clickAddingProductShoppingCart}
    />
  );
}

export default ListContainer;