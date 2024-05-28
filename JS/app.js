function getApi() {
    const url = "https://valorant-api.com/v1/agents"
    fetch(url).then(response => response.json())
        .then(async element => {
            await character(element)
        })
}


function character(element) {
    const characterArray = element.data;
    characterArray.forEach(async characterObje => {
        await getCharacterData(characterObje)




    })


}


function getCharacterData(characterObje) {
    const { displayName, description, bustPortrait, abilities } = characterObje
    const characterName = displayName;
    const characterDesc = description;
    const characterImg = bustPortrait;
    const abilitiesArray = abilities;
    let abilityArray = [];


    abilitiesArray.forEach(element => {
        abilityArray.push(element.displayIcon)

    })
    createCharacter(characterName, characterDesc, characterImg, abilityArray)
}

function createCharacter(name, desc, img, abilityArray) {

    let hero = `<img class="card-image" src="${img}"  alt="">
    <h4 class="hero-name">${name}</h4>
    <p class="card-desc">${desc}</p>
    <div class="ability">
     <img class="ability-images" src="${abilityArray[0]}" alt="">
     <img class="ability-images" src="${abilityArray[1]}" alt="">
     <img class="ability-images" src="${abilityArray[2]}" alt="">
     <img class="ability-images" src="${abilityArray[3]}" alt="">
    </div>`
    const generalCard = document.querySelector(".general-card")
    const card = document.createElement("div")
    card.className = ("card")
    card.innerHTML = hero


    generalCard.appendChild(card)





}
getApi()

const searching = document.querySelector(".search-input")
searching.addEventListener('input', ff => {
    const value = searching.value.toUpperCase();
    const characterNames = document.querySelectorAll(".hero-name")
    characterNames.forEach(element => {
        element.parentElement.style.display = "block";
        if (!element.innerText.includes(value)) {
            element.parentElement.style.display = "none";
        }

    })



})
