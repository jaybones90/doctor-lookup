
var Doctor = require('./../js/doctor.js').doctorModule;

var displayAllDoctors = function(allDoctors) {
  allDoctors.forEach(function(doctor){
    $('#doctor-info').append(`<h4> Doctors Name: ${doctor.profile.first_name} ${doctor.profile.last_name} <h4>`)


  doctor.profile.first_name

  })
};



$(document).ready(function(){
  var doctor = new Doctor();
  $('#submit-button').click(function(){
    var state = $('#state').val();
    var userQuery = $('#query').val();
    doctor.getDoctors(state, userQuery, displayAllDoctors);
  });
});
