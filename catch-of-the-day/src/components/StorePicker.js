import React, { Component } from 'react';

import { getFunName } from '../helpers';

class StorePicker extends Component {

  constructor() {
    super();
  }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the url');
    // First grab the text from the box

    const storeId = this.storeInput.value;

    console.log(this.storeInput.value);
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }
  
  render() {
    return (
      <div>

        <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>
          <h2>Please Enter a Store</h2>
          <input type='text'
           required
           placeholder='Store Name'
           defaultValue={getFunName()}
           ref={ (input) => { this.storeInput = input } } />
          <button type='submit'>Visit Store ➞</button>
        </form>

      </div>
    );
  }

}

StorePicker.contextTypes={
  router: React.PropTypes.object
}

export default StorePicker;