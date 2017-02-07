import React, { Component } from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

import sampleFishes from '../sample-fishes';

class App extends Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      
      fishes: {

      },
      order: {

      }

    };
  }

  addFish(fish) {
    //update our state
    const fishes = {...this.state.fishes};

    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    // set state
    // note: You can use { fishes } instead of { fishes: fishes } if the
    // the namespacing is the same.
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
       
        <div className="menu">
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory 
         addFish={this.addFish}
         loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;