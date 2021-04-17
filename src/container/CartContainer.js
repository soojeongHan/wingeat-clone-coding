import React from 'react';
import Cart from '../components/cart/Cart';

const CartContainer = () => {
  const [data, setData] = React.useState(null);
  const [paymentPrice, setPaymentPrice] = React.useState(0);

  React.useEffect(() => {
    ((localStorage) => {
      const result = [];
      for(const key of Object.keys(localStorage)) {
        const item = localStorage.getItem(key);
        if(item) {
          const obj = Object.assign(JSON.parse(item), {
            id: key,
          });
          result.push(obj);
        }
      }
      setData(() => result);
    })(localStorage);
  }, []);

  React.useEffect(() => {
    if(data) {
      setPaymentPrice(() => 
        data.reduce((sum,item) => 
          item.selected ? sum+(item.count * item.price) : sum
        , 0)
      );
    }
  }, [data]);

  // 장바구니에서 제품 삭제하는 함수.
  const clickRemoveProductCart = React.useCallback((id) => {
    localStorage.removeItem(id);
    setData(() => data.filter(item => item.id !== id));
  }, [data]);
  
  // 결제할 제품을 선택하는 함수.
  const toggleProductPayment = React.useCallback((id) => {
    setData(() => 
      data.map(item => item.id === id ? {...item, selected: !item.selected} : {...item})
    )
    const item = JSON.parse(localStorage.getItem(id));
    item.selected = !item.selected;
    localStorage.setItem(id, JSON.stringify(item));
  }, [data]);

  // 제품의 수량을 증가 / 감소 시키는 함수.
  const handleCountingProduct = React.useCallback((e, id) => {
    const number = Number(e.target.dataset.value);
    if(number) {
      setData(() => 
        data.map(item => item.id === id 
          ? {...item, count: item.count + number > 0 ? item.count + number : 1} 
          : {...item})
      )
      const item = JSON.parse(localStorage.getItem(id));
      const count = Number(item.count) + number;
      item.count = count > 0 ? count : 1;
      localStorage.setItem(id, JSON.stringify(item));
    }
  }, [data]);

  return (
    <Cart 
    data={data || []} paymentPrice={paymentPrice}
    clickRemoveProductCart={clickRemoveProductCart} toggleProductPayment={toggleProductPayment} 
    handleCountingProduct={handleCountingProduct}
    />
  );
}

export default CartContainer;