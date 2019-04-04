import React from 'react';

export default ({ hero: { id, name, powerstats, biography, image } }) => {
  return (
      <div className="card">
          <div className="card-header">
              {name}
          </div>
          <div className="card-body">
              <img className="card-img-top" src={image.url} alt="Hero Card"/>
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Favorite</a>
          </div>
      </div>
  );
};