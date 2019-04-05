import React, {Component} from 'react';
import HeroList from './containers/HeroList';
import HeroDetail from './containers/HeroDetail';
import HeroFavorite from './containers/HeroFavorite';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
    marginTop: 40
};

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={stylesApp}>
                    <h3> Top Cyro[R0x] Heroes </h3>
                    <div className="col-md-12">
                        <HeroList/>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12">
                        <HeroDetail/>
                    </div>
                </div>
                <div className="row">
                    <h3> Favorites </h3>
                    <div className="col-md-12">
                        <HeroFavorite/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
