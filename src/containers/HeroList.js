import React from 'react';
import { connect } from 'react-redux';
import HeroCard from '../components/HeroCard';
import { heroDetail }from '../actions/index'

function HeroList({ heroes, onDetailHero }) {

    if(!heroes || !heroes.length) {
        return (
            <div>
                Now Loading SuperHeroes from http://superheroapi.com ...
            </div>
        )
    }
    return (
      <div className="row">
          {heroes.map(hero => {
              return (
                  <HeroCard hero={ hero } onDetailHero={ onDetailHero } key={ hero.id } />
              );
          })}
      </div>
    );
}

const mapStateToProps = state => {
  return {
    ...state,
    heroes: state.heroes.heroes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDetailHero: hero => {
      dispatch(heroDetail(hero));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList);