(function () {
  'use strict'
  const instanceList = [
    'mstdn.jp',
    'pawoo.net',
    'music.pawoo.net',
    "kiritan.work",
    "best-friends.chat",
    "knzk.me",
    'friends.nico'
  ]
  for (const instance of instanceList) {
    // Replace '.' for name attribute.
    const name = instance.replace(/\./g, '_')
    const input = document.querySelector(`input[name="${name}"]`)
    let savedData
    chrome.storage.local.get(instance, (item) => {
      if (Object.keys(item).length) {
        savedData = item[instance]
        input.value = savedData.bearerToken
      } else {
        savedData = {'bearerToken': ''}
      }
    })


    input.addEventListener('input', () => {
      savedData.bearerToken = input.value
      let newData = {}
      newData[instance] = savedData
      chrome.storage.local.set(newData)
    })
  }
})()
