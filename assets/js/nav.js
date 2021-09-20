document.addEventListener("DOMContentLoaded", function(){
    var nav = document.getElementById('fixed_top')
    var initialNavPosition = nav.offsetTop;

    window.addEventListener('scroll', function() {
        console.log(window.scrollY);

        if (window.scrollY > initialNavPosition) {
          nav.classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          nav.classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
  // DOMContentLoaded  end