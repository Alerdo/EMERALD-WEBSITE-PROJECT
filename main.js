


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
  var links = document.querySelectorAll('nav a');

  links.forEach((link, index) => {
    link.style.color = '';
    link.style.backgroundColor = '';

    if (link.getAttribute('href').substring(1) === currentSection) {
      link.style.color = 'white';
      link.style.backgroundColor = '#00CC99';

      icons[index].style.color = 'white';
    } else {
    

      icons[index].style.color = '';
    }
  });
});








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