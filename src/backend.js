export class MarsPhoto {
  async getMarsPhoto() {
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;

  }
}







export class DailyPhoto {
  async getDailyPhoto() {
    let response2 = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.daily_photo}`);

    let jsonifiedResponse2 = await response2.json();
    return jsonifiedResponse2;
  }
}
