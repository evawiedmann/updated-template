export class MarsPhoto {
  async getMarsPhoto() {
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XSMRMk633jOJY6SL1FRQjaRTnJZKgQUJcgFqRcNH`);

    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }
}

export class DailyPhoto {
  async getDailyPhoto() {
    let response2 = await fetch(`https://api.nasa.gov/planetary/apod?api_key=XSMRMk633jOJY6SL1FRQjaRTnJZKgQUJcgFqRcNH&date=2010-12-17`);

    let jsonifiedResponse2 = await response2.json();
    return jsonifiedResponse2;
  }
}
