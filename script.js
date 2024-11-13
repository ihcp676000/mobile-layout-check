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
    }
    resizeWixEmbed();
    window.addEventListener("resize", resizeWixEmbed);
  }
});
