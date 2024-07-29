
let heroes = ['Akshay Kumar', 'Govinda', 'Shahrukh Khan', 'Salman Khan', 'Amitabh Bachhan'];
refreshHeroList();

function refreshHeroList() {

    let htmlStringDynamic = '';
    htmlStringDynamic = '<ul>';

    for(let i=0; i<heroes.length; i++) {
        console.log(heroes[i]);
        htmlStringDynamic = htmlStringDynamic + '<li>' + 
        `<span class="hero-name">` + heroes[i] + '</span>' + 
        `<button type="button" onclick="deleteHero(` + i + `)" class="delete-button">Delete</button>`;
    }

    htmlStringDynamic = htmlStringDynamic + '</ul> ';
    document.getElementById("heroesList").innerHTML = htmlStringDynamic;
}

function addHero() {
    let heroName = document.getElementById("name").value;
    heroes.push(heroName);
    refreshHeroList();
    document.getElementById("name").value = "";
}

function deleteHero(index) {
    heroes.splice(index, 1);
    refreshHeroList();
}

