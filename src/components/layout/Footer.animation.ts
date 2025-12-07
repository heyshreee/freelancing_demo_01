import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const footerAnimation = (element: HTMLElement) => {
  const logo = element.querySelector(".footer-logo");
  const socialLinks = element.querySelectorAll(".footer-social a");
  const navLinks = element.querySelectorAll(".footer-nav a");
  const divider = element.querySelector(".footer-divider");
  const copyright = element.querySelector(".footer-copy");

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
      scrollTrigger: {
        trigger: element,
        start: "top 90%", // Starts when footer is just barely visible
        toggleActions: "play none none reverse",
      },
    });

    // 1. Divider Line expands from center
    tl.from(divider, {
      scaleX: 0,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    });

    // 2. Logo slides up
    tl.from(logo, {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.8");

    // 3. Social Icons Pop in
    tl.fromTo(socialLinks, {
      y: 15,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
    }, "-=0.6");

    // 4. Nav Links Fade in
    tl.from(navLinks, {
      y: 10,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
    }, "-=0.4");

    // 5. Copyright fades in
    tl.from(copyright, {
      opacity: 0,
      duration: 1,
    }, "-=0.4");

  }, element);

  return ctx;
};