import React from 'react';
import styles from './Feature.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Feature = ({
  data,
  clickMoveFeatureImage
}) => {
  return (
    <div className={cn('feature')}>
      <div className={cn('feature-products')}>
        <div className={cn('feature-products-images')}>
          {data.map((element,i) => 
            <img key={i} src={`https://image.wingeat.com/${element.image}`} alt="product-img"/>
          )}
        </div>
        <div className={cn('feature-products-slider')}>
          {/* TODO : 5개를 임시 렌더링 => 수정 */}
          {Array(5).fill(0).map((_,i) => 
            <div className={cn ('feature-products-slider-dot')} key={i} onClick={() => clickMoveFeatureImage()}></div>)
          }  
        </div>
      </div>
    </div>
  );
}

export default Feature;