export default class Services {
  constructor() {}

  getadat(vegpont, callback) {
    fetch(vegpont)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((data) => {
        callback(data);
      });
  }
}
