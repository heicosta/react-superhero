import React, { Component } from 'react';
import HeroList from './containers/HeroList';
import HeroDetail from './containers/HeroDetail';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 40
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={ stylesApp }>
          <div className="col-md-12">
            <HeroList />
          </div>
        </div>
        <div className="row" style={ stylesApp }>
          <div className="col-md-12">
            <HeroDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
