(() => {
  const content = window.SITE_CONTENT;
  if (!content) return;

  document.querySelectorAll('[data-copy="intro"]').forEach((el) => { el.textContent = content.intro; });
  document.querySelectorAll('[data-copy="about"]').forEach((el) => { el.textContent = content.about; });
  document.querySelectorAll("[data-link]").forEach((el) => {
    const profile = content.profiles[el.dataset.link];
    if (profile) el.href = profile;
  });
  document.title = `All of ${content.name} — a personal site`;

  const grid = document.querySelector("#side-grid");
  if (grid) {
    grid.innerHTML = content.sides.map((side) => `
      <a class="side-card card-${side.color}" href="side.html?side=${escapeHTML(encodeURIComponent(side.slug))}" aria-label="Explore ${escapeHTML(side.name)}">
        <span class="card-top"><span>${escapeHTML(side.number)} / ${String(content.sides.length).padStart(2, "0")}</span><span class="card-symbol" aria-hidden="true">${escapeHTML(side.symbol)}</span></span>
        <span class="card-main"><span class="card-name">${escapeHTML(side.name)}</span><span class="card-subtitle">${escapeHTML(side.subtitle)}</span></span>
        <span class="card-bottom"><span>${escapeHTML(side.note)}</span><span class="card-arrow" aria-hidden="true">↗</span></span>
      </a>`).join("");
  }

  const menuButton = document.querySelector(".menu-button");
  const mobileNav = document.querySelector(".mobile-nav");
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
    });
    mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    }));
  }

  const sideRoot = document.querySelector("#side-page");
  if (sideRoot) {
    const slug = new URLSearchParams(location.search).get("side");
    const side = content.sides.find((entry) => entry.slug === slug) || content.sides[0];
    document.title = `${side.name} — All of ${content.name}`;
    document.querySelectorAll("[data-side-name]").forEach((el) => { el.textContent = side.name; });
    document.querySelectorAll("[data-side-number]").forEach((el) => { el.textContent = side.number; });
    document.querySelectorAll("[data-side-total]").forEach((el) => { el.textContent = String(content.sides.length).padStart(2, "0"); });
    document.querySelectorAll("[data-side-subtitle]").forEach((el) => { el.textContent = side.subtitle; });
    document.querySelectorAll("[data-side-detail]").forEach((el) => { el.textContent = side.detail; });
    const profileLink = document.querySelector("[data-side-profile]");
    if (profileLink && side.profileUrl && content.profiles[side.profileUrl]) {
      profileLink.href = content.profiles[side.profileUrl];
      profileLink.innerHTML = `${escapeHTML(side.profileLabel)} <span aria-hidden="true">↗</span>`;
      profileLink.hidden = false;
    }
    const publicationList = document.querySelector("[data-side-publications]");
    if (publicationList && side.publications?.length) {
      publicationList.innerHTML = side.publications.map((paper) => `
        <li><a href="${escapeHTML(paper.url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(paper.title)}</span><small>${escapeHTML(paper.venue)}</small><b aria-hidden="true">↗</b></a></li>`).join("");
      publicationList.hidden = false;
    }
    const nextIndex = (content.sides.findIndex((entry) => entry.slug === side.slug) + 1) % content.sides.length;
    const next = content.sides[nextIndex];
    const nextLink = document.querySelector("[data-next-side]");
    if (nextLink) {
      nextLink.href = `side.html?side=${escapeHTML(encodeURIComponent(next.slug))}`;
      nextLink.querySelector("[data-next-name]").textContent = next.name;
    }
    sideRoot.classList.add(`detail-${side.color}`);
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
  }
})();

