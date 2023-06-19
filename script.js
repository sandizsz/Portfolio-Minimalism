

const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
let blob = CSSRulePlugin.getRule(".background::after");

timeline
  .fromTo(
    blob,
    { left: "-100px" }, // Starting position off the left side
    { left: "calc(50% - 50px)", duration: 1, ease: "Bounce.easeIn" } // Fly-in to the center
  )
  .from(".site-title, .site-menu", { y: -20, opacity: 0, duration: 0.7, ease: "ease.in" }, "-=0.0")
  .from(".hero-image-wrapper", { y: -50, opacity: 0, duration: 0.5, ease: "Power4.easeOut" }, "-=0.3")
  .from(".project-name, .divider", { y: -50, opacity: 0, duration: 0.5, ease: "Power4.easeOut" }, "-=0.5")
  .fromTo(
    ".project-data",
    { x: "-200px", opacity: 0 }, // Starting position off the left side and transparent
    { x: "0", opacity: 1, duration: 1, ease: "Power4.easeOut" },"-=0.2"  // Ease-in from the left with opacity fade-in
  )
  .fromTo(
    ".project-description",
    { x: "200px", opacity: 0 }, // Starting position off the right side and transparent
    { x: "0", opacity: 1, duration: 1, ease: "Power4.easeOut" }, "-=1" // Ease-in from the right with opacity fade-in
  );






  
/* observe project images -- START */


  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate the elements when they become visible
        const elements = document.querySelectorAll('.project-content');
  
        elements.forEach((element, index) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: index * 0.3 }
          );
        });
  
        // Stop observing the elements once they have been animated
        observer.unobserve(entry.target);
      }
    });
  });
  
  // Get the container or element that contains the elements to be observed
  const container = document.querySelector('.project-content-container');
  
  // Start observing the container or element
  observer.observe(container);
  

  /* observe project images -- END */