
    $(document).ready(function() { //start doc ready

      //this one will add the class after a time-out
      window.setTimeout(function()
      {$(".wrapper-purchase").addClass("active");}, 5000);

      //this function will trigger when a certain distance from the top
       // $(document).on('scroll', function() {
       //     if ($(window).scrollTop() > 100) {
       //       $('.modal').addClass('active');
       //     }
       //this argument will close it when back within range
          //     if ($(window).scrollTop() < 100) {
       //       $('.modal').removeClass('active');
       //     }
       //   });



       //MAIN JS
        $("#services").click(function (){
            $('html, body').animate({
                scrollTop: $("#service-section").offset().top
            }, 1000);
        });
        $("#portfolio").click(function (){
            $('html, body').animate({
                scrollTop: $("#portfolio-section").offset().top
            }, 1000);
        });
        $("#contact").click(function (){
            $('html, body').animate({
                scrollTop: $("#contact-section").offset().top
            }, 1000);
        });

        //Go Back
        function goBack() {
            window.history.back();
        }


    }); //end doc ready
