import { MarsPhoto, DailyPhoto } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework
(async () => {
  let marsphoto = new MarsPhoto();
  const response = await marsphoto.getMarsPhoto();
  getElements(response);
})();

const getElements = function(response) {
  $('#marsPhotos').attr("src", response.photos[16].img_src);
};




(async () => {
  let dailyPhoto = new DailyPhoto();
  const response2 = await dailyPhoto.getDailyPhoto();
  getElements2(response2);
})();

const getElements2 = function(response2) {
  $('#dailyDesc').text(response2.explanation);
  $('#dailyPhotos').attr('src', response2.url);
};

// Promise.all([getElements, getElements2]);
