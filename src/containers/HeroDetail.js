import React from 'react';
import { connect } from 'react-redux';
import { heroFavorite }from '../actions/index'

function HeroDetail({ hero, onFavoriteHero }) {
    if(!hero) {
        return (
            <div>
                No Hero selected!
            </div>
        )
    }
    return (
        <div className="card">
            <div className="card-header">
                Name: {hero.name}
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Favorite</a>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
  return {
    ...state,
    hero: state.heroes.hero
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFavoriteHero: hero => {
      dispatch(heroFavorite(hero));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroDetail);