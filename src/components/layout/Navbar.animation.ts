import gsap from "gsap";

export const navbarAnimation = (navElement: HTMLElement) => {
  const logo = navElement.querySelector(".nav-logo");
  const links = navElement.querySelectorAll(".nav-link");
  const toggle = navElement.querySelector(".nav-toggle");

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Slide the Navbar container down from top
    tl.from(navElement, {
      yPercent: -100,
      duration: 0.8,
      opacity: 0,
    });

    // 2. Fade in Logo
    tl.from(logo, {
      y: -20,
      opacity: 0,
      duration: 0.5,
    }, "-=0.4"); // Start slightly before navbar finishes sliding

    // 3. Stagger the Links (Desktop)
    tl.from(links, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1, // Animate one by one
    }, "-=0.3");

    // 4. Pop in the Mobile Toggle button (if visible)
    tl.from(toggle, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
    }, "<"); // Start at same time as links

  }, navElement);

  return ctx;
};