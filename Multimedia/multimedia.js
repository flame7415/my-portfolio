const expandableItems = document.querySelectorAll(".expandable");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeBtn = document.getElementById("close");

expandableItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxContent.innerHTML = "";

    if (item.tagName.toLowerCase() === "img") {
      const img = document.createElement("img");
      img.src = item.src;
      lightboxContent.appendChild(img);
    } else if (item.tagName.toLowerCase() === "video") {
      const video = document.createElement("video");
      video.src = item.querySelector("source").src;
      video.controls = true;
      video.autoplay = true;
      lightboxContent.appendChild(video);
    }
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxContent.innerHTML = "";
});