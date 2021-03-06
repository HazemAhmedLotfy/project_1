function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

////////////////////////////

$('.logosSlider').owlCarousel({
    loop: true,
    margin: 15,
    //autoplay: true,
    //autoplayTimeout: 3000,
    smartSpeed: 500,
    nav: true,
    dots: false,
    navText: ['<i class="icon-arrow-down"></i>','<i class="icon-arrow-down"></i>'],
    lazyLoad:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.clientSlider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 500,
    dots: false,
    lazyLoad:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
});

$('.clientSlider').on('translate.owl.carousel', function(event) {
    $(this).find(".item").hide();
});

$('.clientSlider').on('translated.owl.carousel', function(event) {
    $(this).find(".item").addClass('fade-in-image fade-in-image').show();
});

$('.whyUsSlider').owlCarousel({
  loop: false,
  margin: 0,
  autoplay: false,
  smartSpeed: 500,
  nav: false,
  dots: true,
  lazyLoad:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 650) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
});

$("#bannerVid").each(function(){ this.play(); });
// $('#bannerVid').play();

AOS.init();
