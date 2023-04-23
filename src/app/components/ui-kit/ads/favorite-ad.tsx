import React from 'react';
import FavoriteAdImage from 'assets/images/favorite-ad.svg';

import './style.scss';

export const FavoriteAd = () => {
  return (
    <div className="favorite-ad">
      <img src={FavoriteAdImage} alt="ad" loading="lazy" />
      <div className="favorite-ad-right-side">
        <div className="favorite-ad-right-side-info">
          <span className="favorite-ad-right-side-info-title">
            Free delivery
          </span>
          <span className="favorite-ad-right-side-info-dates">
            May 10 - June 21
          </span>
        </div>
        <button className="favorite-ad-right-side-btn" type="button">
          Order Now
        </button>
      </div>
    </div>
  );
};
