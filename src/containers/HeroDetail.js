import React from 'react';
import { connect } from 'react-redux';
import { heroFavorite }from '../actions/index'

function HeroDetail({ hero, onFavoriteHero }) {
    if(!hero || !hero.name) {
        return (
            <div></div>
        )
    }
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <img className="card-img-top" src={hero.image.url} alt="Hero Card"/>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name: {hero.name}</h5>
                        <p className="card-text">Bla bla bla</p>
                        <a href="#" onClick={() => onFavoriteHero(hero)} className="btn btn-primary">Favorite</a>
                    </div>
                </div>
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