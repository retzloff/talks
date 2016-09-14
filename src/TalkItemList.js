import React, { Component } from 'react'
import './TalkItemList.css'

import TalkItem from './TalkItem'

import {talks} from './data/talks.json'

class TalkItemList extends Component {
  render() {
    return (
      <ul id="talkItemList">
        {talks.map(function(talk, index) {
           return <TalkItem key={index} talk={talk}/>;
        })}
      </ul>
    );
  }
}

export default TalkItemList;
