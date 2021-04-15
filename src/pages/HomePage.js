import React from 'react';
import HeaderContainer from '../container/HeaderContainer';
import ListContainer from '../container/ListContainer';
import FeatureContainer from '../container/FeatureContainer';

const HomePage = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <FeatureContainer />
      <ListContainer />
    </React.Fragment>
  );
}

export default HomePage;