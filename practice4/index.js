const select = document.querySelector(".js-select");

const KEY_LS = "country";
const VALUE_LS = localStorage.getItem(KEY_LS);
function selectChange(event) {
  const COUNTRY_LS = event.target.value;
  localStorage.setItem(KEY_LS, COUNTRY_LS);
}

function saveName() {
  select.value = VALUE_LS;
}
function init() {
  select.addEventListener("change", selectChange);
  if (VALUE_LS !== null) {
    saveName();
  }
}
init();
