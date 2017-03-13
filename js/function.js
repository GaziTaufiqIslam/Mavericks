$(window).scroll(function () {
  var wScroll= $(this).scrollTop();
  var winH = $(window).height();

  if(wScroll > winH) {
    $('.navbar').addClass('show');
    }
  else {
    $('.navbar').removeClass('show');  }
});

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function(event){
    var target=$( $(this).attr('href') );
    if(target.length){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top
      },duration);
    }
  });
}

$(document).ready(function(){
  smoothScroll(300);
});

$(window).scroll(function(){
  var wScroll= $(this).scrollTop();

  if(wScroll>($("#about").offset().top-$(window).height()/1.7))
    {
      $("#about").css({'opacity':'1'});
    }
  else{
    $("#about").css({'opacity':'0'});
  }
  if(wScroll>($("#workshop").offset().top-$(window).height()/1.5))
    {
      $("#workshop").css({'opacity':'1'});
    }
  else{
    $("#workshop").css({'opacity':'0'});
  }
  if(wScroll>($("#competition").offset().top-$(window).height()/1.5))
    {
      $("#competition").css({'opacity':'1'});
    }
  else{
    $("#competition").css({'opacity':'0'});
  }
});
