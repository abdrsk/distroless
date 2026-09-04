/* /translate.js */
/* handels the translation pages*/

const languageSelect = document.querySelector("#language");
const texts = document.querySelectorAll("[data-lang]");

// check once, then wait for change

texts.forEach(text => {
  text.hidden = text.dataset.lang !== languageSelect.value;
});

languageSelect.addEventListener("change", () => {
  texts.forEach(text => {
    text.hidden = text.dataset.lang !== languageSelect.value;
  });
});
