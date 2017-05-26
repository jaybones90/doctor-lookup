
var Doctor = require('./../js/doctor.js').doctorModule;

var displayAllDoctors = function(allDoctors) {
  var doctor = new Doctor();

    $('#all-doctors ul').empty();
  allDoctors.forEach(function(doctor){
    $('#all-doctors ul').append(`<li class="click-doctor" value="${doctor.npi}"> Doctor: ${doctor.profile.first_name} ${doctor.profile.last_name} </li> `);
    });
    $('.click-doctor').click(function(){
      doctorId = $(this).val();
      doctor.findDoctor(doctorId, displayDoctor);
  });
};

var displayDoctor = function(doctor) {
  console.log(doctor);
  console.log(doctor.specialties);
  $('#doctor-info').append(`<h3> ${doctor.profile.first_name} ${doctor.profile.last_name} </h3> <h4>${doctor.specialties[0].description}</h4><li> ${doctor.profile.bio} </li> <li>${doctor.practices[0].description}</li><strong>Phone Number: ${doctor.practices[0].phones[0].number} </strong> <a href="${doctor.profile.image_url}">View Image</a>`);
};



$(document).ready(function(){
  var doctor = new Doctor();
  $('#submit-button').click(function(){
    $('#error').empty();
    var state = $('#state').val();
    var userQuery = $('#query').val();
    doctor.getDoctors(state, userQuery, displayAllDoctors);
  });
});
