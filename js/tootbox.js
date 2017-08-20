(function() {
    "use strict";
    /* Create a toot textarea. */
    const extTootBox = document.createElement("div");
    extTootBox.style.position = "fixed";
    extTootBox.style.display = "table";
    // Spoiler has 100 for z-index value.
    extTootBox.style.zIndex = "120";
    extTootBox.style.width = "100%";
    extTootBox.style.bottom = "0";


    const extTextArea = document.createElement("textarea");
    // Overwrite !important.
    extTextArea.style.cssText = "height: 3em !important;";
    extTextArea.style.display = "table-cell";
    extTextArea.style.width = "100%";
    extTextArea.style.minHeight = "0";
    extTextArea.className = "autosuggest-textarea__textarea extoottext";
    extTextArea.placeholder = "Toot";


    const extBtnDiv = document.createElement("div");
    extBtnDiv.className = "compose-form__publish-button-wrapper extbtndiv";
    extBtnDiv.style.display = "table-cell";
    extBtnDiv.style.height = "3em";
    extBtnDiv.style.width = "20%";
    extBtnDiv.style.paddingTop = "0";


    const extTootBtn = document.createElement("button");
    extTootBtn.className = "button button--block extootbtn";
    extTootBtn.innerText = "TOOT!";


    extTootBox.appendChild(extTextArea);
    extBtnDiv.appendChild(extTootBtn);
    extTootBox.appendChild(extBtnDiv);
    document.getElementsByClassName("app-body")[0].appendChild(extTootBox);
})();