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
      <button type="button" onclick="window.location.href='./projects/projects.html';">MORE</button>
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

function getFinalRect() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw < 768;

  if (isMobile) {
    const width = vw - 32;
    const height = Math.min(vh * 0.7, 600);
    const left = 16;
    const top = (vh - height) / 2;
    return { top, left, width, height };
  }

  const width = Math.min(560, vw * 0.42);
  const height = vh * 0.735;
  const marginRight = Math.max(24, vw * 0.05);
  const left = vw - width - marginRight;
  const top = (vh - height) / 2;

  return { top, left, width, height };
}

function lockScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

function open(section, btn) {
  if (isAnimating || isOpen) return;
  isAnimating = true;
  activeBtn = btn;
  activeSection = section;

  const first = btn.getBoundingClientRect();
  const last = getFinalRect();

  morph.classList.remove("animating", "show-content");
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

function close() {
  if (!isOpen || isAnimating || !activeBtn) return;
  isAnimating = true;

  const first = activeBtn.getBoundingClientRect();

  morph.classList.remove("show-content");
  morph.classList.add("animating");

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

window.addEventListener("resize", () => {
  if (!isOpen || isAnimating || !morph.classList.contains("visible")) return;
  const last = getFinalRect();
  morph.classList.remove("animating");
  morph.style.top = `${last.top}px`;
  morph.style.left = `${last.left}px`;
  morph.style.width = `${last.width}px`;
  morph.style.height = `${last.height}px`;
});

morph.addEventListener("click", (e) => e.stopPropagation());