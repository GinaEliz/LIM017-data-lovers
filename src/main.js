import {} from './data.js';
import data from './data/lol/lol.js';


//Conviete el objeto data a array 
const championsData = Object.values(data.data);
//MOSTRAR LA DATA
function seeChampions(championsData) {
    const html = document.getElementById("card");
    let infoHTML = '';
    for (let champion in championsData) {
        let data_champion = championsData[champion];
        infoHTML += `<section class="champions" id="champions">
        <a href=".infochampions"><img class="img-champions" id="img_champions"src=${data_champion.splash}></a>
        <p class="name-champions"> ${data_champion.id}</p>
        </section>
        <section class="infochampions" style="display:none";> 
        <p>Título: ${data_champion.title}</p>
        <p>Descripción: ${data_champion.blurb}</p>
        <p>Información:</p>
        <p> Ataque: ${data_champion.info.attack}</p>
        <p> Defensa:${data_champion.info.defense}</p>
        <p> Magia: ${data_champion.info.magic}</p>
        <p> Dificultad: ${data_champion.info.difficulty}</p>
        </section>`
    }
    html.innerHTML = infoHTML;
}
seeChampions(championsData);