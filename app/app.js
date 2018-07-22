$(document).ready(function () {
  /*like counter*/
  $(".button-like").click(function () {


      $('.button-like-number').html(+$('.button-like-number').html() + 1);

  });
  /*pagination*/
 $("#paginator-list").children().click( function () {
   $('body,html').animate({scrollTop: 0}, 400); /*scroll to top*/
 });
$("#page1").click(function () {

  $("#idpages").children("div").css('display', 'none');
  $("#idpage1").css('display', 'flex');
  $("#paginator-list").children("li").css('background','none');
  $(this).css('background', 'rgba(0,0,0,.1)');
});
  $("#page2").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage2").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  $("#page3").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage3").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  $("#page4").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage4").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  $("#page5").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage5").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  $("#page6").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage6").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  $("#page7").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage7").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  $("#page8").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage8").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  $("#page9").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage9").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  $("#page10").click(function () {

    $("#idpages").children("div").css('display', 'none');
    $("#idpage10").css('display', 'flex');
    $("#paginator-list").children("li").css('background','none');
    $(this).css('background', 'rgba(0,0,0,.1)');
  });
  /*paginator navigation*/
/*  $("#pagination-arrow-right").click(function () {
    var last_page = $("#page10");
    var this_page = window.location;
    if (last_page) {
      this.setAttribute('disable');
    } else {
      return console("this_page + 1") ;
    }
  })*/
});



