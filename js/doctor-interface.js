
var Doctor = require('./../js/doctor.js').doctorModule;

var displayAllDoctors = function(allDoctors) {
  var doctor = new Doctor();
  allDoctors.forEach(function(doctor){
    $('#all-doctors ul').append(`<li class="click-doctor" value="${doctor.npi}"> Doctor: ${doctor.profile.first_name} ${doctor.profile.last_name} </li> `);
    });
    $('.click-doctor').click(function(){
      doctorId = $(this).val();
      doctor.findDoctor(doctorId, displayDoctor);
  });
};

var displayDoctor = function(doctor) {
  console.log(doctor.practices[0].phones[0].number)
  $('#doctor-info').append(`<h3> ${doctor.profile.first_name} ${doctor.profile.last_name} </h3> <li> ${doctor.profile.bio} </li> <li>Phone Number: ${doctor.practices[0].phones[0].number} </li> <a href="${doctor.profile.image_url}">View Image</a>`)
};



$(document).ready(function(){
  var doctor = new Doctor();
  $('#submit-button').click(function(){
    var state = $('#state').val();
    var userQuery = $('#query').val();
    doctor.getDoctors(state, userQuery, displayAllDoctors);
  });
});
