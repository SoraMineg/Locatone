document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");
    const toggle = document.querySelector(".toggle");
  
    btn.addEventListener("click", () => {
      toggle.style.gridTemplateRows =
        toggle.style.gridTemplateRows === "1fr" ? "0fr" : "1fr";
    });
  });
  