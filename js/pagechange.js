function cambiaPagina() {
  $("#sobremi").click(sobremi);
  $("#portafolio").click(portafolio);
  $("#contacto").click(contacto);
  $("#sobremimovil").click(sobremi);
  $("#portafoliomovil").click(portafolio);
  $("#contactomovil").click(contacto);
}

function sobremi() {
  var election = event.target.dataset.name;

  if (election === "sobremi") {
    $('#sobremiinfo').show();
    $('#proyectoinfo').hide();
    $('#contactoinfo').hide();
  }
}

function portafolio() {
  var election2 = event.target.dataset.name;

  if (election2 === "portafolio") {
    $('#sobremiinfo').hide();
    $('#proyectoinfo').removeAttr('hidden');
    $('#proyectoinfo').show();
    $('#contactoinfo').hide();
  }
}

function contacto() {
  var election3 = event.target.dataset.name;

  if (election3 === "contacto") {
    $('#sobremiinfo').hide();
    $('#proyectoinfo').hide();
    $('#contactoinfo').removeAttr('hidden');
    $('#contactoinfo').show();
  }
}


$(document).ready(cambiaPagina);
