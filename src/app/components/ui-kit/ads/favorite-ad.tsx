import React from 'react';
import FavoriteAdImage from 'assets/images/favorite-ad.svg';

import './style.scss';

export const FavoriteAd = () => {
  return (
    <div className="favorite-ad">
      <img src={FavoriteAdImage} alt="ad" />
      <div>
        <div>
          <span>Free delivery</span>
          <span>May 10 - June 21</span>
        </div>
      </div>
    </div>
  );
};
