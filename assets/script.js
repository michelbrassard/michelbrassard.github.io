function handleOpenMobileNavigation() {
  console.log("Navigation opened");
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("overlay").style.opacity = "100%";
}

function handleCloseMobileNavigation() {
  document.getElementById("overlay").style.width = "0%";
  document.getElementById("overlay").style.opacity = "0%";
}