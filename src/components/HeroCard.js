import React from 'react';

const styles = {
    cursor: 'pointer'
};

export default ({ hero, onDetailHero }) => {
  return (
      <div className="col-sm-2">
        <div className="card">
            <a onClick={() => onDetailHero(hero)} style={styles}>
                <img className="card-img-top" src={hero.image.url} alt="Hero Card"/>
            </a>
        </div>
      </div>
  );
};