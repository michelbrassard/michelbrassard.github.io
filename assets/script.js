function toggleMobileNavigation() {
  const overlay = document.getElementById("overlay");
  const button = document.getElementById("mobile-navigation-hovering-button");

  const isOpen = overlay.style.width === "100%";

  if (isOpen) {
    overlay.style.width = "0%";
    overlay.style.opacity = "0%";
    button.style.border = "1px solid transparent";
    button.style.boxShadow = "0px 4px 8px 2px rgba(0, 0, 0, 0.2)";
  } else {
    overlay.style.width = "100%";
    overlay.style.opacity = "100%";
    button.style.border = "1px solid var(--primary-color-light)";
    button.style.boxShadow = "none";
  }
}