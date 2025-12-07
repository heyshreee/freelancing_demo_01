import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = (element: HTMLElement) => {
  const header = element.querySelector(".about-header");
  const card = element.querySelector(".about-card");
  const paragraphs = element.querySelectorAll(".about-text");
  const pills = element.querySelectorAll(".tech-pill");

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
      scrollTrigger: {
        trigger: element,
        start: "top 75%", // Starts when top of section hits 75% of viewport
        end: "bottom top",
        toggleActions: "play none none reverse", // Plays on enter, reverses on leave
      },
    });

    // 1. Header slides up
    tl.from(header, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    });

    // 2. Card scales up slightly and fades in
    tl.from(card, {
      y: 50,
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6"); // Overlaps with header

    // 3. Paragraphs flow in one by one
    tl.from(paragraphs, {
      y: 20,
      opacity: 0,
      stagger: 0.2, // 0.2s delay between each paragraph
    }, "-=0.4");

    // 4. Tech pills pop in
    tl.from(pills, {
      scale: 0,
      opacity: 0,
      stagger: 0.1, // Rapid fire effect
      ease: "back.out(1.7)", // Bouncy effect
    }, "-=0.2");

  }, element);

  return ctx;
};