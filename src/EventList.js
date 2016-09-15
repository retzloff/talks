import React, { Component } from 'react'
import './EventList.css'

import EventItem from './EventItem'

class EventList extends Component {
  render() {
    var events = this.props.schedule.events
    var eventItems =
      events.map(function (event, index) {
        return (
          <EventItem key={index} event={event} />
        )
      })

    return (
      <ul id="eventList">
        {eventItems}
      </ul>
    );
  }
}

export default EventList;
