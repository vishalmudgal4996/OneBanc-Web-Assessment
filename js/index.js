// header section 
$(document).ready(function() {    
     $(".gnb__dimmed").addClass('open');
    $(".gnb__dimmed").css({'display':'block'});

      $("#login-btn").hover( function () {
          $(".gnb__login-layer").addClass("active");
      }, function() {
        $(".gnb__login-layer").removeClass("active");
      });
});
