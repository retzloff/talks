import React, { Component } from 'react'
import './EventItem.css'

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
    console.log(this.state.showDetails)
  }

  render() {
    var event = this.props.event;

    return (
      <li className="eventItem" onClick={this.handleClick}>
        <div className="time">{event.times.startsAt} - {event.times.endsAt}</div>
        <div className="title">{event.title || event.break}</div>
        { event.speaker
          ? <div className="speaker">{event.speaker}</div>
          : null
        }
      </li>
    )
  }
}

export default EventItem;
