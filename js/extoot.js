/* Register toot posting eventlistener. */
(function() {
  'use strict'

  const post = (url, token, data) => {
    const HTTPHeaders = new Headers()
    HTTPHeaders.append('Content-Type', 'application/json; charset=utf-8')
    HTTPHeaders.append('Authorization', `Bearer ${token}`)
    const conf = {
      body: data,
      headers: HTTPHeaders,
      method: 'POST'
    }
    const request = new Request(url, conf)
    return content.fetch(request)
  }

  const initState = JSON.parse(document.getElementById('initial-state').textContent)
  let bearerToken = initState.meta['access_token']
  const defaultPrivacy = initState.compose['default_privacy']

  const tootURL = `${location.origin}/api/v1/statuses`

  // Use custom token.
  chrome.storage.local.get(location.hostname, (item) => {
    if (item[location.hostname].bearerToken) {
      bearerToken = item[location.hostname].bearerToken
    }
  })

  const exttoottext = document.getElementsByClassName('extoottext')[0]
  const exttootbtn = document.getElementsByClassName('extootbtn')[0]

  const sendToot = () => {
    const data = {
      status: exttoottext.value,
      in_reply_to_id: null,
      media_ids: [],
      sensitive: false,
      spoiler_text: '',
      visibility: defaultPrivacy,
    }

    return post(tootURL, bearerToken, JSON.stringify(data))
  }

  const asyncPost = () => {
    if (exttoottext.value.trim() === '') return
    exttootbtn.disabled = 'true'
    sendToot()
    .then((resp) => {
      console.log(resp)
      exttootbtn.disabled = ''
      exttoottext.value = ''
    })
    .catch((err) => {
      console.error('ERROR: %s %s', err.status, err.statusText)
    })
  }

  exttootbtn.addEventListener('click', asyncPost, false)
})()
