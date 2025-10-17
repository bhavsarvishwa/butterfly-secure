const speedSelect = document.getElementById("speedSelect");
const colorSelect = document.getElementById("colorSelect");
const spawnBtn = document.getElementById("spawnBtn");
const resetBtn = document.getElementById("resetBtn");
const butterflyArea = document.getElementById("butterflyArea");
const totalCountDisplay = document.querySelector("#totalCount span");

let butterflyCount = 0;

window.onload = () => {
  const savedSpeed = localStorage.getItem("butterflySpeed");
  const savedColor = localStorage.getItem("butterflyColor");
  const savedCount = localStorage.getItem("butterflyCount");

  if (savedSpeed) speedSelect.value = savedSpeed;
  if (savedColor) colorSelect.value = savedColor;
  if (savedCount) {
    butterflyCount = parseInt(savedCount);
    totalCountDisplay.textContent = butterflyCount;
  }
};

speedSelect.addEventListener("change", () => {
  localStorage.setItem("butterflySpeed", speedSelect.value);
});

colorSelect.addEventListener("change", () => {
  localStorage.setItem("butterflyColor", colorSelect.value);
});

spawnBtn.addEventListener("click", () => {
  spawnButterfly();
  butterflyCount++;
  localStorage.setItem("butterflyCount", butterflyCount);
  totalCountDisplay.textContent = butterflyCount;
  updateChart();
});

resetBtn.addEventListener("click", () => {
  localStorage.clear();
  butterflyArea.innerHTML = "";
  butterflyCount = 0;
  totalCountDisplay.textContent = "0";
  alert("Preferences and data cleared!");
  updateChart(true);
});

function spawnButterfly() {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");

  const color = colorSelect.value;
  butterfly.style.background = color;
  butterfly.style.left = Math.random() * (butterflyArea.offsetWidth - 40) + "px";
  butterfly.style.top = Math.random() * (butterflyArea.offsetHeight - 40) + "px";

  butterflyArea.appendChild(butterfly);

  animateButterfly(butterfly);
}


