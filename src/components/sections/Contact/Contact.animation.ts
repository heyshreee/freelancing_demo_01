import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const contactAnimation = (element: HTMLElement) => {
  const header = element.querySelector(".contact-header");
  const card = element.querySelector(".contact-card");
  const items = element.querySelectorAll(".contact-item"); // Inner items (Button, Text, Icons)
  const btn = element.querySelectorAll(".contact-btn"); // Inner items (Button, Text, Icons)

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
      scrollTrigger: {
        trigger: element,
        start: "top 75%", // Animation starts when top of section hits 75% of viewport
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    // 1. Header slides up
    tl.from(header, {
      y: 50,
      opacity: 0,
    });

    // 2. Card scales up and fades in
    tl.from(card, {
      scale: 0.9,
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6");

    tl.from(btn, {
      scale: 0.9,
      y: 10,
      opacity: 1,
      duration: 0.8,
    }, "-=0.6");

    // 3. Inner Items Stagger In (Button -> Text -> Socials)
    tl.from(items, {
      y: 20,
      opacity: 0,
      stagger: 0.15,
    }, "-=0.4");

  }, element);

  return ctx;
};