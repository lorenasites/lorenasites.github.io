function showPhone() {
  var Phonediv = document.getElementById("Phone");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

window.addEventListener("scroll", function () {
  const aboutContainer = document.querySelector(".about-container");
  const background = document.querySelector(".background");

  // Get the position of the profile container relative to the viewport
  const aboutPosition = aboutContainer.getBoundingClientRect().top;

  // Check if the profile container is in the viewport
  if (aboutPosition <= window.innerHeight && aboutPosition >= 0) {
    background.classList.add("about"); // Add the class for the new background
  } else {
    background.classList.remove("about"); // Remove the class if not in view
  }

  const servicesContainer = document.querySelector("#ser-li");
  const serbackground = document.querySelector(".background");

  // Get the position of the profile container relative to the viewport
  const servicesPosition = servicesContainer.getBoundingClientRect().top;

  // Check if the profile container is in the viewport
  if (servicesPosition <= window.innerHeight && servicesPosition >= 0) {
    serbackground.classList.add("service"); // Add the class for the new background
  } else {
    background.classList.remove("service"); // Remove the class if not in view
  }
});
