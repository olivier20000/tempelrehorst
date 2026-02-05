document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("tuktukBtn");
  
  // 1. Setup Audio
  const audio = new Audio("tuktuk.mp3");

  if (!btn) return;

  btn.addEventListener("click", () => {
    // --- AUDIO LOGIC ---
    // Only play if the audio is currently paused (finished)
    if (audio.paused) {
      audio.play().catch(e => console.log("Audio error:", e));
    }

    // --- SPAWN LOGIC ---
    createTukTuk();
  });

  function createTukTuk() {
    // 1. Create a new Image element
    const newTuk = document.createElement("img");
    
    // 2. Set source and class
    newTuk.src = "tuktuk.png"; 
    newTuk.classList.add("tuktuk-racer"); // This triggers the CSS animation

    // 3. Optional: Randomize speed slightly (between 3s and 5s)
    // If you want them all same speed, remove the next line.
    newTuk.style.animationDuration = (Math.random() * 2 + 3) + "s";

    // 4. Add to the body
    document.body.appendChild(newTuk);

    // 5. Cleanup! 
    // Remove the element from the HTML after 5 seconds so the browser 
    // doesn't get slow if someone clicks 1000 times.
    setTimeout(() => {
      newTuk.remove();
    }, 5000);
  }
});
