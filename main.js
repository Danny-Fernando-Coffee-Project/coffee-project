"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += '<p><h1>' + coffee.id + '</h1></p>';
    html += '<p><h1>' + coffee.name + '</h1></p>';
    html += '<p>' + coffee.roast + '</p>';
    html += '<div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < 14; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === 'all'){
        filteredCoffees = coffees.filter(function (coffee){
            return coffee.roast !== selectedRoast;})
    }
    else {
        filteredCoffees = coffees.filter(function (coffee){
            return coffee.roast === selectedRoast;
        })}
    // coffees.forEach(function(coffee) {
    //     if (coffee.roast === selectedRoast) {
    //         filteredCoffees.push(coffee);
    //     }
    // });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


// search bar functionality
// let searchBar = document.querySelector("#searchBar");
// let searchButton = document.querySelector("#firstSubmit");

// searchButton.addEventListener('click',function (){
//     alert(searchBar.value)
// })
// TESTING CODE
// const userCardTemplate = document.querySelector("[data-user-template]")
// const card = userCardTemplate.content.cloneNode(true)
// console.log(card);
