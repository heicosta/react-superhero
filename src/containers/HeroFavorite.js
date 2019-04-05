import React from 'react';
import { connect } from 'react-redux';
import HeroCard from '../components/HeroCard';
import { heroUnfavorite }from '../actions/index'


function HeroFavorite({ favorites, onUnfavoriteHero }) {
    if(!favorites || !favorites.length) {
        return (
            <div>
                No Favorite Heroes selected =/
            </div>
        )
    }
    return (
        <div className="row">
            {favorites.map(hero => {
                return (
                    <HeroCard hero={ hero } onUnfavoriteHero={ onUnfavoriteHero } key={ hero.id } />
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state.heroes,
        favorites: state.heroes.favorites
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUnfavoriteHero: hero => {
            dispatch(heroUnfavorite(hero));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(HeroFavorite);