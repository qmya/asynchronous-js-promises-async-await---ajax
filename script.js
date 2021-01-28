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

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       //read the data from the response we read the data by .json method
//       return response.json(); //call the json on response to see the data //json is also a promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('pakistan');

//Same as ☝🏽 but using arrow function
//New Way of getting data from an API
// const getCountryData = country => {
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     //read the data from the response we read the data by .json method
//     .then(response => response.json()) //call the json on response to see the data //json is also a promise
//     .then(data => renderCountry(data[0]));
// };
// getCountryData('pakistan');

//Chaining Promises:(sequecial ajax call): 👇🏽
//We want to get the country and then do the Ajax call and after that we will do the Ajax call to the neighbouring country of it

const getCountryData = country => {
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      //Here after getting the country I will call the neighbour country of it 👇🏽:
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
        .then(response => response.json())
        .then(data => console.log(data));
    });
};
getCountryData('pakistan');
