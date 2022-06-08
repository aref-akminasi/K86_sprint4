window.onload = function () {
  function applyAnimationAirplane() {
    gsap.fromTo(
      ".airplane",
      { x: "-10vw" },
      {
        duration: Math.floor(Math.random() * 10) + 10,
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
