import React from 'react';

export default ({ hero, isFavorite, onDetailHero }) => {
  return (
      <div className="col-sm-2">
        <div className="card">
            <a onClick={() => onDetailHero(hero)}>
                <img className="card-img-top" src={hero.image.url} alt="Hero Card"/>
            </a>
        </div>
      </div>
  );
};