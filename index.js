const fetch = require('node-fetch')

module.exports = (url) => {
  return fetch('https://din.li', {
    method: 'POST',
    body: JSON.stringify({
      url: url.toString()
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
