import React, { Component } from 'react';
import Printer, { print } from 'react-pdf-print'
import 'babel-core/register'
import 'babel-polyfill'
const ids = ['1']

class pdf extends Component{
  render() {
    return (
      <div className='App'>
        <Printer>
            <div id={ids[0]} >
                Hello World!
            </div>
        </Printer>
        <input type='button' 
          onClick={() => print(ids)} value='Stampa' />
      </div>
    )
  }
}

export default pdf