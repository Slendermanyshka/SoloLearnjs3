//var throttle = require('lodash.throttle');

const forma = document.querySelector("feedback-form");
let values={
  email:"",
  message:""
  };


  const submit = function(e){
    var formData = new FormData(document.querySelector('feedback-form'))
    e.preventDefault();
    console.log(formData);
  }

function saveData(data){
  localStorage.setItem("feedback-form-state", data)
}