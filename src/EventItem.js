import React, { Component } from 'react'
import './EventItem.css'

import EventItemResources from './EventItemResources'

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    var event = this.props.event;

    return (
      <li className="eventItem" onClick={this.handleClick}>
        <EventTime times={event.times} />
        <EventTitle event={event} />
        <EventSpeaker speaker={event.speaker} />
        <EventItemResources resources={event.resources} />
      </li>
    )
  }
}

const EventTime = (props) => <div className="time">{props.times.startsAt} - {props.times.endsAt}</div>
const EventTitle = (props) => <div className="title">{props.event.title || props.event.break}</div>
const EventSpeaker = (props) => props.speaker ? <div className="speaker">{props.speaker}</div> : null

export default EventItem;
