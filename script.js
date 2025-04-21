document.getElementById("claimBtn").addEventListener("click", function() {
  const claimBtn = document.getElementById("claimBtn");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  claimBtn.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    result.classList.remove("hidden");

    const sound = new Audio("https://www.fesliyanstudios.com/play-mp3/6653");
    sound.play();
  }, 4000);
});