import React from 'react';

export default ({ hero, onUnfavoriteHero }) => {

  return (
      <div className="col-sm-2">
          <div className="card">
              <a className="btn btn-danger" onClick={() => onUnfavoriteHero(hero)}>Remove</a>
              <div className="card-body">
                  <img className="card-img-top" src={hero.image.url} alt="Favorite image"/>
              </div>
          </div>
      </div>
  );
};