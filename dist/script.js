const sections = {
  LINKS: `
    <div class="content-section">
      <div class="content-row">
        <span class="content-label">GITHUB</span>
        <span class="content-value"><a href="https://github.com/rakon150" target="_blank" rel="noopener noreferrer">github.com</a></span>
      </div>
      <div class="content-row">
        <span class="content-label">STEAM</span>
        <span class="content-value"><a href="https://steamcommunity.com/id/rakon150/" target="_blank" rel="noopener noreferrer">steam.com</a></span>
      </div>
      <div class="content-row">
        <span class="content-label">ITCH</span>
        <span class="content-value"><a href="https://rakon150.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a></span>
      </div>
      <div class="content-row">
        <span class="content-label">DISCORD</span>
        <span class="content-value"><a href="https://discord.com/users/877426734071423026" target="_blank" rel="noopener noreferrer">discord.gg</a></span>
      </div>
    </div>
  `,
  ABOUT: `
    <div class="content-section">
      <p style="opacity:0.9; line-height:1.6; margin:0;">
        o/<br>I don't know what to put here so just look at the rest of the site :D
      </p>
      <div class="content-row">
        <span class="content-label">LOCATION</span>
        <span class="content-value">Czech Republic</span>
      </div>
      <div class="content-row">
        <span class="content-label">OS</span>
        <span class="content-value">Arch (btw)/Windows/CachyOS</span>
      </div>
      <div class="content-row">
        <span class="content-label">SOFTWARE</span>
        <span class="content-value">
          <a href="https://github.com/chojs23/concord" target="_blank" rel="noopener noreferrer">Concord</a> 
          - <a href="https://code.visualstudio.com" target="_blank" rel ="noopener noreferrer">Code-OSS</a> 
          - <a href="https://brave.com" target="_blank" rel="noopener noreferrer">Brave</a> 
          - <a href="https://opencode.ai" target="_blank" rel="noopener noreferrer">Opencode</a> 
        </span>
      </div>
      <div class="content-row">
        <span class="content-label">HARDWARE</span>
        <span class="content-value">5 3600 - GTX 1650 - 16GB DDR4<br>THINKPAD T480S</span>
      </div>

      <div class="lanyard">
        <a href="https://discord.com/users/877426734071423026"><img
        src="https://lanyard.cnrad.dev/api/877426734071423026?showDisplayName=true&hideStatus=true&idleMessage=If%20I%20ever%20reply%20it%20will%20be%20here"/></a>
      </div>
      </div>
  `,
  PROJECTS: `
    <div class="content-section">
      <div class="content-card">
        <h3><a href="https://github.com/Rakon150/Robodeck2026/" target="_blank" rel="noopener noreferrer">RoboDeck 2026</a> <span style="opacity:.6; font-weight:400; font-size:0.9rem;">July 2026</span></h3>
        <p>DIY games console  "Robodeck"  created at <a href="https://robotickytabor.cz/" target="_blank">Robotický Tábor 2026</a></p>
        <p>TypeScript</p>
      </div>
      <div class="content-card">
        <h3><a href="https://rakon150.itch.io/error-color-detected" target="_blank" rel="noopener noreferrer">ERROR: Color detected</a> <span style="opacity:.6; font-weight:400; font-size:0.9rem;">November 2025</span></h3>
        <p>A short puzzle game made in 7 days for <a href="https://www.streamally.gg/case-studies/streamally-gamejam-2025/" target="_blank">StreamAlly GameJam</a> with a small team of friends</p>
        <p>Gamemaker</p>
    </div>
    <div class="content-card">
        <h3><a href="https://github.com/racek256/Purkynthon/" target="_blank" rel="noopener noreferrer">Purkynthon</a> <span style="opacity:.6; font-weight:400; font-size:0.9rem;">November 2025 – January 2026</span></h3>
        <p>Educational web-based game for 8./9. graders created for <a href="https://purkiada.sspbrno.cz" target="_blank" rel="noopener noreferrer">Purkiáda 2026</a></p>
        <p>React • Tailwind CSS • Python</p>
    </div>

    <div class="continue-projects">
      <button type="button" onclick="window.location.href='/projects/';">MORE</button>
    </div>
    </div>
  `,
  CONTACT: `
    <div class="content-section">
      <div class="content-row">
        <span class="content-label">DISCORD</span>
        <span class="content-value">its.rakon</span>
      </div>
      <div class="content-row">
        <span class="content-label">GITHUB</span>
        <span class="content-value"><a href="https://github.com/rakon150" target="_blank" rel="noopener noreferrer">github.com/rakon150</a></span>
      </div>

      <div class="lanyard">
        <a href="https://discord.com/users/877426734071423026"><img
        src="https://lanyard.cnrad.dev/api/877426734071423026?showDisplayName=true&hideStatus=true&idleMessage=Contact%20me,%20or%20dont%20I%20dont%20really%20care"/></a>
      </div>
    </div>
  `,
};

const overlay = document.getElementById("overlay");
const backdrop = document.getElementById("backdrop");
const morph = document.getElementById("morph");
const morphTitle = document.getElementById("morph-title");
const morphBody = document.getElementById("morph-body");
const closeBtn = document.getElementById("morph-close");

let activeBtn = null;
let activeSection = null;
let isAnimating = false;
let isOpen = false;

const mobileBreakpoint = 768;
const margin = 8;

const clamp = (n, min, max) => Math.min(Math.max(n, min), Math.max(min, max));

function getViewport() {
  const vv = window.visualViewport;
  return vv?.width > 0 && vv?.height > 0
    ? { vw: vv.width, vh: vv.height }
    : { vw: window.innerWidth, vh: window.innerHeight };
}

function getMaxHeight() {
  const { vw, vh } = getViewport();
  const mobile = vw < mobileBreakpoint;
  return Math.min(mobile ? vh * 0.88 : vh * 0.85, vh - margin * 2);
}

function getMinHeight(maxH) {
  const { vw } = getViewport();
  const mobile = vw < mobileBreakpoint;
  return Math.min(mobile ? 120 : 160, maxH);
}

function isMobileView() {
  return getViewport().vw < mobileBreakpoint;
}

function getFinalRect() {
  const { vw, vh } = getViewport();
  if (vw < mobileBreakpoint) {
    const finalWidth = Math.min(vw * 0.88, 360, vw - margin * 2);
    const maxH = getMaxHeight();
    const minH = getMinHeight(maxH);
    const height = clamp(Math.min(vh * 0.6, 520, maxH), minH, maxH);
    const left = (vw - finalWidth) / 2;
    const top = (vh - height) / 2;
    return {
      width: finalWidth,
      height,
      left: clamp(left, margin, Math.max(margin, vw - finalWidth - margin)),
      top: clamp(top, margin, Math.max(margin, vh - height - margin)),
    };
  }
  const width = Math.min(560, vw * 0.42);
  const height = vh * 0.735;
  const marginRight = Math.max(24, vw * 0.05);
  const left = vw - width - marginRight;
  const top = (vh - height) / 2;
  return { top, left, width, height };
}

function fitMorphToContent(animate = false) {
  if (!morph.classList.contains("visible")) return;
  if (!isMobileView()) return;
  const { vw, vh } = getViewport();
  const maxH = getMaxHeight();
  const minH = getMinHeight(maxH);
  const finalWidth = getFinalRect().width;
  const centeredLeft = clamp((vw - finalWidth) / 2, margin, Math.max(margin, vw - finalWidth - margin));

  if (animate) morph.classList.add("animating");

  morph.style.transform = "none";
  morph.style.width = `${finalWidth}px`;
  morph.style.left = `${centeredLeft}px`;
  morph.style.maxHeight = `${maxH}px`;
  morph.style.minHeight = `${minH}px`;
  morph.style.height = "auto";

  const natural = morph.offsetHeight;

  let finalH;
  if (natural >= maxH - 1) {
    finalH = maxH;
    morph.style.height = `${maxH}px`;
  } else {
    finalH = Math.max(natural, minH);
    morph.style.height = "auto";
  }

  const top = clamp((vh - finalH) / 2, margin, Math.max(margin, vh - finalH - margin));
  morph.style.top = `${top}px`;
  morph.style.left = `${centeredLeft}px`;
}

function lockScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

function openDesktop(section, btn) {
  const first = btn.getBoundingClientRect();
  const last = getFinalRect();
  morph.classList.remove("animating", "show-content");
  morph.style.transform = "none";
  morph.style.maxHeight = "";
  morph.style.minHeight = "";
  morph.style.top = `${first.top}px`;
  morph.style.left = `${first.left}px`;
  morph.style.width = `${first.width}px`;
  morph.style.height = `${first.height}px`;
  morph.style.opacity = "1";
  morph.classList.add("visible");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  morphTitle.textContent = section;
  morphBody.innerHTML = sections[section] || "";
  morphBody.scrollTop = 0;
  lockScroll(true);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      morph.classList.add("animating");
      morph.style.top = `${last.top}px`;
      morph.style.left = `${last.left}px`;
      morph.style.width = `${last.width}px`;
      morph.style.height = `${last.height}px`;
      setTimeout(() => morph.classList.add("show-content"), 80);
      setTimeout(() => {
        isAnimating = false;
        isOpen = true;
      }, 400);
    });
  });
}

function openMobile(section, btn) {
  const first = btn.getBoundingClientRect();
  const { vh } = getViewport();
  const maxH = getMaxHeight();
  const minH = getMinHeight(maxH);
  const probe = getFinalRect();

  morph.classList.remove("animating", "show-content");
  morph.style.transform = "none";
  morphTitle.textContent = section;
  morphBody.innerHTML = sections[section] || "";
  morphBody.scrollTop = 0;
  morph.style.maxHeight = `${maxH}px`;
  morph.style.minHeight = `${minH}px`;
  morph.style.width = `${probe.width}px`;
  morph.style.left = `${probe.left}px`;
  morph.style.top = `${clamp((vh - minH) / 2, margin, Math.max(margin, vh - minH - margin))}px`;
  morph.style.height = "auto";
  morph.style.opacity = "0";
  morph.classList.add("visible");

  const natural = morph.offsetHeight;
  const isMaxed = natural >= maxH - 1;
  const finalH = isMaxed ? maxH : Math.max(natural, minH);
  const last = {
    width: probe.width,
    height: finalH,
    left: probe.left,
    top: clamp((vh - finalH) / 2, margin, Math.max(margin, vh - finalH - margin)),
  };

  morph.style.top = `${first.top}px`;
  morph.style.left = `${first.left}px`;
  morph.style.width = `${first.width}px`;
  morph.style.height = `${first.height}px`;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  lockScroll(true);
  void morph.offsetHeight;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      morph.style.opacity = "1";
      morph.classList.add("animating");
      morph.style.top = `${last.top}px`;
      morph.style.left = `${last.left}px`;
      morph.style.width = `${last.width}px`;
      morph.style.height = `${last.height}px`;

      setTimeout(() => morph.classList.add("show-content"), 80);

      setTimeout(() => {
        isAnimating = false;
        isOpen = true;

        morph.classList.remove("animating");
        morph.style.transform = "none";

        morph.style.width = `${last.width}px`;
        morph.style.left = `${last.left}px`;
        morph.style.top = `${last.top}px`;
        if (isMaxed) {
          morph.style.height = `${maxH}px`;
        } else {
          morph.style.height = "auto";
  
          const settled = morph.offsetHeight;
          const settledTop = clamp((getViewport().vh - settled) / 2, margin, Math.max(margin, getViewport().vh - settled - margin));
          morph.style.top = `${settledTop}px`;
        }
      }, 400);
    });
  });
}

function open(section, btn) {
  if (isAnimating || isOpen) return;
  isAnimating = true;
  activeBtn = btn;
  activeSection = section;
  if (isMobileView()) openMobile(section, btn);
  else openDesktop(section, btn);
}

function close() {
  if (!isOpen || isAnimating || !activeBtn) return;
  isAnimating = true;

  const first = activeBtn.getBoundingClientRect();

  morph.classList.remove("show-content");
  morph.classList.add("animating");
  morph.style.maxHeight = "";
  morph.style.minHeight = "";

  requestAnimationFrame(() => {
    morph.style.top = `${first.top}px`;
    morph.style.left = `${first.left}px`;
    morph.style.width = `${first.width}px`;
    morph.style.height = `${first.height}px`;
  });

  setTimeout(() => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    morph.classList.remove("visible", "animating", "show-content");
    morph.style.opacity = "0";
    lockScroll(false);
    isAnimating = false;
    isOpen = false;
    activeBtn = null;
    activeSection = null;
  }, 400);
}

document.querySelectorAll(".buttons [data-section]").forEach((btn) => {
  btn.addEventListener("click", () => open(btn.dataset.section, btn));
});

backdrop.addEventListener("click", close);
closeBtn.addEventListener("click", close);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") close();
});

function syncOpenRect() {
  if (!isOpen || isAnimating || !morph.classList.contains("visible")) return;
  if (!isMobileView()) {
    const last = getFinalRect();
    morph.classList.remove("animating");
    morph.style.transform = "none";
    morph.style.maxHeight = "";
    morph.style.minHeight = "";
    morph.style.top = `${last.top}px`;
    morph.style.left = `${last.left}px`;
    morph.style.width = `${last.width}px`;
    morph.style.height = `${last.height}px`;
    return;
  }
  morph.classList.remove("animating");
  morph.style.transform = "none";
  fitMorphToContent(false);
  morph.classList.remove("animating");
  morph.style.transform = "none";
}

window.addEventListener("resize", syncOpenRect);
window.addEventListener("orientationchange", syncOpenRect);
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", syncOpenRect);
  window.visualViewport.addEventListener("scroll", syncOpenRect);
}

morph.addEventListener("click", (e) => e.stopPropagation());

const API = "https://status.rakon.qzz.io/api/status-page/heartbeat/publicstatus";
const dot = document.getElementById("status-dot");

function setState(state, label) {
  if (!dot) return;
  dot.classList.remove("up", "degraded", "down");
  if (state) dot.classList.add(state);
  dot.title = label;
  dot.setAttribute("aria-label", label);
}

async function status_check() {
  try {
    const res = await fetch(API + "?t=" + Date.now(), { cache: "no-store" });
    if (!res.ok) throw new Error("bad status");
    const data = await res.json();

    const values = Object.values(data.heartbeatList || {})
      .map((list) => list && list[list.length - 1] && list[list.length - 1].status)
      .filter((v) => typeof v === "number");
    if (!values.length) throw new Error("no monitors");

    const down = values.filter((v) => v === 0).length;

    if (down === values.length) setState("down");
    else if (down > 0 || values.some((v) => v === 2 || v === 3)) setState("degraded");
    else setState("up");
  } catch {
    setState("down");
  }
}

status_check();
setInterval(status_check, 60000);
