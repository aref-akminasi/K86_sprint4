window.onload = function () {
  /* gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
  gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.3 });
  gsap.fromTo(
    ".reverse",
    { opacity: 0, scale: 0, rotation: 720 },
    { duration: 1, opacity: 1, scale: 1, rotation: 0 }
  );*/
  /* const timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline
    .from(".header", { y: "-100%", ease: "bounce" })
    .from(".link", { opacity: 0, stagger: 0.3 })
    .fromTo(
      ".reverse",
      { opacity: 0, scale: 0, rotation: 720 },
      { duration: 1, opacity: 1, scale: 1, rotation: 0 }
    );*/

  function applyAnimationAirplane() {
    gsap.fromTo(
      ".airplane",
      { x: "-10vw" },
      {
        duration: 20,
        x: "100vw",
      }
    );
  }

  function applyAnimationCloud() {
    gsap.fromTo(".cloud", { x: "-10vw" }, { duration: 250, x: "100vw" });
    gsap.fromTo(".cloud2", { x: "0vw" }, { duration: 250, x: "100vw" });
    gsap.fromTo(".cloud3", { x: "10vw" }, { duration: 250, x: "100vw" });
    gsap.fromTo(".cloud4", { x: "25vw" }, { duration: 250, x: "100vw" });
    gsap.fromTo(".cloud5", { x: "50vw" }, { duration: 250, x: "100vw" });
  }
  applyAnimationAirplane();
  applyAnimationCloud();
  setInterval(applyAnimationAirplane, 21000);
};
