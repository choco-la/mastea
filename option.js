(function () {
  'use strict'
  const input = document.querySelector('input[name="bearer-token"]')
  chrome.storage.local.get('bearerToken', (item) => {
    if (item.bearerToken) {
      input.value = item.bearerToken
    }
  })


  input.addEventListener('input', () => {
    chrome.storage.local.set({'bearerToken': input.value})
  })
})()
