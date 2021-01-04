'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag} "/>
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row">
                        <span>👫</span>${(data.population / 1000000).toFixed(1)}
                    </p>
                    <p class="country__row">
                        <span>🗣️</span> ${data.languages[0].name} 
                    </p>
                    <p class="country__row">
                        <span>💰</span>${data.currencies[0].name}
                    </p>
                </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const getCountryAndNeighbour = function (country) {
//   //in AJAX call we use lots of ways to request data
//   //but
//   //Here we will use old way :
//   //XML HTTP request function:
//   const request = new XMLHttpRequest(); //first step
//   //We are doing this becoz how AJAX calls used to handled with events & call backs ftns
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); //in this step we want to request the URL and the type of request
//   request.send(); //this will send the request to the URl
//   console.log(request.responseText);
//   request.addEventListener('load', function () {
//     //to change the json data from string to parse
//     const [data] = JSON.parse(this.responseText); //this is request
//     console.log(data);
//     //Render country
//     renderCountry(data);
//     //Get the neighbour countries
//     const neighbour = data.borders[0];
//     console.log(neighbour);
//     //if no neighbours
//     if (!neighbour) return;
//     //but if the neighbours exists than we will do an ajax call to the countries
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`); //looking for countries by its code
//     request2.send(); //this will send the request to the URl
//     request2.addEventListener('load', function () {
//       console.log(this.responseText);
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// //getCountryAndNeighbour('pakistan');
// getCountryAndNeighbour('canada');

//New Way of getting data from an API
const request = fetch('https://restcountries.eu/rest/v2/name/pakistan');
console.log(request); //it will return a Promise here
