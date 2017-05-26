
var Doctor = require('./../js/doctor.js').doctorModule;

var displayAllDoctors = function(allDoctors) {
  var doctor = new Doctor();
  $('#all-doctors ul').empty();
  allDoctors.forEach(function(doctor){
    $('#all-doctors ul').append(`<li style="cursor: pointer" class="click-doctor" value="${doctor.npi}"> Doctor: ${doctor.profile.first_name} ${doctor.profile.last_name} </li> `);
    });
    $('.click-doctor').click(function(){
      doctorId = $(this).val();
      doctor.findDoctor(doctorId, displayDoctor);
  });
};

var displayDoctor = function(doctor) {
  $('#doctor-info').append(`
    <h3> ${doctor.profile.first_name} ${doctor.profile.last_name}</h3>
    <h4>${doctor.specialties[0].description}</h4>
    <li> ${doctor.profile.bio} </li>
    <li>${doctor.practices[0].description}</li>
    <strong>Phone Number: ${doctor.practices[0].phones[0].number} </strong>
    <li style="color:blue; text-decoration: underline;"id="view-image">View Image</li>
    <li style="color:blue; text-decoration: underline;"id="view-insurance">View Accepted Insurance</li>
    `);
  $('#view-image').click(function(){
    openInNewTab(doctor.profile.image_url);
  });
  $('#view-insurance').click(function(){
    doctor.insurances.forEach(function(insuranceCompany){
      $('#show-insurance ul').append(`<li>${insuranceCompany.insurance_plan.name}</li>`);
    });
  });
};

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
};


$(document).ready(function(){
  $('#all-doctors').hide();
  var doctor = new Doctor();
  $('#submit-button').click(function(){
    $('#all-doctors').show();
    $('#error').empty();
    var state = $('#state').val();
    var userQuery = $('#query').val();
    doctor.getDoctors(state, userQuery, displayAllDoctors);
  });
});
