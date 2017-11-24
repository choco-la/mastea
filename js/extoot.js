/* Register toot posting eventlistener. */
(function() {
  'use strict'
  const initState = JSON.parse(document.getElementById('initial-state').textContent)
  const bearerToken = initState.meta['access_token']
  const defaultPrivacy = initState.compose['default_privacy']

  const tootURL = `${location.origin}/api/v1/statuses`


  const exttoottext = document.getElementsByClassName('extoottext')[0]
  const exttootbtn = document.getElementsByClassName('extootbtn')[0]

  const sendToot = () => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', tootURL)
      xhr.setRequestHeader('Authorization', 'Bearer ' + bearerToken)
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
      xhr.timeout = '3000'
      xhr.responseType = 'json'


      const data = {
        status: exttoottext.value,
        in_reply_to_id: null,
        media_ids: [],
        sensitive: false,
        spoiler_text: '',
        visibility: defaultPrivacy,
      }

      xhr.onloadend = () => {
        exttootbtn.disabled = ''
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            resp: xhr.response
          })
        }
        else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          })
        }
      }

      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        })
      }

      xhr.send(JSON.stringify(data))
    })
  }

  const asyncPost = () => {
    exttootbtn.disabled = 'true'
    sendToot()
    .then((resp) => {
      console.log(resp)
      exttoottext.value = ''
    })
    .catch((err) => {
      console.error('ERROR: %s %s', err.status, err.statusText)
    })
  }

  exttootbtn.addEventListener('click', asyncPost, false)
})()
