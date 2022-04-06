import { filterByName, filterByRoles, dataOrden, computeStats } from './data.js';
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
        <img class="img-champions" data-champ="${data_champion.id}"src=${data_champion.splash}>
        <p class="name-champions"> ${data_champion.id}</p>
        </section>`
        seeModalDataHtml += `<section class="info_champions" id="${data_champion.id}" style="display:none;">
        <div id="box_content">
        <span class="info_champions_close" data-close="${data_champion.id}">x</span>
        <img class="backgroung_img_champion" data-champ="${data_champion.id}"src=${data_champion.splash}>
        <p class="modal_name_champion"> ${data_champion.id}</p>
        <p class="modal_description_champion">${data_champion.blurb}</p>
        <section class="modal_description_features">
        <p> Ataque:</p>
        <p> Defensa:</p>
        <p> Magia:</p>
        <p> Dificultad:</p>
        </section>
        <section class="modal_features">
        <p>${data_champion.info.attack}</p>
        <p>${data_champion.info.defense}</p>
        <p>${data_champion.info.magic}</p>
        <p>${data_champion.info.difficulty}</p>
        </section>
        </div>
        </section>`
        html.innerHTML = seeDataHTML;
        modalsHtml.innerHTML = seeModalDataHtml;
    }


    const openModal = document.querySelectorAll(".img-champions")
    const hideModal = document.querySelectorAll(".info_champions_close");
    openModal.forEach(om => {
        om.addEventListener('click', e => {
            document.getElementById(e.target.dataset.champ).style.display = "block";
        })
    })
    hideModal.forEach(hm => {
        hm.addEventListener('click', e => {
            document.getElementById(e.target.dataset.close).style.display = "none";
        })
    })
}

seeChampions(championsData);

//FILTRAR POR NOMBRE EN LA BARRA DE BUSQUEDA
const inputSearchByName = document.getElementById("search-champion-by-name");
inputSearchByName.addEventListener("keyup", function() {
    let dataChampion = filterByName(championsData, inputSearchByName.value);
    seeChampions(dataChampion);
})
seeChampions(championsData);
//FILTRAR POR ROLES

const btnAllChampions = document.getElementById("all");
btnAllChampions.addEventListener("click", () => { seeChampions(championsData); });

//FILTRAR CAMPEONES TANKES
const btnTankChampion = document.getElementById("tank");
btnTankChampion.addEventListener("click", function() {
    const tankValue = document.getElementById("tank").value;
    let rolesChampion = filterByRoles(championsData, tankValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES ASESINOS
const btnAssassinChampion = document.getElementById("assassin");
btnAssassinChampion.addEventListener("click", function() {
    const assassinValue = document.getElementById("assassin").value;
    let rolesChampion = filterByRoles(championsData, assassinValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES MAGOS
const btnMageChampion = document.getElementById("mage");
btnMageChampion.addEventListener("click", function() {
    const mageValue = document.getElementById("mage").value;
    let rolesChampion = filterByRoles(championsData, mageValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES LUCHADORES
const btnFighterChampion = document.getElementById("fighter");
btnFighterChampion.addEventListener("click", function() {
    const fighterValue = document.getElementById("fighter").value;
    let rolesChampion = filterByRoles(championsData, fighterValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES MARKSMAN
const btnMarksmanChampion = document.getElementById("shooter");
btnMarksmanChampion.addEventListener("click", function() {
    const marksmanValue = document.getElementById("shooter").value;
    let rolesChampion = filterByRoles(championsData, marksmanValue);
    seeChampions(rolesChampion);
});
//FILTRAR CAMPEONES SUPPORT
const btnSupportChampion = document.getElementById("support");
btnSupportChampion.addEventListener("click", function() {
    const supportValue = document.getElementById("support").value;
    let rolesChampion = filterByRoles(championsData, supportValue);
    seeChampions(rolesChampion);
});

//ORDENAR CAMPEONES DEL Z-A
let ordenZA = document.getElementById("orden");
ordenZA.addEventListener('change', () => {
    let ordenChampion = dataOrden(championsData, ordenZA.value);
    seeChampions(ordenChampion);
});

// MOSTRAR DATO CURIOSO
//PARA ABRIR BOTON
const btnSeePorcentDifficulty = document.getElementById("btn-curious-fact");
btnSeePorcentDifficulty.addEventListener("click", function() {
    const phrase = document.getElementById("curious-fact-phrase");
    const showPhrase = document.getElementById("container-curious-fact");
    showPhrase.style.display = "block";
    showComputeStats(phrase);
});
//PARA CERRA BOTON
const hidePorcentDifficulty = document.getElementById("btn-close-curious-fact");
hidePorcentDifficulty.addEventListener("click", function() {
    const hidePhrase = document.getElementById("container-curious-fact");
    hidePhrase.style.display = "none"
});
//FUNCION ASIGNA VALOR Y LOS CONVIERTE EN STRING
function showComputeStats(element) {
    const porcentsValues = computeStats(championsData);
    element.innerHTML = "El " + porcentsValues[0] + "% de los campones son de dificultad fácil. Mientras que el " + porcentsValues[1] + "% de los campeones son de dificultad media y el " + porcentsValues[2] + "% son de dificultad alta."
}