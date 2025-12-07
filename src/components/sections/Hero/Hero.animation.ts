import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const heroAnimation = (el: HTMLDivElement) => {
  const title = el.querySelector(".hero-title");
  const subtitle = el.querySelector(".hero-subtitle");
  const subtext = el.querySelector(".hero-subtext");
  const buttons = el.querySelectorAll(".hero-btn");
  
  // NEW SELECTORS
  const socialLinks = el.querySelectorAll(".hero-social a");
  const socialLine = el.querySelector(".hero-social-line");

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1, },
    });

    // 1. Text Elements
    tl.from(title, { y: 50, opacity: 0,delay: 1 })
      .from(subtitle, { y: 30, opacity: 0 }, "-=0.6")
      .from(subtext, { y: 20, opacity: 0 }, "-=0.6")
      .from(buttons, { y: 20, opacity: 0, stagger: 0.1 }, "-=0.4");

    // 2. NEW: Social Sidebar Animation
    // Fade in icons from the left
    tl.from(socialLinks, {
      x: -20,
      opacity: 0,
      stagger: 0.1, // One after another
      duration: 0.8
    }, "-=0.8"); // Start while buttons are still animating

    // Grow the line downwards
    tl.from(socialLine, {
      scaleY: 0,
      opacity: 0,
      duration: 0.8
    }, "-=0.4");


    // 3. Scroll Exit
    gsap.to(el, {
      opacity: 0,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, el);

  return ctx;
};