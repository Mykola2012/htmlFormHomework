"Use strict";

const bollFormEl = document.querySelector(".boll-volume");

bollFormEl.addEventListener("input", calcVolumeBoll);

function calcVolumeBoll(e) {
  const pBollResultEl = document.querySelector(".boll-result");

  pBollResultEl.textContent = `${(4 / 3) * Math.PI * e.target.value ** 3}`;
}
