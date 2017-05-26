
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(state, userQuery, displayAllDoctors) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userQuery}&location=${state}&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
    displayAllDoctors(response.data)
  });
};

Doctor.prototype.findDoctor = function(doctorId, displayDoctor) {
  console.log(doctorId)
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors/npi/${doctorId}?user_key=${apiKey}`).then(function(response){
    displayDoctor(response.data)
  });
};

exports.doctorModule = Doctor;
