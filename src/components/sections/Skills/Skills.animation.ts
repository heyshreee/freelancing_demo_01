import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillsAnimation = (element: HTMLElement) => {
  // Selectors matching the classes in Skills.tsx
  const header = element.querySelector(".skills-header");
  const cards = element.querySelectorAll(".skill-card");

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Starts when the top of the section hits 80% of the viewport height
        end: "bottom 20%",
        toggleActions: "play none none reverse", // Plays on enter, reverses on leave
      },
    });

    // 1. Header slides up
    tl.from(header, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    });

    // 2. Cards Pop In (Staggered Grid Effect)
    tl.fromTo(cards, {
      y: 50,
      opacity: 0,
      scale: 0.9,
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
    }, "-=0.6"); 

  }, element);

  return ctx;
};