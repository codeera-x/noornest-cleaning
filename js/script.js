const toggleMenu = () => {
  const navMenu = document.querySelector(".nav-links");

  navMenu.classList.toggle("active");
};

function toggleDropdown(event) {
  const dropdowns = event.target.closest(".dropdown");

  if (dropdowns) {
    const dropdownContent = document.querySelector(".dropdown-content");
    const chevronDown = document.querySelector(".fa-chevron-down");

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      chevronDown.style.transform = "rotate(0deg)";
    } else {
      dropdownContent.style.display = "block";
      chevronDown.style.transform = "rotate(180deg)";
    }
  }
}

const tab = () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const contentsCards = document.querySelectorAll(".price-cards");

  tabBtns.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active states
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      contentsCards.forEach((content) => content.classList.remove("active"));

      // Add active to the clicked button
      button.classList.add("active");

      // Determine which content to show
      const contentId =
        button.id === "monthlyBtn" ? "monthlyContent" : "yearlyContent";
      document.getElementById(contentId).classList.add("active");
    });
  });
};

// ✅ Call the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", tab);

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("heroVideo");
  const playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", function () {
    video.play();
    playBtn.style.display = "none"; // hide button
  });

  video.addEventListener("ended", function () {
    playBtn.style.display = "flex"; // show button again
  });
});

const qualityTab = () => {
  const qualityBtns = document.querySelectorAll(".qualityBtn");
  const qualityCards = document.querySelectorAll(".quality-card");

  qualityBtns.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active states
      qualityBtns.forEach((btn) => btn.classList.remove("active"));
      qualityCards.forEach((content) => content.classList.remove("active"));

      // Add active to the clicked button
      button.classList.add("active");

      // Determine which content to show
      const btnId = button.id;
      const contentId = btnId.replace("Btn", "Content");
      const activeContent = document.getElementById(contentId);

      // Show corresponding content
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
};

qualityTab();

