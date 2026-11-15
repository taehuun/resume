(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const projects = window.PROJECTS || [];

  /* ---------- 재직 기간 자동 계산 ---------- */
  $$("[data-tenure]").forEach((el) => {
    const [y, m] = el.dataset.tenure.split("-").map(Number);
    const now = new Date();
    const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
    if (months <= 0) return;
    const yy = Math.floor(months / 12), mm = months % 12;
    el.textContent = `재직 ${yy ? yy + "년 " : ""}${mm ? mm + "개월" : ""}`.trim();
  });

  /* ---------- 프로젝트 카드 렌더 ---------- */
  const rail = $("#projectRail");
  rail.innerHTML = projects.map((p, i) => `
    <button class="pcard" type="button" data-idx="${i}" aria-label="${p.title} 상세 보기">
      <div class="pcard__thumb${p.fit === "contain" ? " pcard__thumb--logo" : ""}">
        <img src="${p.thumb}" alt="" loading="lazy" draggable="false" />
        <span class="pcard__badge">${p.badge}</span>
      </div>
      <div class="pcard__body">
        <p class="pcard__meta">${p.period} · ${p.team} · ${p.platform}</p>
        <h3 class="pcard__title">${p.title}</h3>
        <p class="pcard__sub">${p.subtitle}</p>
        <ul class="tags">${p.stack.slice(0, 5).map((s) => `<li>${s}</li>`).join("")}</ul>
        <div class="pcard__foot"><span>${p.role[0]}</span><span>자세히 보기 ↗</span></div>
      </div>
    </button>`).join("");

  /* 캐러셀: 버튼 + 마우스 드래그 */
  $$(".carousel__ctrl .icon-btn").forEach((b) =>
    b.addEventListener("click", () => {
      const card = $(".pcard", rail);
      rail.scrollBy({ left: (card.offsetWidth + 20) * Number(b.dataset.dir), behavior: "smooth" });
    })
  );
  let drag = null;
  rail.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    drag = { x: e.clientX, left: rail.scrollLeft, moved: false };
  });
  window.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 5) { drag.moved = true; rail.classList.add("is-drag"); }
    rail.scrollLeft = drag.left - dx;
  });
  window.addEventListener("pointerup", () => {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    rail.classList.remove("is-drag");
    if (moved) rail.addEventListener("click", (ev) => ev.stopPropagation(), { capture: true, once: true });
  });

  /* ---------- 모달 ---------- */
  const modal = $("#modal"), body = $("#modalBody");
  let lastFocus = null;
  const openModal = (p) => {
    body.innerHTML = `
      <span class="m-badge">${p.badge}</span>
      <h2 class="m-title" id="modalTitle">${p.title}</h2>
      <p class="m-sub">${p.subtitle}</p>
      <div class="m-facts">
        <div><small>기간</small><b>${p.period}</b></div>
        <div><small>인원</small><b>${p.team}</b></div>
        <div><small>플랫폼</small><b>${p.platform}</b></div>
      </div>
      <h3 class="m-h">담당 역할</h3>
      <ul class="m-role">${p.role.map((r) => `<li>${r}</li>`).join("")}</ul>
      <h3 class="m-h">핵심 성과</h3>
      <ul class="m-list">${p.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      <h3 class="m-h">기술 스택</h3>
      <ul class="tags">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
      <h3 class="m-h">화면 · 설계</h3>
      <div class="m-gallery">${p.gallery.map((g) => `
        <figure><img src="${g.src}" alt="${g.cap}" loading="lazy" /><figcaption>${g.cap}</figcaption></figure>`).join("")}
      </div>
      <div class="m-actions"><a class="btn btn--primary" href="${p.repo}" target="_blank" rel="noopener">GitHub 저장소 보기 ↗</a></div>`;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal__panel", modal).scrollTop = 0;
    $(".modal__close", modal).focus();
  };
  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    lastFocus && lastFocus.focus();
  };
  rail.addEventListener("click", (e) => {
    const card = e.target.closest(".pcard");
    if (card) openModal(projects[Number(card.dataset.idx)]);
  });
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- 실제 화면 마퀴 ---------- */
  const shots = projects.flatMap((p) =>
    p.gallery.filter((g) => !/ERD|아키텍처/.test(g.cap)).map((g) => ({ ...g, title: p.title }))
  );
  const shotHTML = shots.map((s) => `
    <figure class="shot"><img src="${s.src}" alt="${s.title} — ${s.cap}" loading="lazy" /><figcaption>${s.title} · ${s.cap}</figcaption></figure>`).join("");
  $("#showcaseTrack").innerHTML = shotHTML + shotHTML.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"');

  /* ---------- 숫자 카운트업 ---------- */
  const countUp = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = Number(el.dataset.decimals || 0);
    const sep = el.dataset.sep === "true";
    const dur = 1400, t0 = performance.now();
    const fmt = (v) => {
      const s = v.toFixed(dec);
      return sep ? Number(s).toLocaleString("ko-KR") : s;
    };
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(target * eased);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    /* 탭이 백그라운드라 rAF가 멈춰도 최종 값은 반드시 표시 */
    setTimeout(() => { el.textContent = fmt(target); }, dur + 150);
  };

  /* ---------- 스크롤 등장 + 카운트 트리거 ---------- */
  /* IntersectionObserver 대신 스크롤 위치를 직접 확인 — 임베드 뷰·구형 브라우저에서도 확실히 동작 */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const showFinal = (el) => {
    const v = parseFloat(el.dataset.count);
    el.textContent = el.dataset.sep === "true" ? v.toLocaleString("ko-KR") : v.toFixed(Number(el.dataset.decimals || 0));
  };
  let pending = $$(".reveal");
  pending.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 60}ms`; });
  const reveal = (el, animate) => {
    el.classList.add("is-in");
    $$("[data-count]", el).forEach(animate ? countUp : showFinal);
  };
  const check = () => {
    const limit = innerHeight * 0.92;
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top < limit) { reveal(el, !reduce); return false; }
      return true;
    });
    if (!pending.length) removeEventListener("scroll", onRevealScroll);
  };
  let ticking = false;
  const onRevealScroll = () => {
    if (ticking) return;
    ticking = true;
    setTimeout(() => { ticking = false; check(); }, 60);
  };
  if (reduce) { pending.forEach((el) => reveal(el, false)); pending = []; }
  else {
    addEventListener("scroll", onRevealScroll, { passive: true });
    addEventListener("resize", onRevealScroll);
    check();
    /* 안전장치: 앵커 점프·인쇄 등으로 놓친 요소가 있어도 결국 모두 보이게 */
    addEventListener("beforeprint", () => { pending.forEach((el) => reveal(el, false)); pending = []; });
  }

  /* ---------- 내비게이션: 스크롤 상태 + 현재 섹션 표시 ---------- */
  const nav = $(".nav");
  const links = $$(".nav__links a");
  const sections = links.map((a) => $(a.getAttribute("href")));
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", scrollY > 8);
    const y = scrollY + innerHeight * 0.35;
    let cur = -1;
    sections.forEach((s, i) => { if (s && s.offsetTop <= y) cur = i; });
    links.forEach((a, i) => a.classList.toggle("is-active", i === cur));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
