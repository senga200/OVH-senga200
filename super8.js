//super8

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close-button");
  const videoContainer = document.querySelector(".video-container");

  const videoDivs = document.querySelectorAll(
    ".troisFilles, .laetitiaVirginie, .laetitia, .beaulard"
  );

  videoDivs.forEach((div) => {
    div.addEventListener("click", (event) => {
      const videoSrc = div.querySelector("video").getAttribute("src");
      videoContainer.innerHTML = `<video src="${videoSrc}" controls autoplay></video>`;
      overlay.style.display = "flex";
      modal.style.display = "block";
    });
  });

  closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "none";
    videoContainer.innerHTML = "";
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "none";
    videoContainer.innerHTML = "";
  });
});
