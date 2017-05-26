
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(state, userQuery, displayAllDoctors) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userQuery}&location=${state}&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
    displayAllDoctors(response.data)
  });
};

exports.doctorModule = Doctor;
