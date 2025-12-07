import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectAnimation = (element: HTMLElement) => {
  const header = element.querySelector(".project-header");
  const cards = element.querySelectorAll(".project-card"); // We will add this class to the cards

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Starts when top of section hits 80% of viewport
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // 1. Header slides up
    tl.from(header, {
      y: 50,
      opacity: 0,
    });

    // 2. Cards Stagger In
    tl.from(cards, {
      y: 50,
      opacity: 0,
      stagger: 0.1, // 0.1s delay between each card
      duration: 1,  // Slower duration for a smoother feel
    }, "-=0.5"); // Start slightly before the header finishes

  }, element);

  return ctx;
};