class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + "/characters")
      .then((response) => response.data);
  }

  getOneRegister(body) {}

  createOneRegister() {
    return axios
      .post(this.BASE_URL + "/characters", body)
      .then((response) => response.data);
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
