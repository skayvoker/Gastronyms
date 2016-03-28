// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


$(function loop() {

$("body").animate({temporary_x: 200, temporary_y: 0}, {
    duration: 7000,
    step: function() {
        var position = Math.round(this.temporary_x) + "px " + Math.round(this.temporary_y) + "px";
        $("body").css("background-position",  position);
    },
    complete: function(){


$("body").animate({temporary_x: 0, temporary_y: 0}, {
    duration: 7000,
    step: function() {
        var position = Math.round(this.temporary_x) + "px " + Math.round(this.temporary_y) + "px";
        $("body").css("background-position",  position);
    },
    complete: function(){

   loop();




    }

});

    }
});
});
