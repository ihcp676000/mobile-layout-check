document.addEventListener("DOMContentLoaded", function() {
  // Create the white strip cover element
  let headerCover = document.createElement("div");
  headerCover.id = "header-cover";
  document.body.appendChild(headerCover);

  // Ensure the Wix content fills the screen on load and on resize
  let wixEmbed = document.getElementById("wix-embed");
  if (wixEmbed) {
    function resizeWixEmbed() {
      wixEmbed.style.width = window.innerWidth + "px";
      wixEmbed.style.height = window.innerHeight + "px";
      
      // Apply zoom and ensure centering on mobile
      if (window.innerWidth <= 767) {
        wixEmbed.style.transform = "translateX(-50%) scale(1.03)"; // 3% zoom and center
        wixEmbed.style.transformOrigin = "top center"; // Centered scaling
      } else {
        wixEmbed.style.transform = "translateX(-50%) scale(1)"; // Reset zoom on desktop
      }
    }
    resizeWixEmbed();
    window.addEventListener("resize", resizeWixEmbed);
  }
});
