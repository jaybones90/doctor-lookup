
var Doctor = require('./../js/doctor.js').doctorModule;

var displayAllDoctors = function(allDoctors) {
  var doctor = new Doctor();
  allDoctors.forEach(function(doctor){
    $('#doctor-info ul').append(`<li class="click-doctor" value="${doctor.npi}"> Doctor: ${doctor.profile.first_name} ${doctor.profile.last_name} </li> `);
    });
    $('.click-doctor').click(function(){
      doctorId = $(this).val();
      doctor.findDoctor(doctorId, displayDoctor);
  });
};

var displayDoctor = function(doctor) {
  console.log(doctor);
};



$(document).ready(function(){
  var doctor = new Doctor();
  $('#submit-button').click(function(){
    var state = $('#state').val();
    var userQuery = $('#query').val();
    doctor.getDoctors(state, userQuery, displayAllDoctors);
  });
});
