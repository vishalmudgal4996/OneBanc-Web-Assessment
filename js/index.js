// header section 
$(document).ready(function() {    
    //  $(".gnb__dimmed").addClass('open');
    // $(".gnb__dimmed").css({'display':'block'});

      $("#login-btn").hover( function () {
          $(".gnb__login-layer").addClass("active");
      }, function() {
        $(".gnb__login-layer").removeClass("active");
      });
});

(function($) {
    var $window = $(window),
        $html = $('html');

    $window.resize(function resize(){
        if ($window.width() < 1012) {
            $("#phn-img-1").addClass("hidden").removeClass("visible");
            $("#mob-img-1").addClass("visible").addClass("show").removeClass("hidden");
            $(".gnb__menu-wrap").addClass("hidden").removeClass("visible");
            $(".gnb__sub").addClass("hidden").removeClass("visible");
            $("#floating-utility-list").addClass("hidden").removeClass("visible");
        }else{
            $("#phn-img-1").addClass("visible").removeClass("hidden");
            $("#mob-img-1").addClass("hidden").removeClass("show").removeClass("visible");
            $(".gnb__menu-wrap").addClass("visible").removeClass("hidden");
            $(".gnb__sub").addClass("visible").removeClass("hidden");
            $("#floating-utility-list").addClass("visible").removeClass("hidden");
        }
    }).trigger('resize');
})(jQuery);
