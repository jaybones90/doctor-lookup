
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(state, userQuery, displayAllDoctors) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userQuery}&location=${state}&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
    if (response.meta.count === 0) {
      $('#error').text("There are no doctors found based on that keyword")
      $('#all-doctors').hide();
      }
    displayAllDoctors(response.data);
  }).fail(function(error) {
    $('#all-doctors').text(error.responseJSON.message);
  });
};

Doctor.prototype.findDoctor = function(doctorId, displayDoctor) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors/npi/${doctorId}?user_key=${apiKey}`).then(function(response){
    displayDoctor(response.data);
  }).fail(function(error) {
    $('#doctor-info').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
