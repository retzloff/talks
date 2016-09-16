import React from 'react'
import './EventItemResources.css'

const EventItemResources = (props) => {
  var resources = props.resources

  if (resources) {
    var resourceElements = resources.map((resource) => {
      return (
        <li className="resourceItem">
          {resource.title} - <a href={resource.url}>{resource.url}</a>
        </li>
      )
    })

    return (
      <div className="eventItemResources">
        <p>Resources</p>
        <ul>{resourceElements}</ul>
      </div>
    )
  } else {
    return null
  }
}

export default EventItemResources;
