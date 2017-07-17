/*
 * Violet main js
 * Version 1.0.0
 * URL: http://schoolz.cf
 * Description: This js file is required for different interactive task
 * Author: Rakib Hossain
 *
 */

$( document ).ready(function() {

    
 //===============================Isotope======================
  //var $grid = $('.items').isotope({});
   //=============================MixitUp======================
    $('.items').mixItUp();

    $('.portfolio-item').on( 'mouseleave', function() {
    $('.portfolio-hover').addClass('animated');});

 //================================ owl-carousel======================
 //========header Slider slider=======
$('.main-slider').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:0,
    responsive: { 0: {items: 1} }
});

//===========Testimonial Slider=============
              var owl = $('.testimonial-slide');
              owl.owlCarousel({
                loop: true,
                items: 1,
                nav: false,
                navigation: true,
                autoplay:true,
                autoplayTimeout:3500,
                autoplayHoverPause:true,
                //animateOut: 'slideOutDown',
                //animateIn: 'slideIntDown',
                
              })
              owl.on('translate.owl.carousel',function(){
                $('.testimonial .person').removeClass('animated zoomIn').css("opacity","0.2");
              });
              owl.on('translated.owl.carousel',function(){
                $('.testimonial .person').addClass('animated zoomIn').css("opacity","1");
              });

        
        
//============Partner slider==========  
$('.partner-slide').owlCarousel({
    center: true,
    items:5,
    loop:true,
    margin:5,
    responsive: { 0: {items: 1}, 600: {items: 3}, 1000: {items: 5} }
});

    
//===============wow js========== 
    new WOW().init();
  
  
  
//===============counterup==========
    $('.counter').counterUp({
         delay: 10,
         time: 9000
    });

   // $(".title h2").append("<p class='hr-40'></p>");
   
   
   
//===============UI Top==========
    $().UItoTop({ easingType: 'easeOutQuart' });

  
//==============Bubble js==========
        // var phrases = [
        // 'I’M Rakib Hossain'
        // ];
        // var len = phrases.length;
        // var index = 0;
        
        // var ctrl = bubbleText({
        // element: $('#bubble'),
        // newText: phrases[index++],
        // letterSpeed: 8,
        // repeat: Infinity,
        // timeBetweenRepeat: 3000,
        // callback: function() {
        // this.newText = phrases[index++ % len];
        // },
        // });




//===============contact map scrolling disable==========
  $('.contact-map').click(function(){
      $(this).find('iframe').addClass('clicked')}).mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});



//===============contact form==========
//select checkbox data
$(".contact-form #subscribe").click(function(){
  _this=this;
  if($(_this).val()==''){
    $(_this).val('yes');
  }else{$(_this).val('');}
  
});
//form action
$(".contact-form .submit").click(function(e){
  userSubmitForm();
  e.preventDefault();
  return false;
});
    //select util.js required
          function userSubmitForm(){
            var error = formValidate($(".contact-form form"), {
              error_message_show: true,
              error_message_time: 55000,
              error_message_class: "info-error",
              error_fields_class: "error_fields_class",
              exit_after_first_error: true,
              rules: [
                {
                  field: "username",
                  min_length: { value: 1,  message: 'Name can\'t not be empty' },
                  max_length: { value: 16, message: 'Name too long'}
                },
                {
                  field: "email",
                  min_length: { value: 7,  message: 'Email can not be empty' },
                  max_length: { value: 30, message: 'Email too long'},
                  mask: { value: "^([a-z0-9_\-]+\\.)*[a-z0-9_\\-]+@[a-z0-9_\-]+(\\.[a-z0-9_\-]+)*\\.[a-z]{2,6}$", message: 'Email Incorrect'}
                },
                {
                  field: "message",
                  min_length: { value: 1,  message: 'Message can not be empty' },
                  max_length: { value: 250, message: 'Too \'long message'}
                }
              ]
            });
            if (!error) {

              var user_name  = $(".contact-form #username").val();
              var user_email = $(".contact-form #email").val();
              var user_msg   = $(".contact-form #message").val();
        var user_subscription   = $(".contact-form #subscribe").val();
      
       //
      if(user_subscription!=''){
        var sdata = {
                action: "submit_subscription",
                nonce: "m32ow3stg6",
                name: user_name,
                email: user_email
              };
        $.post("assets/mail/subscribe.php", sdata, userSubscriptionResponse, "text");
        
      }
      //send data
              var data = {
                action: "submit_contact_form",
                nonce: "m32o0mqf67",
                name: user_name,
                email: user_email,
                msg: user_msg
              };
              $.post("assets/mail/send.php", data, userSubmitFormResponse, "text");
            }

          }

    //get response
          function userSubmitFormResponse(response) {
            var rez = JSON.parse(response);
            $(".contact-form .result")
              .toggleClass("info-error", false)
              .toggleClass("info-success", false);
            if (rez.error == "") {
              $(".contact-form #subscribe").val('');
              $(".contact-form .result").addClass("info-success").html("Your message sent!");
              setTimeout("$('.contact-form .result').fadeOut(); $('.contact-form form').get(0).reset();", 3000);
            } else {
              $(".contact-form .result").addClass("info-error").html("Transmit failed! " + rez.error);
            }
            $(".contact-form .result").fadeIn();
          }
      
    //get subscription response
          function userSubscriptionResponse(response) {
            var rez = JSON.parse(response);
            $(".subscribe")
              .toggleClass("error", false)
              .toggleClass("success", false);
        $('.subscribe').fadeIn();
            if (rez.error == "") {
              $(".subscribe").addClass("success");
              $(".subscribe .notice").html("Your Subscription Success!");
              
            } else {
              $(".subscribe").addClass("error");
              $(".subscribe .notice").html("Subscription failed");
            }
            setTimeout("$('.subscribe').fadeOut();", 3000);
          }
//===============contact form end==========


//jQuery end        
});
