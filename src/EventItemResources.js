import React from 'react'
import './EventItemResources.css'

const EventItemResources = (props) => {
  var resources = props.resources

  if (resources) {
    var resourceElements = resources.map((resource) => {
      return (
        <div className="resourceItem">
          <dt>{resource.title}</dt>
          <dd><a href={resource.url}>{resource.url}</a></dd>
        </div>
      )
    })

    return (
      <div className="eventItemResources">
        <p>Resources</p>
        <dl>{resourceElements}</dl>
      </div>
    )
  } else {
    return null
  }
}

export default EventItemResources;
