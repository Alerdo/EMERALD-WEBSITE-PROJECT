


//Ssing javascript to change the backgrond of nav links while scrolling down or cliking

window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach( section => {
        var sectionTop = section.offsetTop; //It represents the distance between the top of an element and the top of its offset parent
        var sectionHeight = section.clientHeight; //Height of section
        let diffrence = sectionTop - (sectionHeight/4)
        if (window.pageYOffset >= sectionTop - sectionHeight / 4) {
          currentSection = section.getAttribute('id');  //Get id name of currrent section which is the same href for the links
          
}}); 
 
        var links = document.querySelectorAll('nav a');
        links.forEach(link => {
        link.style.color = '';
        link.style.backgroundColor = ''; // Reset values we want to change 
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.style.color = 'white'; 
            link.style.backgroundColor = '#2EE59D'; //Set new values for the changed ones
        }
        });
    });

  