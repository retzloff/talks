const Xray = require('x-ray')
const xray = new Xray({
  filters: {
    removeNewlines: function(value) {
      return typeof value === 'string' ?
        value.replace(/\n/g, '').trim() :
        value
    },
    idify: function (value) {
      return value.toLowerCase().replace(' ', '-')
    }
  }
})

xray('http://www.nationjs.com/program', {
  speakers: xray('.speaker-row', [{
      id: '.speaker-name | removeNewlines | idify',
      name: '.speaker-name | removeNewlines',
      imageURL: '.speaker-column--image img@src',
      personURL: '.speaker-bio a@href',
      twitterName: '.speaker-twitter | removeNewlines',
      twitterProfileURL: '.speaker-twitter a@href',
      bio: '.speaker-bio | removeNewlines',
      title: '.speaker-talk-title | removeNewlines',
      description: '.speaker-talk-description | removeNewlines'
  }])
}).write('speakers.json')
