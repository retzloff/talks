import React, { Component } from 'react'
import './App.css'

import TalkItemList from './TalkItemList'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="http://www.nationjs.com/assets/conference/NationJ2015LogoGraphic-ac7c6b6139e66544bcb7f4788df3e0e3.png" alt='NationJS Logo' />
          <h1>NationJS</h1>
        </header>
        <TalkItemList />
      </div>
    )
  }
}

export default App
