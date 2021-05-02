import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverView from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className='shop-page'>
      <Route path={`${match.path}`} component={CollectionsOverView} />
    </div>
  );
};

export default ShopPage;
