/* Create a toot textarea. */
(() => {
  'use strict'
  const extTootBox = document.createElement('div')
  extTootBox.style.position = 'fixed'
  extTootBox.style.display = 'table'
  // Spoiler has 100 for z-index value.
  extTootBox.style.zIndex = '120'
  extTootBox.style.width = '100%'
  extTootBox.style.bottom = '0'


  const extTextAreaDiv = document.createElement('div')
  extTextAreaDiv.style.display = 'table-cell'
  extTextAreaDiv.style.width = '80%'

  const extTextArea = document.createElement('textarea')
  extTextArea.style.width = '100%'
  extTextArea.style.margin = '0px'
  extTextArea.style.resize = 'vertical'
  extTextArea.style.boxSizing = "border-box"
  extTextArea.style.border = "none"
  extTextArea.className = 'autosuggest-textarea__textarea extoottext'
  extTextArea.style.borderRadius = '4px'
  extTextArea.placeholder = 'Toot'


  const extBtnDiv = document.createElement('div')
  extBtnDiv.className = 'compose-form__publish-button-wrapper extbtndiv'
  extBtnDiv.style.display = 'table-cell'
  extBtnDiv.style.height = '3em'
  extBtnDiv.style.width = '20%'
  extBtnDiv.style.paddingTop = '0'


  const extTootBtn = document.createElement('button')
  extTootBtn.className = 'button button--block extootbtn'
  extTootBtn.style.fontSize = 'inherit'
  extTootBtn.innerText = 'TOOT!'

  extTextAreaDiv.appendChild(extTextArea)
  extTootBox.appendChild(extTextAreaDiv)
  extBtnDiv.appendChild(extTootBtn)
  extTootBox.appendChild(extBtnDiv)
  document.getElementsByClassName('app-body')[0].appendChild(extTootBox)
})()
