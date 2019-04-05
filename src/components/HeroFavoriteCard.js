import React from 'react';

export default ({ hero, onUnfavoriteHero }) => {

  return (
      <div className="col-sm-2">
          <div className="card">
              <button  type="button" className="btn btn-danger" onClick={() => onUnfavoriteHero(hero)}>
                  REMOVE
              </button>
              <div className="card-body">
                  <img className="card-img-top" src={hero.image.url} alt="Favorite image"/>
              </div>
          </div>
      </div>
  );
};