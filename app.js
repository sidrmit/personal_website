(() => {
  const content = window.SITE_CONTENT;
  if (!content) return;

  document.querySelectorAll('[data-copy="intro"]').forEach((el) => { el.textContent = content.intro; });
  document.querySelectorAll('[data-copy="about"]').forEach((el) => { el.textContent = content.about; });
  document.querySelectorAll("[data-link]").forEach((el) => {
    const profile = content.profiles[el.dataset.link];
    if (profile) el.href = profile;
  });
  document.title = `${content.name} — Research, photographs, writing, and travel diaries`;

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
    const gallerySection = document.querySelector("[data-side-gallery]");
    if (gallerySection && side.gallery?.length) {
      const photoGrid = gallerySection.querySelector("[data-photo-grid]");
      const galleryHeading = gallerySection.querySelector("[data-gallery-heading]");
      const galleryIntro = gallerySection.querySelector("[data-gallery-intro]");
      const galleryEyebrow = gallerySection.querySelector("[data-gallery-eyebrow]");
      if (galleryHeading && side.galleryHeading) galleryHeading.textContent = side.galleryHeading;
      if (galleryIntro && side.galleryIntro) galleryIntro.textContent = side.galleryIntro;
      if (galleryEyebrow && side.slug === "travel") galleryEyebrow.textContent = "TRAVEL DIARY · OCT—NOV 2018";
      photoGrid.innerHTML = side.gallery.map((photo) => `
        <figure class="photo-card">
          <img src="${escapeHTML(photo.src)}" alt="${escapeHTML(photo.alt)}" loading="lazy" decoding="async">
          <figcaption>${escapeHTML(photo.caption)}</figcaption>
        </figure>`).join("");
      gallerySection.hidden = false;
    }
    const writingSection = sideRoot.querySelector("[data-side-writing]");
    if (writingSection && side.writings?.length) {
      const writingList = writingSection.querySelector("[data-writing-list]");
      writingList.innerHTML = side.writings.map((piece) => `
        <article class="writing-card">
          <div class="writing-meta"><h3>${escapeHTML(piece.title)}</h3><time datetime="${escapeHTML(piece.date)}">${escapeHTML(piece.dateLabel)}</time></div>
          ${piece.place ? `<p class="writing-place">${escapeHTML(piece.place)}</p>` : ""}
          <p class="writing-text">${escapeHTML(piece.text).replace(/\n/g, "<br>")}</p>
        </article>`).join("");
      writingSection.hidden = false;
    }
    const visitSection = document.querySelector("[data-visit-map]");
    const validPlaces = (side.visitedPlaces || []).filter((place) =>
        Number.isFinite(Number(place.lat)) && Number.isFinite(Number(place.lon))
      );
    if (visitSection && (side.showVisitMap || validPlaces.length)) {
      const mapPins = visitSection.querySelector("[data-map-pins]");
      const placeList = visitSection.querySelector("[data-place-list]");
      const emptyNote = visitSection.querySelector("[data-map-empty]");
      const markerHTML = validPlaces.map((place) => {
        const x = Math.max(0, Math.min(100, ((Number(place.lon) + 180) / 360) * 100));
        const y = Math.max(0, Math.min(100, ((90 - Number(place.lat)) / 150) * 100));
        return `<span class="map-pin" style="left:${x.toFixed(3)}%;top:${y.toFixed(3)}%"></span>`;
      }).join("");
      mapPins.innerHTML = markerHTML;
      placeList.innerHTML = validPlaces.map((place) => `
        <li><span class="place-pin" aria-hidden="true"></span><span><b>${escapeHTML(place.city)}</b><small>${escapeHTML(place.country)}</small></span></li>`).join("");
      placeList.hidden = !validPlaces.length;
      if (emptyNote) emptyNote.hidden = Boolean(validPlaces.length);
      visitSection.hidden = false;
    }
    const nextIndex = (content.sides.findIndex((entry) => entry.slug === side.slug) + 1) % content.sides.length;
    const next = content.sides[nextIndex];
    const nextLink = document.querySelector("[data-next-side]");
    if (nextLink) {
      nextLink.href = `side.html?side=${escapeHTML(encodeURIComponent(next.slug))}`;
      nextLink.querySelector("[data-next-name]").textContent = next.name;
    }
    sideRoot.classList.add(`detail-${side.color}`, `side-${side.slug}`);
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
  }
})();

