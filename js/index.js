"Use strict";

const bollFormEl = document.querySelector(".boll-volume");

bollFormEl.addEventListener("input", calcVolumeBoll);

function calcVolumeBoll(e) {
  const pBollResultEl = document.querySelector(".boll-result");

  pBollResultEl.textContent = `${(4 / 3) * Math.PI * e.target.value ** 3}`;
}

const textareaEl = document.querySelector("textarea");

textareaEl.oninput = (e) => {
  const TEXTAREA_REG_EXP = /^\S+$/;
  if (TEXTAREA_REG_EXP.test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
};
