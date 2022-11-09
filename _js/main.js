$(document).ready(() => {
  $("#btn-home").ready((e) => {
    getPagina("_html/home.html", "main");
  });
  
  $("#btn-galeria").click((e) => {
    $("#destaque").hide();
    getPagina("_html/galeria.html", "main");
  });
});

var getPagina = (page, target) => {
  $.ajax({
    url: page,
    datatype: "html",
    success: (data) => {
      $(target).html(data);
    },
  });
};
