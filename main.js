


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

  let links = document.querySelectorAll('nav a');

  links.forEach((link) => {
    link.style.color = '';
    link.style.backgroundColor = '';
  
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.style.backgroundColor = '#00997A';
      link.style.color = 'white';
    }
  })});








  //Using JavaScript to make the navigation-bar smaller 
  function toggleNavLinks() {
    const navLinks = document.querySelector('.topNav ul');
    navLinks.classList.toggle('show'); // Toggle the show class on click
  }

   const showNavBar =() => {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


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