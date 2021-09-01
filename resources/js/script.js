$(document).ready(function() {

    //     Sticky Navigation      //
console.log("jquery working....")
     $('.js--section-features').waypoint(function(direction) {
        if(direction == "down"){
            $("nav").addClass("sticky")
    }
         else{
            $("nav").removeClass("sticky")
        }
     }, {
         offset: '60px'
     });

         //     Buttons Scroll Effect     //

         $('.js--scroll-to-plans').click(function() {
            $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
         });
         $('.js--scroll-to-start').click(function() {
            $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
         });

        // JQUERY SCROLL TO ID's // 

      
            $('a[href^="#"]').on('click',function (e) {
                e.preventDefault();
                var target = this.hash;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop':  $target.offset().top //no need of parseInt here
                }, 1000, 'swing', function () {
                    window.location.hash = target;
                });
            });

                // ANIMATION// 
            $('.js--wp-1').waypoint(function() {
                console.log('animation working....')
                $('.js--wp-1').addClass('animate__fadeIn')
            },{
                offset: '50%'
            });
            $('.js--wp-2').waypoint(function() {
                console.log('animation working....')
                $('.js--wp-2').addClass('animate__fadeInUp')
            },{
                offset: '50%'
            });
            $('.js--wp-3').waypoint(function() {
                console.log('animation working....')
                $('.js--wp-3').addClass('animate__fadeIn')
            },{
                offset: '50%'
            });
            $('.js--wp-4').waypoint(function() {
                console.log('animation working 4....')
                $('.js--wp-4').addClass('animate__pulse')
            },{
                offset: '50%'
            });
        
            $('.js--nav-icon').click(function(){
                console.log('Click  working 4....')



                var nav = $('.js--main-nav')
                 var icon = $('.js--nav-icon i')
                 nav.slideToggle();

                 if(icon.hasClass('ion-navicon-round')){
                     icon.addClass('ion-close-round');
                    icon.removeClass('ion-navicon-round')
                }else{
                     icon.addClass('ion-navicon-round');
                     icon.removeClass('ion-close-round')
                 }
            });
            

});