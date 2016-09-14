import React, { Component } from 'react'
import './TalkItem.css'

class TalkItem extends Component {
  render() {
    return (
      <li className="talkItem">
        <div className="time">xx:xx - xx:xx</div>
        <div className="title">{this.props.talk.title}</div>
        <div className="speaker"><a href="#speaker">{this.props.talk.speaker.name}</a></div>
        <div className="description">{this.props.talk.description}</div>
      </li>
    )
  }
}

export default TalkItem;
