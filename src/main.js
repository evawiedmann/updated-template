// import { Object } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework

let request = new XMLHttpRequest();
let request2 = new XMLHttpRequest();
const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XSMRMk633jOJY6SL1FRQjaRTnJZKgQUJcgFqRcNH`;
const url2 = `https://api.nasa.gov/planetary/apod?api_key=XSMRMk633jOJY6SL1FRQjaRTnJZKgQUJcgFqRcNH&date=2019-11-20`;


request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
}

request.open("GET", url, true);
request.send();

const getElements = function(response) {
  $('#marsPhotos').attr("src", response.photos[0].img_src);
}



request2.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements2(response);
  }
}

request2.open("GET", url2, true);
request2.send();

const getElements2 = function(response) {
  $('#dailyPhotos').attr('src', response.url);
  $('#dailyDesc').text(response.explanation);

}
