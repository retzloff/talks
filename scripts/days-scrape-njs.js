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
    },
    idify: function (value) {
      return value.toLowerCase().replace(' ', '-')
    }
  }
})

xray('http://www.nationjs.com/program', {
  days: xray('ul.schedule', [{
    date: 'li.date | removeNewlines',
    events: xray('li.schedule span.talk', [{
      break: 'span.break | removeNewlines',
      title: 'span.talk-title | removeNewlines',
      speaker: 'span.speaker-name | removeNewlines',
      speakerId: 'span.speaker-name | removeNewlines | idify',
      times: 'span.time | removeNewlines | parseTimes',
    }])
  }])
}).write('days.json')
