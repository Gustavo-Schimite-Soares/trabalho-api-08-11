$(document).ready(() => {

  $("#btn-home").ready((e) => {
    getPagina("_html/home.html", "main");
  });
  
  $("#btn-galeria").click((e) => {
    $("#destaque").hide();
    getPagina("_html/galeria.html", "main");
  });

  $("#btn-home").click((e) => {
    $("#destaque").show();
    getPagina("_html/home.html", "main");
  });

  $("#btn-home-logo").click((e) => {
    $("#destaque").show();
    getPagina("_html/home.html", "main");
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
