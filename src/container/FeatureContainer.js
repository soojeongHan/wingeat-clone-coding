import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feature from '../components/feature/Feature';
import { getFeature } from '../redux/modules/shopping';

/* 
  Feature 데이터를 서버로부터 가져온다.
*/
const FetchFeatureData = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFeature());
  }, [dispatch]);

  const feature = useSelector(state => state.shopping.feature);

  return {
    feature
  };
};

/* 
  Carousel 방식의 Slider 구현.
  - autoPlay(true) && isMoving(true) 조건에 맞아, setTimeout 함수가 실행된다.
    1) 3000ms 시간이 흐른 후, 현재 사진의 인덱스를 나타내는 변수의 상태를 +1 더해서 변화시킨다.
      (변수의 상태를 변화시켰기 때문에, 3초후에 useEffect의 deps로 들어간 변수가 변화하여 다시 실행한다. 즉, 조건이 충족되는 한 3초마다 함수가 실행된다.)
    2) 움직이는지 확인하는 변수(isMoving)의 상태를 false로 변화시킨다.
      - 변화를 감지하고, useEffect에서 다시 true로 상태를 변화.
      - 순서대로 넘어가고, setTimeout 함수가 연달아 호출되어 몇 개씩 넘어가버리지 않게 트리거 역할을 한다.
*/
const SliderFeature = () => {
  // Slider AutoPlay 
  const [autoPlay, setAutoPlay] = React.useState(true);
  const [isMoving, setIsMoving] = React.useState(true);
  const [currentFeatrue, setCurrentFeature] = React.useState(1);

  React.useLayoutEffect(() => {
    setIsMoving(() => true)
  }, [isMoving]);

  React.useLayoutEffect(() => {
    let id;
    if(autoPlay && isMoving) {
      id = setTimeout(() => {
        setCurrentFeature((prevIndex) => prevIndex + 1 > 5 ? 1 : prevIndex + 1);
        setIsMoving(() => false);
       }, 3000);
    }
    // 컴포넌트 언마운트 => setTimeout 함수 clear
    return () => {
      clearTimeout(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, currentFeatrue]);

  // mobile 전환 시, 슬라이더에 dot에서 number로 전환.
  // resize 이벤트에 소모되는 값을 줄이고자 setTimeout을 통해서 실행.
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      let timer;
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsMobile(window.innerWidth < 700 ? true : false);
      }, 100);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Dot을 클릭하면, 위치에 따른 이미지 표시
  const clickMoveFeatureImage = React.useCallback((index) => {
    setCurrentFeature(() => index);
  }, []);

  return {
    currentFeatrue, isMobile,
    clickMoveFeatureImage, setAutoPlay
  }
}

const FeatureContainer = () => {
  const {feature} = FetchFeatureData();
  const {currentFeatrue, clickMoveFeatureImage, isMobile} = SliderFeature();

  return (
    <Feature 
      data={feature || []} currentFeatrue={currentFeatrue} isMobile={isMobile}
      clickMoveFeatureImage={clickMoveFeatureImage}/>
  );
}

export default FeatureContainer;