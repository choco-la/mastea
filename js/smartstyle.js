/* Inject the stylesheet for smartphone. */
(() => {
  'use strict'
  const smartStyle = document.createElement('style')
  smartStyle.type = 'text/css'
  document.getElementsByTagName('head')[0].appendChild(smartStyle)


  const ruleList = [
    '@media (min-width: 360px) {.columns-area {padding: 0}}',
    '@media (min-width: 360px) {.tabs-bar {margin: 0}}',
    '@media (min-width: 360px) {.tabs-bar {height: 2em}}',
    '@media (min-width: 360px) {.tabs-bar {font-size: 90%}}',
    '@media (min-width: 360px) {.tabs-bar__link {padding: 0}}',
    '@media (min-width: 360px) {.tabs-bar {line-height: 1.2em}}',
    '@media (min-width: 360px) {.tabs-bar__link {font-size: unset}}',
    '@media (min-width: 360px) {.column-header {display: none}}',
    '@media (min-width: 360px) {.status-list {line-height: normal}}',
    '@media (min-width: 360px) {.status-list {font: initial}}',
    '@media (min-width: 360px) {.status {padding-top: 0}}',
    '@media (min-width: 360px) {.status {padding-bottom: 0}}',
    '@media (min-width: 360px) {.status__action-bar {margin-top: 0}}',
    '@media (min-width: 360px) {.media-gallery {height: 4em !important}}'
  ]

  for (let indx = 0; indx < ruleList.length; indx++) {
    smartStyle.sheet.insertRule(ruleList[indx], indx)
  }
})()
