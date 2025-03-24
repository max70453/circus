/*  ---------------------------------------------------
  Template Name: DJoz
  Description:  DJoz Music HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {
  
 // Back to top button
 $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

$('.back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
});
    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    
    /*--------------------------
        Event Slider
    ----------------------------*/
    $(".event__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });
    
    /*--------------------------
        Videos Slider
    ----------------------------*/
    $(".videos__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            576: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    

    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

	$("#countdown-time").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='countdown__item'><span>%D</span> <p>Days</p> </div>" + "<div class='countdown__item'><span>%H</span> <p>Hours</p> </div>" + "<div class='countdown__item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='countdown__item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Barfiller
	--------------------*/
    $('#bar1').barfiller({
        barColor: "#ffffff",
    });

    $('#bar2').barfiller({
        barColor: "#ffffff",
    });

    $('#bar3').barfiller({
        barColor: "#ffffff",
    });

    /*-------------------
		Nice Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#111111",
        cursorwidth: "5px",
        background: "#e1e1e1",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

})(jQuery);

function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    //Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const errorDiv = document.getElementById("formErrors");

    //Reset errors
    errorDiv.innerHTML = "";
    [name, email, phone, message].forEach((field) => {
      field.classList.remove("error");
    });

    let errors = [];

    //Validate name
    if (!name.value.trim()) {
      errors.push("Пожалуйста введите ваше имя");
      name.classList.add("error");
    }
    //Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
          errors.push('Пожалуйста, введите корректный email');
          email.classList.add('error');
      }
    //Validate phone
    const phoneRegex = /^\+?[0-9]{10,15}$/;
      if (!phoneRegex.test(phone.value.trim())) {
          errors.push('Пожалуйста, введите корректный номер телефона');
          phone.classList.add('error');
      }
    //Validate message
    if (!message.value.trim()) {
      errors.push("Пожалуйста введите сообщение");
      message.classList.add("error");
    }
    // Display errors if any
    if (errors.length > 0) {
      errorDiv.innerHTML = errors.join('<br>');
      return false;
  }
   // If validation passes, process the form
   const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      message: message.value.trim()
  };
  // Send form data (you can replace this with your actual form processing logic)
  submitForm(formData);
  return false;
  }
  function submitForm(formData) {
      // Here you can add your form submission logic (e.g., AJAX call to your server)
      console.log('Form data:', formData);
      
      // For demonstration, show success message
      const form = document.getElementById('contactForm');
      const errorDiv = document.getElementById('formErrors');
      
      errorDiv.style.color = '#fff';
      errorDiv.innerHTML = 'Сообщение успешно отправлено!';
      form.reset();

      // Reset success message after 3 seconds
      setTimeout(() => {
          errorDiv.innerHTML = '';
          errorDiv.style.color = '#fff';
      }, 3000);
  }