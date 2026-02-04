const btn = document.getElementById("tuktukBtn");
const tuktuk = document.getElementById("tuktuk");

if (btn && tuktuk) {
  btn.addEventListener("click", () => {
    // restart animation
    tuktuk.classList.remove("drive");
    void tuktuk.offsetWidth; // forces animation restart
    tuktuk.classList.add("drive");
  });

  tuktuk.addEventListener("animationend", () => {
    tuktuk.classList.remove("drive");
    tuktuk.style.display = "none";
  });
}
