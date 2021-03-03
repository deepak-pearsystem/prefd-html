
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      sidenav = $('.sidebar-nav'),
     isClosed = false;
      trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {
      
      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        sidenav.removeClass('open');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        sidenav.addClass('open');
        isClosed = true;
      }
      
      
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  


  $(".services-drop").click(function(){
    $(".service-list").toggle()
    
    });
    $(".sector-drop").click(function(){
      $(".sector-list").toggle()
      
      });

 


});



  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll > 100) {
        $(".header-area").addClass("fixed");
    }
  else{
  $('.header-area').removeClass('fixed')
  }
  });