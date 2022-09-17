"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<td class="idsOfCoffees">' + coffee.id + '</td>';
    html += '<h2 class="coffeeName">' + coffee.name + '</h2>';
    html += '<p class="coffeeRoast">' + coffee.roast + '</p>';
    html += '</div>';

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
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


    let tbody = document.querySelector('#coffees');
    let submitButton = document.querySelector('#submit');
    let roastSelection = document.querySelector('#roast-selection');

    tbody.innerHTML = renderCoffees(coffees);

    submitButton.addEventListener('click', updateCoffees);
}


// TESTING CODE!!!
//     $('#search-input').on('keyup', function () {
//         let value = $(this).val()
//         console.log('Value:', value)
//         let data = searchTable(value, coffees)
//         buildTable(data)
//     })
//     buildTable(coffees)
//
//     function searchTable(value, data) {
//         let filterData = []
//
//         for (let i = 0; i < data.length; i++) {
//             value = value.toLowerCase()
//             let name = data[i].name.toLowerCase()
//
//             if (name.includes(value)) {
//                 filterData.push(data[i])
//             }
//         }
//
//         return filterData
//     }
//
//     function buildTable(data) {
//         let table = document.getElementById('coffees')
//         table.innerHTML = ''
//         for (let i = 0; i < data.length; i++) {
//
//         }
//     }
//
// }
