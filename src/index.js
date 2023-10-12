import loadPage from "./loadPage.js";
import { createMenuTab } from "./menuTab.js";
import { createContactTab } from "./contactTab.js";
import { createHomeTab } from "./homeTab.js";

const container = document.getElementById("content");
const homeTab = document.getElementById("home-button");
const menuTab = document.getElementById("menu-button");
const contactTab = document.getElementById("contact-button");

function loadTabContent(createTabFunction) {
  container.innerHTML = "";
  const tabContent = createTabFunction();
  container.appendChild(tabContent);
}

homeTab.addEventListener("click", () => loadTabContent(createHomeTab));
menuTab.addEventListener("click", () => loadTabContent(createMenuTab));
contactTab.addEventListener("click", () => loadTabContent(createContactTab));

//Load the home tab by default on page load
window.addEventListener("DOMContentLoaded", () =>
  loadTabContent(createHomeTab)
);
