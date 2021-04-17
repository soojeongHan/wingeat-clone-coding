import React from 'react';
import styles from './Feature.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Item = ({
  prev, cur, next, currentFeatrue, imageUrl
}) => {
  return (
    <img 
      className={cn(
        'feature__products__image',
        prev === currentFeatrue && "prev",
        cur === currentFeatrue && "active",
        next === currentFeatrue && "next",
      )} 
      src={`https://image.wingeat.com/${imageUrl}`}
      alt="product-img"/>
  );
}

const Feature = ({
  data, currentFeatrue, isMobile,
  clickMoveFeatureImage
}) => {
  return (
    <div className={cn('feature')}>
      <div className={cn('feature__products')}>
        <div className={cn('feature__products__images-wrapper')}>
          <div className={cn('feature__products__slider')}>
            {isMobile 
            ? <div className={cn('feature__products__slider__number')}>{`${currentFeatrue}/${data.length}`}</div>
            : Array(data.length).fill(0).map((_,i) => 
              <div className={cn('feature__products__slider__dot', i+1 === currentFeatrue && "active")} key={i} onClick={() => clickMoveFeatureImage(i+1)}></div>)
            }
          </div>
          <div className={cn('feature__products__images')}>
            {data.map((element,i) => {
                const length = data.length;
                const index = i+1;
                return <Item key={i} 
                  currentFeatrue={currentFeatrue}
                  prev={index === length ? 1 : index + 1} 
                  cur={index} 
                  next={(index === 1 ? length : index - 1)}
                  imageUrl={element.image}
                />
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;