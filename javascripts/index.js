const salesmaxWebformIntegrationUrl = "https://integration.pqa.salesmax.ai/webform/leads";

// document.addEventListener("DOMContentLoaded", function () {
//  const form = document.getElementById("freetrial-request-form");
document.addEventListener("submit", function (event) {
  if (window.salesmaxDataLayer) {
    const id = event.target.id;
    let formId = window.salesmaxDataLayer[0][1];
    let token = window.salesmaxDataLayer[1][1];
    const domain = window.location.hostname.split('.').reverse().splice(0,2).reverse().join('.');
    const url = window.location.href;

    const hasOne = (arr, fn) => arr.filter(fn).length === 1;
    let single = hasOne(window.salesmaxDataLayer, x => x[0] == 'form-id');
    if(!single) {
        const findIndex = (arr, fn) => arr.findIndex(fn);
        let index = findIndex(window.salesmaxDataLayer, x => x[0] == 'form-id' && x[1] == id);
        formId = window.salesmaxDataLayer[index][1];
        let tokenIndex = index + 1;
        token = window.salesmaxDataLayer[tokenIndex][1];
    }

    if (token) {
      // Get data from the form.
      const inputFields = Array.from(event.target.querySelectorAll('input, select, textarea'));

      const formData = {};
      inputFields.forEach((input) => {
        if (input.name) {
          formData[input.name] = event.target[input.name].value;
        }
      });
      console.log('FormData: ', formData);

      let payload = {};
      payload['formId'] = formId;
      payload['id'] = id;
      payload['domain'] = domain;
      payload['data'] = formData;
      payload['url'] = url;
      const options = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      };

      fetch(salesmaxWebformIntegrationUrl, options)
        .then(response => response)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

});