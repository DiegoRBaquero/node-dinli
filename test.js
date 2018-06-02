const assert = require('assert')
const dinli = require('./')
const fetch = require('node-fetch')

dinli('https://www.google.com/').then(result => {
  assert(result.id, 'Has ID')
  assert(result.shortUrl, 'Has shortUrl')
  assert(result.id.length === 8, 'ID of 8 chars')
  assert(result.shortUrl.includes('https://din.li/'), 'Correct base URL')
  fetch(result.shortUrl).then(result => {
    assert(result.url === 'https://www.google.com/', 'Short URL redirects to long URL')
  }).catch(e => {
    assert.fail(e)
  })
}).catch(e => {
  assert.fail(e)
})
