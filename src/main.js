import { filterByName, filterByRoles, dataOrden } from './data.js';
import data from './data/lol/lol.js';


//Conviete el objeto data a array 
const championsData = Object.values(data.data);
//MOSTRAR LA DATA
function seeChampions(championsData) {
    const html = document.getElementById("card");
    const modalsHtml = document.getElementById("modals");
    let seeDataHTML = '';
    let seeModalDataHtml = '';
    for (let champion in championsData) {
        let data_champion = championsData[champion];
        seeDataHTML += `<section class="champions" id="champions">
        <img class="img-champions" id="img_champions"src=${data_champion.splash}>
        <p class="name-champions"> ${data_champion.id}</p>
        </section>`
        seeModalDataHtml += `<section class="info_champions" id="info_champions_modals" style="display:none">
        <div id="modal_content">
        <div id="box_content">
        <span class="info_champions_close" id="close_modal">X</span>
        <p class="name-champions"> ${data_champion.id}</p>
        <p>Descripción: ${data_champion.blurb}</p>
        <p>Información:</p>
        <p> Ataque: ${data_champion.info.attack}</p>
        <p> Defensa:${data_champion.info.defense}</p>
        <p> Magia: ${data_champion.info.magic}</p>
        <p> Dificultad: ${data_champion.info.difficulty}</p>
        </div>
        </div>
        </section>`
        html.innerHTML = seeDataHTML;
        modalsHtml.innerHTML = seeModalDataHtml;
    }
    //const btnBuy = document.getElementsByClassName('button2');
    //for (let i = 0; i < btnBuy.length; i++) {
    //btnBuy[i].addEventListener('click', showSecondScreen);

    // const infoModal = document.getElementById("info_champions_modals");
    // const clickShowModal = document.getElementsByClassName('img_champions');
    // for (let i = 0; i < clickShowModal.length; i++) {
    //     clickShowModal[i].addEventListener("click", () => {
    //         infoModal.style.display = "block"
    //     });
    // }
    //console.log(showModal)
    const showModal = document.getElementsByClassName("info_champions");
    for (let i = 0; i < showModal.length; i++) {
        return showModal[i];
    }
    const openModal = document.getElementById("img_champions")
    const hideModal = document.getElementById("close_modal");
    openModal.addEventListener("click", function() {
        showModal[i].style.display = "block";
    });

    hideModal.addEventListener("click", function() {
        showModal[i].style.display = "none"
    })
}


//FILTRAR POR NOMBRE EN LA BARRA DE BUSQUEDA
const inputSearchByName = document.getElementById("search-champion-by-name");
inputSearchByName.addEventListener("keyup", function() {
    let dataChampion = filterByName(championsData, inputSearchByName.value);
    seeChampions(dataChampion);
})
seeChampions(championsData);
//FILTRAR POR ROLES
//FILTRAR CAMPEONES TANKES
const btnTankChampion = document.getElementById("tank");
btnTankChampion.addEventListener("click", function() {
    const tankValue = document.getElementById("tank").value;
    console.log(tankValue);
    let rolesChampion = filterByRoles(championsData, tankValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES ASESINOS
const btnAssassinChampion = document.getElementById("assassin");
btnAssassinChampion.addEventListener("click", function() {
    const assassinValue = document.getElementById("assassin").value;
    console.log(assassinValue);
    let rolesChampion = filterByRoles(championsData, assassinValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES MAGOS
const btnMageChampion = document.getElementById("mage");
btnMageChampion.addEventListener("click", function() {
    const mageValue = document.getElementById("mage").value;
    console.log(mageValue);
    let rolesChampion = filterByRoles(championsData, mageValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES LUCHADORES
const btnFighterChampion = document.getElementById("fighter");
btnFighterChampion.addEventListener("click", function() {
    const fighterValue = document.getElementById("fighter").value;
    console.log(fighterValue);
    let rolesChampion = filterByRoles(championsData, fighterValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES MARKSMAN
const btnMarksmanChampion = document.getElementById("shooter");
btnMarksmanChampion.addEventListener("click", function() {
    const marksmanValue = document.getElementById("shooter").value;
    console.log(marksmanValue);
    let rolesChampion = filterByRoles(championsData, marksmanValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES SUPPORT
const btnSupportChampion = document.getElementById("support");
btnSupportChampion.addEventListener("click", function() {
    const supportValue = document.getElementById("support").value;
    console.log(supportValue);
    let rolesChampion = filterByRoles(championsData, supportValue);
    seeChampions(rolesChampion);
});

//ORDENAR CAMPEONES DEL Z-A
const ordenZA = document.getElementById("orden");
ordenZA.addEventListener('change', () => {
    let ordenChampion = dataOrden(championsData, ordenZA.value);
    seeChampions(ordenChampion);
});

const allChampions = document.getElementById("all");
allChampions.addEventListener("click", () => {
    let championsAll = data(championsData, allChampions.value);
    seeChampions(championsAll);
})

