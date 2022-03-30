import {} from './data.js';
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