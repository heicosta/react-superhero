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
                    <div>
                        <h3> TOP Cyro[R0x] Heroes =DDD</h3>
                    </div>
                    <br/>
                    <div className="col-md-12" style={stylesApp}>
                        <HeroList/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <HeroDetail/>
                    </div>
                </div>
                <br/>
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
