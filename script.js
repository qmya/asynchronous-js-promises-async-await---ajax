'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//in AJAX call we use lots of ways to request data
//but
//Here we will use old way :
//XML HTTP request function:
const request = new XMLHttpRequest(); //first step
//We are doing this becoz how AJAX calls used to handled with events & call backs ftns
request.open('GET', 'https://restcountries.eu/rest/v2/name/pakistan'); //in this step we want to request the URL and the type of request
request.send(); //this will send the request to the URl
console.log(request.responseText);
request.addEventListener('load', function () {
  //to change the json data from string to parse
  const [data] = JSON.parse(this.responseText); //this is request
  console.log(data);
});
