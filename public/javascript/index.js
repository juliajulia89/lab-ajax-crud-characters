const charactersAPI = new APIHandler("http://localhost:8000");

function domUpdateAllChar(characters) {
  const charContainer = document.querySelector("div.characters-container");
  charContainer.innerHTML = "";
  for (character of characters) {
    const html = `<div class="characters-container">
      <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>`;
    const charCard = document.createElement("div");
    charCard.classListadd("character-info");
    charCard.innerHTML = html;
    charContainer.appendChild(charCard);
  }
}

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      APIHandler.getFullList()
        .then((characters) => domUpdateAllChar(characters))
        .catch(console.log(error));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
  const name = document.forms[0].elements[0].value
  const occupation = document.forms[0].elements[1].value
  const weapon = document.forms[0].elements[2].value
   const cartoon = document.forms[0].elements[3].value
   characterAPI.getOneRegister({name, occupation, weapon, cartoon})
   .then(()=>location.reload())
});

