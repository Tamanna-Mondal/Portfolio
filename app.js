function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const mymail = "tamannamondal0111@gmail.com"; // Replace with your WhatsApp number
    const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  
    window.open(`https://wa.me/${mymail}?text=${fullMessage}`, "_blank");
  }

  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }

     // Check if click is outside both hamburger and navLinks
     document.addEventListener('click', function (event) {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.querySelector('.hamburger');
    
        // Check if click is outside both hamburger and navLinks
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
          navLinks.classList.remove('active');
        }
      });

//dark mode

       
  
  
  