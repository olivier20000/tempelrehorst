document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("tuktukBtn");
  const tuktuk = document.getElementById("tuktuk");

  // 1. Setup the audio (make sure 'tuktuk.mp3' is in your folder)
  const audio = new Audio("tuktuk.mp3");

  if (!btn || !tuktuk) return;

  btn.addEventListener("click", () => {
    // 2. Play the sound
    audio.currentTime = 0; // Rewind to start so you can click fast
    audio.play();

    // --- YOUR EXISTING ANIMATION CODE ---
    
    // reset position + animation
    tuktuk.classList.remove("drive");
    tuktuk.style.left = "-250px";

    // force browser reflow (this allows the animation to restart instantly)
    void tuktuk.offsetWidth;

    // start animation
    tuktuk.classList.add("drive");
  });
});
