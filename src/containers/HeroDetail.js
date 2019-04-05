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
            <div className="col-3">
                <h5 className="card-title">Name: {hero.name}</h5>
                <img className="card-img-top"  src={hero.image.url} alt="Hero Card"/>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-6">
                        <h5 className="card-title">Abilities</h5>
                        <p className="card-text">Intelligence: {hero.powerstats.intelligence}</p>
                        <p className="card-text">Strength: {hero.powerstats.strength}</p>
                        <p className="card-text">Speed: {hero.powerstats.speed}</p>
                        <p className="card-text">Durability: {hero.powerstats.durability}</p>
                        <p className="card-text">Power: {hero.powerstats.power}</p>
                        <p className="card-text">Speed: {hero.powerstats.combat}</p>
                    </div>
                    <div className="col-6">
                        <h5 className="card-title">Biography</h5>
                        <p className="card-text">Full Name: {hero.biography['full-name']}</p>
                        <p className="card-text">Alter Egos: {hero.biography['alter-egos']}</p>
                        <p className="card-text">Place of Birth: {hero.biography['place-of-birth']}</p>
                        <p className="card-text">First Appearance> {hero.biography['"first-appearance":']}</p>
                        <p className="card-text">Publisher: {hero.biography.publisher}</p>
                        <p className="card-text">Alignment: {hero.biography.alignment}</p>
                    </div>
                </div>
            </div>
            <div className="col-1">
                <a onClick={() => onFavoriteHero(hero)} className="btn btn-primary">Favorite</a>
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