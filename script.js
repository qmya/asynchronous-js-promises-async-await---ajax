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
