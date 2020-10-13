// jquery codes
$(document).ready(function(){
    $('.dropdown-toggle').dropdown();
    $("#up").click(function(){
        $('html, body').animate({scrollTop : 0}, 150);
    });

    $('#show-search').on('click', function(event){
        event.preventDefault();
        $('.scrn-src').addClass('open');
    });
    $('.search-close').on('click', function(event){
        event.preventDefault();
        $('.scrn-src').removeClass('open');
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 0)
        {
            $("header").addClass("sticky");
        }
        else
        {
            $("header").removeClass("sticky");
        }
    });
});
// jquery codes end
// javascript codes
var typed = new Typed('#typed',{
    strings: ["Merhaba!",'Sayfamıza hoşgeldiniz!', 'Yeni bir şeyler öğrenmenin zamanı geldi..', "Öğreticilere gitmek için kaydırın.."],
    typedSpeed:50,
    backDelay:2000,
    backSpeed:30,
    loop:true,
    loopCount:Infinity, 
    fadeOut:false
  });
  var html, body, scroll_up;
  window.onload = function(){
      html = document.documentElement;
      body = document.body;
      scroll_up = document.getElementById("up");

  }
  function ScrollToTop(){
    window.onscroll = ScrollToTop;
      var height = 0.7 * window.innerHeight;
      if(body.scrollTop > height || html.scrollTop > height){
          scroll_up.classList.add("show");
      }
      else{
          scroll_up.classList.remove("show");

      }
  }

  function toggleForm(){
      var container = document.querySelector('#registr .container');
      container.classList.toggle('active')
  }
  