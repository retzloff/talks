import React, { Component } from 'react'
import './App.css'

import {days} from './data/days.json'
import {speakers} from './data/speakers.json'

import EventList from './EventList'

class App extends Component {
  render() {
    console.log(speakers)

    return (
      <div>
        <header>
          <h1>
            <img src="http://www.nationjs.com/assets/conference/NationJ2015LogoGraphic-ac7c6b6139e66544bcb7f4788df3e0e3.png" alt='NationJS Logo' />
            NationJS
          </h1>
        </header>
        <main>
          <EventList schedule={days[1]} />
        </main>
        <footer>
          <a href="http://www.nationjs.com">www.nationjs.com</a>|
          <a href="https://github.com/retzloff/talks">Github repo</a>
          </footer>
      </div>
    )
  }
}

export default App
