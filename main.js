


//Using javascript to change the backgrond of nav links while scrolling down or cliking

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const sections = document.querySelectorAll('section');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    let difference = sectionTop - (sectionHeight / 4);
    if (window.pageYOffset >= difference) {
      currentSection = section.getAttribute('id');
    }
  });

  let icons = document.querySelectorAll("i");
  let links = document.querySelectorAll('nav a');

  links.forEach((link, index) => {
    // Reset all styles to default first
    link.style.color = '';
    link.style.backgroundColor = '';
    icons[index].style.color = '';

    if (link.getAttribute('href').substring(1) === currentSection) {
      link.style.backgroundColor = '#00997A';
      icons[index].style.color = 'white';
      link.style.color = 'white';
    }
  });
});









// Toggle function
function toggleNavLinks() {
  var nav = document.getElementById('nav');
  if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'block';
  } else {
      nav.style.display = 'none';
  }
}
// Event listener to close navbar when clicking outside
document.addEventListener('click', function(event) {
  if (window.innerWidth <= 700) {
      var nav = document.getElementById('nav');
      var toggleButton = document.querySelector('.icon');

      if (!nav.contains(event.target) && !toggleButton.contains(event.target)) {
          nav.style.display = 'none';
      }
  }
});

// Event listener to close navbar when clicking on a link
var navLinks = document.querySelectorAll('#nav a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
      if (window.innerWidth <= 700) {
          var nav = document.getElementById('nav');
          nav.style.display = 'none';
      }
  });
});


   // JavaScript for initializing the Slick Carousel
   $(document).ready(function(){
    $('.gallery').slick({
      arrows: true,
      prevArrow: '<div class="slick-prev">◄</div>',
      nextArrow: '<div class="slick-next">►</div>',
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });

  /*
  window.addEventListener('scroll',() => {
    const logo = document.getElementById('logo');
    const section = document.getElementById('home')
    const sectionHeight = section.clientHeight;
    const header = document.getElementsByTagName('header')[0]; //since this returns a collection I acces the one and the only
    const nav = document.getElementsByTagName('nav')[0];


     
    if(window.pageYOffset > (sectionHeight /1.1) ) {
        logo.style.display = 'none';
        header.style.height = '5vw'
        nav.style.height = '100%'
    } else {
        logo.style.display = 'block'
        header.style.height = '10vw'
        nav.style.height = ''
    }
  }) */