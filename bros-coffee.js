"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '<div class="coffeeImg">' + coffee.img + '</div>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === 'All') {
        filteredCoffees = coffees.filter(function (coffee){
            return coffee.roast !== selectedRoast;})
    }
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    // const coffeesTbody = document.getElementById("coffees");
    const coffee = document.querySelectorAll(".coffee")
    const coffeeName = document.getElementsByTagName("h2")

    for(let i = 0; i < coffeeName.length; i++) {
        let match = coffee[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchBox) > -1 ) {
                coffee[i].style.display = "";
            }else {
                coffee[i].style.display = "none";
            }
        }
    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'Light', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 2, name: 'Half City', roast: 'Light', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 3, name: 'Cinnamon', roast: 'Light', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 4, name: 'City', roast: 'Medium', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 5, name: 'American', roast: 'Medium', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 6, name: 'Breakfast', roast: 'Medium', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 7, name: 'High', roast: 'Dark', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 8, name: 'Continental', roast: 'Dark', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 9, name: 'New Orleans', roast: 'Dark', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 10, name: 'European', roast: 'Dark', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 11, name: 'Espresso', roast: 'Dark', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 12, name: 'Viennese', roast: 'Dark', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 13, name: 'Italian', roast: 'Dark', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
    {id: 14, name: 'French', roast: 'Dark', img:'<img src="img/Bros-Coffee-Cup.png" alt="">'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees)

//  TESTING LOCAL STORAGE CODE
let addRoastSelection = document.querySelector('#roast-selection2');
let userInput = document.querySelector('#search-item2')
let newCoffeeSubmit = document.getElementById('submit2')
function func(e) {
    event.preventDefault()
}

newCoffeeSubmit.addEventListener('onclick', addCoffee)

function addCoffee() {
    let newCoffee = {
        id: coffees[coffees.length - 1].id + 1,
        name: userInput.value,
        roast: addRoastSelection.value,
        img:'<img src="img/Bros-Coffee-Cup.png" alt="">'};
    //unshift adds to the front
    //push puts it to the back
    coffees.unshift(newCoffee);
    let x = [];
    for(let i = 0; i < coffees.length; i++){
        x = x + coffees[i];
    }
    updateCoffees();
    alert("Thank you for adding your coffee bro!");
}
