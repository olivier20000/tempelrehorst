document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("tuktukBtn");
  const tuktuk = document.getElementById("tuktuk");

  if (!btn || !tuktuk) return;

  btn.addEventListener("click", () => {
    // reset position + animation
    tuktuk.classList.remove("drive");
    tuktuk.style.left = "-250px";

    // force browser reflow
    void tuktuk.offsetWidth;

    // start animation
    tuktuk.classList.add("drive");
  });
});
