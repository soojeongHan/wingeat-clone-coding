### 요구사항 정의

### **A. Wing Eat 메인 페이지 간소화 버전 만들기**

1. **Header** 영역 구현 ✔️
    - "Wing Eat" 로고 및 장바구니 페이지로 이동 가능한 버튼 생성 ✔️
    - 장바구니 버튼 옆에는 사용자가 담은 상품의 개수를 표기합니다. ✔️

2. **Feature** 영역 구현 ✔️
    - Carousel 방식으로 렌더링 하고 Autoplay ON 합니다. ✔️

3. **List** 영역 구현 ✔️
  - page의 init 값은 1로 하고 6이 넘어가지 않게 소스코드로 방어합니다. ✔️
  - Infinite Scroll 기능 : 스크롤을 내려 다음 상품을 볼 수 있게 합니다 ✔️
      - page 1부터 시작하여 6까지 page를 1씩 증가시켜 API를 호출 ✔️
      - page 6까지 모두 불러 오면 호출하지 않도록 합니다. ✔️
  - 렌더링된 상품의 이미지를 클릭하면 장바구니에 추가합니다. ✔️
      - 장바구니에 해당 상품이 추가되었다는 alert을 간단히 띄워 주세요 ✔️
      - 장바구니는 LocalStorage를 사용해서 구현 ✔️
      - 클릭 시 수량은 1씩 추가 된다고 가정합니다. ✔️
      - 상품의 id는 고유 하므로 이미 장바구니에 담긴 상품이 있다면 수량만 1씩 늘립니다. ✔️
      - 장바구니에 담긴 상품의 개수 만큼 **Header** 영역에 있는 장바구니 숫자를 변경합니다. ✔️

4. **Responsive 구현 (반응형)**
  - 리스트의 행마다 보여주는 상품의 개수 변화 ✔️
  - Header 영역에 있는 장바구니의 위치가 로고의 오른쪽으로 변경 ✔️
  - Feature 부분에 있는 Dot이 Number로 변경 ✔️

### B. 장바구니 페이지 만들기

1. 메인 페이지의 "장바구니" 버튼을 누르면 장바구니 페이지로 이동합니다. ✔️
2. 장바구니 페이지의 라우팅은 /cart 입니다. ✔️
3. 장바구니에 담은 상품이 없다면 **"장바구니에 담긴 상품이 없음"** 을 알리는 간단한 메시지를 보여 줍니다.✔️
4. 장바구니에 담은 상품을 다음과 같이 간단한 UI로 보여 줍니다. ✔️

5. 우측 "**결제 예정 금액**" 에는 각 장바구니의 (금액 * 수량)의 합이 계산되도록 합니다.✔️
6. 장바구니의 개수를 조절하면 우측 "**합계**" 부분과 "**결제 예정 금액**"이 변경되어야 합니다. (개수는 1미만으로 갈 수 없도록 예외 처리 합니다) ✔️
7. 장바구니 좌측 상단 체크 박스 구현✔️
    - Checked 상태라면 "결제 예정 금액"에 포함 ✔️
    - Checked 상태가 아니라면 "결제 예정 금액"에서 제외 ✔️
 8. 장바구니 우측 상단 x 버튼 ✔️
    - 클릭 시 장바구니에서 제거됩니다. ✔️
    - 장바구니 제거와 함께 "결제 예정 금액"이 업데이트 되어야 합니다. ✔️
9. 장바구니 화면은 Responsive가 가능하다면 구현합니다. UI는 자유입니다. ✔️