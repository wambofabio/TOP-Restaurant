export function createHomeTab() {
  const div = document.createElement("div");
  div.id = "home-tab";

  const image = document.createElement("img");
  image.src = "/dist/download (2).jpeg";
  image.alt = "Restaurant image";
  div.appendChild(image);

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Experience the heavenly taste of gourmet cuisine at Delicious Dine. Our chef’s extraordinary skills and the freshest ingredients make every dish a culinary masterpiece. Come and enjoy an unforgettable dining experience.";
  div.appendChild(paragraph);

  return div;
}
