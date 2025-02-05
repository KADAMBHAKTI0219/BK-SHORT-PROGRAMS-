function formatText(style) {
    let textInput = document.getElementById("textInput").value;
    let formattedText = document.getElementById("formattedText");

    if (style === "bold") {
      formattedText.innerHTML = `<b>${textInput}</b>`;
    } else if (style === "italic") {
      formattedText.innerHTML = `<i>${textInput}</i>`;
    } else if (style === "underline") {
      formattedText.innerHTML = `<u>${textInput}</u>`;
    }else if(style === "strike"){
        formattedText.innerHTML = `<s>${textInput}</s>`;
    }
  }
  function increaseFontSize() {
    let formattedText = document.getElementById("formattedText");
    let size = parseInt(getComputedStyle(formattedText).fontSize);` `
    formattedText.style.fontSize = size + 2 + "px";
  }

  function decreaseFontSize() {
    let formattedText = document.getElementById("formattedText");
    let size = parseInt(getComputedStyle(formattedText).fontSize);
    formattedText.style.fontSize = size - 2 + "px";
  }
  function capitializeText() {
    let formattedText = document.getElementById("formattedText");
    formattedText.innerText = formattedText.innerText.toUpperCase();
  }

  function lowerCaseText() {
    let formattedText = document.getElementById("formattedText");
    formattedText.innerText = formattedText.innerText.toLowerCase();
  }