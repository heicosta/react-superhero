import React from 'react';

export default ({ hero, onUnfavoriteHero }) => {

  return (
      <div className="col-sm-2">
          <div className="card">
              <img className="card-img-top" src={hero.image.url} alt="Card image cap"/>
              <div className="card-body">
                  <a href="#" className="btn btn-primary" onClick={() => onUnfavoriteHero(hero)}>Remove</a>
              </div>
          </div>
      </div>
  );
};