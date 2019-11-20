// import { Object } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework
fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XSMRMk633jOJY6SL1FRQjaRTnJZKgQUJcgFqRcNH`)
.then(function(response) {
  return response.json();
})
.then(function(jsonifiedResponse) {
  getElements(jsonifiedResponse);
});

const getElements = function(response) {
  $('#marsPhotos').attr("src", response.photos[0].img_src);
};

fetch(`https://api.nasa.gov/planetary/apod?api_key=XSMRMk633jOJY6SL1FRQjaRTnJZKgQUJcgFqRcNH&date=2004-12-17`)
.then(function(response2) {
  return response2.json();
})
.then(function(jsonifiedResponse2){
  getElements2(jsonifiedResponse2);
});

const getElements2 = function(response2) {
  $('#dailyDesc').text(response2.explanation);
  $('#dailyPhotos').attr('src', response2.url);
};

// Promise.all([getElements, getElements2]);
