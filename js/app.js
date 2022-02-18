// projects

const lotus1 = document.querySelector(".lotus1");
const lotus1_expl = document.querySelector(".lotus1_expl");
const lotus2 = document.querySelector(".lotus2");
const lotus2_expl = document.querySelector(".lotus2_expl");
const lotus3 = document.querySelector(".lotus3");
const lotus3_expl = document.querySelector(".lotus3_expl");
const lotus4 = document.querySelector(".lotus4");
const lotus4_expl = document.querySelector(".lotus4_expl");
const lotus5 = document.querySelector(".lotus5");
const lotus5_expl = document.querySelector(".lotus5_expl");
const lotus6 = document.querySelector(".lotus6");
const lotus6_expl = document.querySelector(".lotus6_expl");

lotus1.addEventListener("mouseover", hover1);

function hover1() {
  lotus1_expl.style.display = "block";
  lotus1.addEventListener("mouseout", (e) => {
    lotus1_expl.style.display = "none";
  });
}

lotus2.addEventListener("mouseover", hover2);

function hover2() {
  lotus2_expl.style.display = "block";
  lotus2.addEventListener("mouseout", (e) => {
    lotus2_expl.style.display = "none";
  });
}

lotus3.addEventListener("mouseover", hover3);

function hover3() {
  lotus3_expl.style.display = "block";
  lotus3.addEventListener("mouseout", (e) => {
    lotus3_expl.style.display = "none";
  });
}

lotus4.addEventListener("mouseover", hover4);

function hover4() {
  lotus4_expl.style.display = "block";
  lotus4.addEventListener("mouseout", (e) => {
    lotus4_expl.style.display = "none";
  });
}

lotus5.addEventListener("mouseover", hover5);

function hover5() {
  lotus5_expl.style.display = "block";
  lotus5.addEventListener("mouseout", (e) => {
    lotus5_expl.style.display = "none";
  });
}

lotus6.addEventListener("mouseover", hover6);

function hover6() {
  lotus6_expl.style.display = "block";
  lotus6.addEventListener("mouseout", (e) => {
    lotus6_expl.style.display = "none";
  });
}

// art work
const thumb1 = document.querySelector(".thumb1");
const thumb2 = document.querySelector(".thumb2");
const thumb3 = document.querySelector(".thumb3");
const thumb4 = document.querySelector(".thumb4");
const art = document.getElementById("art");
const modal = document.querySelector(".modal");
const modal_hidden = document.querySelector(".modal_hidden");
const close_modal = document.querySelector(".close-modal");

function modalOpen() {
  modal.classList.remove("modal_hidden");
}

thumb1.addEventListener("click", function () {
  modalOpen();
  art.src = "images/art1.png";
});

thumb2.addEventListener("click", function () {
  modalOpen();
  art.src = "images/art2.png";
});

thumb3.addEventListener("click", function () {
  modalOpen();
  art.src = "images/art3.png";
});

thumb4.addEventListener("click", function () {
  modalOpen();
  art.src = "images/art4.png";
});

close_modal.addEventListener("click", (e) => {
  modal.classList.add("modal_hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("modal_hidden");
  }
});
