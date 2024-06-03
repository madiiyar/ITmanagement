const swipeButton = document.getElementById("swipeButton");
let startX,
  currentX,
  differenceX,
  isDragging = false;

swipeButton.addEventListener("mousedown", startSwipe);
swipeButton.addEventListener("mousemove", moveSwipe);
swipeButton.addEventListener("mouseup", endSwipe);
swipeButton.addEventListener("mouseleave", endSwipe);

swipeButton.addEventListener("touchstart", startSwipe, { passive: true });
swipeButton.addEventListener("touchmove", moveSwipe, { passive: true });
swipeButton.addEventListener("touchend", endSwipe);

function startSwipe(e) {
  startX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
  isDragging = true;
}

function moveSwipe(e) {
  if (!isDragging) return;
  currentX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
  differenceX = currentX - startX;

  if (
    differenceX > 0 &&
    differenceX <
      swipeButton.parentElement.offsetWidth - swipeButton.offsetWidth
  ) {
    swipeButton.style.transform = `translateX(${differenceX}px)`;
  }
}

function endSwipe() {
  isDragging = false;
  if (
    differenceX >=
    swipeButton.parentElement.offsetWidth - swipeButton.offsetWidth
  ) {
    // Navigate to another page
    window.location.href = "https://www.example.com"; // Replace with your URL
  } else {
    swipeButton.style.transform = "translateX(0)";
  }
  differenceX = 0;
}
