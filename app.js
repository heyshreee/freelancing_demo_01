// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  // Mobile Menu Toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      navList.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links").forEach((n) =>
      n.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        navList.classList.remove("active");
      })
    );
  }

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power3.out" },
  });

  tl.from("#logo", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  }).from(
    ".nav-links",
    {
      y: -100,
      opacity: 0,
      duration: 0.2,
      ease: "power4.out",
      stagger: 0.2,
    },
    "-=0.8"
  );

  tl.from(".title", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  })
    .from(
      ".subtitle",
      {
        y: 30,
        opacity: 0,
        duration: 1,
      },
      "-=0.8"
    )
    .from(
      ".btn",
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".scroll-indicator",
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6"
    );

  // Responsive ScrollTrigger using matchMedia
  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    // DESKTOP: Horizontal Scroll
    const sections = gsap.utils.toArray(".panel");
    const container = document.querySelector(".scroll-container");

    const scrollTween = gsap.to(sections, {
      x: () => -window.innerWidth * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: 0.7,
        end: () => "+=" + container.offsetWidth * sections.length,
      },
    });

    sections.forEach((panel) => {
      const text = panel.querySelectorAll(".gallery-text > *");
      const image = panel.querySelector(".gallery-image-container");
      const end_text = panel.querySelector(".end-title");
      const end_description = panel.querySelector(".end-description");
      const end_btn = panel.querySelector(".cta-button");

      // TEXT ANIMATION
      if (text.length > 0) {
        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        });
      }
      if (end_text) {
        gsap.from(end_text, {
          y: -150,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        });
      }
      if (end_description) {
        gsap.from(end_description, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        });
      }
      if (end_btn) {
        gsap.from(end_btn, {
          y: 150,
          opacity: 0,
          duration: 1,
          delay: 0.5,
          stagger: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        });
      }
      // IMAGE ANIMATION
      if (image) {
        gsap.from(image, {
          scale: 0.8,
          rotation: -2,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    /* ---------------------
       LAST PANEL SCALE-UP
    --------------------- */
    gsap.from(".scale-up-anim", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".panel:last-child",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reverse",
      },
    });
  });

  mm.add("(max-width: 767px)", () => {
    // MOBILE: Vertical Scroll Animations
    const sections = gsap.utils.toArray(".panel");

    sections.forEach((panel) => {
      const text = panel.querySelectorAll(".gallery-text > *");
      const image = panel.querySelector(".gallery-image-container");
      const end_text = panel.querySelector(".end-title");
      const end_description = panel.querySelector(".end-description");
      const end_btn = panel.querySelector(".cta-button");

      // TEXT ANIMATION
      if (text.length > 0) {
        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%", // Trigger when top of panel hits 80% viewport height
            toggleActions: "play none none reverse",
          },
        });
      }
      if (end_text) {
        gsap.from(end_text, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
      if (end_description) {
        gsap.from(end_description, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
      if (end_btn) {
        gsap.from(end_btn, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
      // IMAGE ANIMATION
      if (image) {
        gsap.from(image, {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  });

  // Mouse Parallax Effect (Desktop Only or subtle on mobile)
  document.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 768) return; // Disable on mobile

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to(".title", {
      x: x,
      y: y,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(".subtitle", {
      x: -x * 0.5,
      y: -y * 0.5,
      duration: 1,
      ease: "power2.out",
    });
  });

  gsap.from(".contact-content", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: 100,
    opacity: 0.5,
  });

  gsap.from(".contact-title", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      end: "bottom bottom",
      stagger: 0.1,
    },
    y: 100,
    opacity: 0.5,
  });

  gsap.from(".email-link", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      end: "bottom bottom",
      stagger: 0.3,
      delay: 0.2,
    },
    y: 100,
    opacity: 0.5,
  });

  gsap.from(".socials a", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 90%",
      end: "bottom bottom",
    },
    y: 40,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
    stagger: 0.2,
  });

  // about session
  gsap.from(".about-content", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: 100,
    opacity: 0.5,
  });

  gsap.from(".about-title", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: 100,
    opacity: 0.5,
  });

  gsap.from(".about-subtitle", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from(".about-paragraph", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.1,
    ease: "power3.out",
  });

  gsap.from(".about-subpoints > *", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom bottom",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".about-highlight", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Playground animation

  gsap.from("#playground", {
    scrollTrigger: {
      trigger: "#playground",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from(".playground-number", {
    scrollTrigger: {
      trigger: "#playground",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.inOut",
  });

  gsap.from(".playground-title", {
    scrollTrigger: {
      trigger: "#playground",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: 100,
    opacity: 0.5,
    duration: 1,
    delay: 0.3,
    ease: "power3.inOut",
  });

  gsap.from("#grid-container", {
    scrollTrigger: {
      trigger: "#playground",
      start: "top 80%",
      end: "bottom bottom",
    },
    y: 100,
    opacity: 0.5,
    duration: 1,
    delay: 0.4,
    ease: "power3.inOut",
  });

  // Force refresh to ensure calculations are correct after layout changes
  ScrollTrigger.refresh();
});

document.querySelector(".scroll-top-btn")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const gridContainer = document.getElementById("grid-container");
const totalItems = 48; // Total grid items

// Build Grid
for (let i = 0; i < totalItems; i++) {
  const item = document.createElement("div");
  item.className =
    "grid-item w-full aspect-square bg-gray-800/50 rounded-full transition-colors duration-300";
  // Randomize slight initial transparency
  item.style.opacity = 0.2 + Math.random() * 0.3;
  gridContainer.appendChild(item);
}

const gridItems = document.querySelectorAll(".grid-item");

// Grid Interaction Loop
document.addEventListener("mousemove", (e) => {
  // Only calculate if section is in view to save performance
  const gridRect = gridContainer.getBoundingClientRect();
  if (gridRect.top > window.innerHeight || gridRect.bottom < 0) return;

  gridItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenterX = rect.left + rect.width / 2;
    const itemCenterY = rect.top + rect.height / 2;

    // Distance Formula
    const dist = Math.sqrt(
      Math.pow(e.clientX - itemCenterX, 2) +
      Math.pow(e.clientY - itemCenterY, 2)
    );

    // Max distance to affect elements
    const radius = 300;

    if (dist < radius) {
      const strength = 1 - dist / radius;

      // Dynamic GSAP animation based on distance
      gsap.to(item, {
        scale: 1 + strength * 1.5, // Scale up closer items
        backgroundColor: `rgb(${150 + strength * 105}, ${50 + strength * 205
          }, ${255})`, // Shift to purple
        opacity: 0.5 + strength * 0.5,
        duration: 0.2,
        overwrite: "auto",
      });
    } else {
      gsap.to(item, {
        scale: 1,
        backgroundColor: "rgba(31, 41, 55, 0.5)",
        opacity: 0.3,
        duration: 0.5,
        overwrite: "auto",
      });
    }
  });
});
