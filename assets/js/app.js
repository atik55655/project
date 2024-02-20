$(document).ready(function () {
  $('.view_more .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        500:{
            item:3
        },
        768:{
            items:4
        },
        1024:{
            items:6
        }
    }
});

$('.recently_viewd .owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  margin:10,
  nav:false,
  dots: true,
  responsive:{
      0:{
          items:2
      },
      500:{
          item:3
      },
      768:{
          items:4
      },
      1024:{
          items:6
      }
  }
});



  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    nav: false,
  });



//   $(".view_more .owl-carousel").owlCarousel({
//     loop: false,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     margin: 10,
//     nav: false,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       500: {
//         item: 2,
//       },
//       768: {
//         items: 3,
//       },
//       1024: {
//         items: 5,
//       },
//     },
//   });

//   $("#").owlCarousel({
//     loop: false,
//     autoplay: true,
//     autoplayTimeout: 10000,
//     autoplayHoverPause: true,
//     margin: 10,
//     nav: false,

//     autoPlay: 10000,
//     stopOnHover: false,
//   });
});



//quantity plus minus

$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


//quantity plus minus end
