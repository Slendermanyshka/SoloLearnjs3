var throttle = require('lodash.throttle');

const forma = document.querySelector("feedback-form");
// let values={
//   email:"",
//   message:""
// };

function getData(form){
  var formData = new FormData(form);
  console.log(formData);

}
