const URL_API = 'https://zoo-animal-api.herokuapp.com/animals/rand/6';

$(document).ready(() => {

  $("#btn-home").ready((e) => {
    getPagina("home.html", "main");
  });
  
  $("#btn-galeria").click((e) => {
    $("#destaque").hide();
    getPagina("galeria.html", "main");
  });

  $("#btn-home").click((e) => {
    $("#destaque").show();
    getPagina("home.html", "main");
  });

  $("#btn-home-logo").click((e) => {
    $("#destaque").show();
    getPagina("home.html", "main");
  });
});

const getAnimal = () => {
  getPagina('galeria.html','main');
  $.ajax({
      url: URL_API,
      dataType: 'json',
      success: (data) => {
          let listPkm = document.createElement('div');
          $(listPkm).addClass('row');
          $('#getAnimal').html(listPkm);

          data.forEach((p, i) => {
              let li = document.createElement('div');
              let card = document.createElement('div');
              let cardHeader = document.createElement('div');
              let cardBody = document.createElement('div');
              let img = document.createElement('img');
              $(li).addClass('col-4');
              $(card).addClass('card');
              $(img).addClass('card-img-topo');
              $(cardHeader).addClass('card-header');
              $(cardBody).addClass('card-body');

              $(cardHeader).attr('id', `ch-pkm${i}`);
              
              $(cardHeader).html(`<h1>${p.name}</h1>`);
              $(cardBody).html(`<img src='${p.image_link} '>`);
              
              $(card).append(cardHeader)
                     .append(cardBody);
              $(li).append(card);                     
              $(listPkm).append(li);
          });
      }
  });
}
/*
var getPagina = (page, target) => {
  $.ajax({
    url: page,
    datatype: "html",
    success: (data) => {
      $(target).html(data);
    },
  });
};
*/