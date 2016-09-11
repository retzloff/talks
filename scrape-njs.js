const Xray = require('x-ray')
const xray = new Xray({
  filters: {
    removeNewlines: function(value) {
      return typeof value === 'string' ?
        value.replace(/\n/g, '').trim() :
        value
    },
    parseTimes: function(value) {
      let timePattern = /(\d{1,2}:\d{2})+/g
      let startsAt = null;
      let endsAt = null;

      let results = (timePattern.exec(value))
      results !== null ? startsAt = results[0] : startsAt = null
      results = (timePattern.exec(value))
      results !== null ? endsAt = results[0] : endsAt = null

      return {startsAt, endsAt}
    }
  }
})

xray('http://www.nationjs.com/program', {
  events: xray('ul.schedule', [{
    date: 'li.date | removeNewlines',
    event: xray('li.schedule span.talk', [{
      break: 'span.break | removeNewlines',
      title: 'span.talk-title | removeNewlines',
      times: 'span.time | removeNewlines | parseTimes',
    }])
  }])
}).write('data/schedule.json')

xray('http://www.nationjs.com/program', {
  talks: xray('.speaker-row', [{
    title: '.speaker-talk-title | removeNewlines',
    description: '.speaker-talk-description | removeNewlines',
    speaker: {
      name: '.speaker-name | removeNewlines',
      imageURL: '.speaker-column--image img@src',
      personURL: '.speaker-bio a@href',
      twitterName: '.speaker-twitter | removeNewlines',
      twitterProfileURL: '.speaker-twitter a@href',
      bio: '.speaker-bio | removeNewlines'
    }
  }])
}).write('data/talks.json')