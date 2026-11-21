// Certification Guide Showcase Application
let state = {
  data: null,
  activeCertId: "aif-c01",
  activeFilter: "all",
  searchQuery: ""
};

document.addEventListener("DOMContentLoaded", async () => {
  await loadCertifications();
  initSearch();
  initFilters();
  initCloneButton();
});

function initCloneButton() {
  const cloneBtn = document.getElementById("btn-copy-clone");
  const cloneText = document.getElementById("clone-btn-text");
  if (!cloneBtn) return;

  cloneBtn.addEventListener("click", () => {
    const cloneCmd = "git clone https://github.com/AishikTokdar/Certification-Guide.git";
    navigator.clipboard.writeText(cloneCmd).then(() => {
      cloneText.textContent = "Copied!";
      setTimeout(() => {
        cloneText.textContent = "git clone";
      }, 2000);
    }).catch(() => {
      prompt("Copy git command:", cloneCmd);
    });
  });
}

async function loadCertifications() {
  try {
    const res = await fetch("data/certifications.json");
    state.data = await res.json();
    renderStats();
    renderCards();
    renderActiveDetail();
  } catch (err) {
    console.error("Failed to load certification data:", err);
  }
}

function renderStats() {
  const certs = state.data.certifications;
  const totalCerts = certs.length;
  const readyCerts = certs.filter(c => c.status === "Ready").length;
  
  let totalPdfs = 0;
  let totalTests = 0;
  certs.forEach(c => {
    totalPdfs += (c.pdfs || []).length;
    totalTests += (c.practiceTests || []).length;
  });

  const statsContainer = document.getElementById("stats-row");
  if (!statsContainer) return;

  statsContainer.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${totalCerts}</div>
      <div class="stat-label">Certification Tracks</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${readyCerts} Active</div>
      <div class="stat-label">Production Guides</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${totalPdfs}</div>
      <div class="stat-label">Curated PDF Documents</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${totalTests}</div>
      <div class="stat-label">Practice Guides & Tests</div>
    </div>
  `;
}

function renderCards() {
  const container = document.getElementById("cert-grid");
  if (!container) return;

  const query = state.searchQuery.toLowerCase().trim();
  const filtered = state.data.certifications.filter(cert => {
    const matchesFilter = state.activeFilter === "all" || cert.provider === state.activeFilter;
    const matchesSearch = !query || 
      cert.code.toLowerCase().includes(query) ||
      cert.title.toLowerCase().includes(query) ||
      cert.description.toLowerCase().includes(query) ||
      (cert.domains || []).some(d => d.name.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 32px; text-align: center; color: var(--text-muted); background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: 8px;">
        No certification tracks found matching your criteria.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(cert => {
    const isActive = cert.id === state.activeCertId;
    const providerBadgeClass = cert.provider === "aws" ? "badge-aws" : "badge-azure";
    const statusBadgeClass = cert.status === "Ready" ? "badge-ready" : (cert.status === "Upcoming" ? "badge-upcoming" : "badge-planned");

    return `
      <div class="cert-card ${isActive ? 'active' : ''}" onclick="selectCertification('${cert.id}')">
        <div>
          <div class="cert-card-header">
            <span class="cert-code">${escapeHtml(cert.code)}</span>
            <div class="cert-badges">
              <span class="badge ${providerBadgeClass}">${cert.provider.toUpperCase()}</span>
              <span class="badge ${statusBadgeClass}">${cert.status}</span>
            </div>
          </div>
          <h3 class="cert-title">${escapeHtml(cert.title)}</h3>
          <p class="cert-desc">${escapeHtml(cert.description)}</p>
        </div>
        <div class="cert-footer">
          <span>Level: ${cert.level}</span>
          <span style="font-family: var(--font-mono); color: var(--text-primary);">
            ${cert.status === "Ready" ? "View Full Guide & PDFs ->" : "Roadmap Blueprint ->"}
          </span>
        </div>
      </div>
    `;
  }).join("");
}

function selectCertification(certId) {
  state.activeCertId = certId;
  renderCards();
  renderActiveDetail();
  
  const detailEl = document.getElementById("detail-view");
  if (detailEl) {
    detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderActiveDetail() {
  const container = document.getElementById("detail-view");
  if (!container) return;

  const cert = state.data.certifications.find(c => c.id === state.activeCertId);
  if (!cert) return;

  const repoUrl = state.data.repo.url;
  const branch = state.data.repo.branch;

  let html = `
    <div class="detail-header">
      <div class="detail-title-group">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span class="brand-badge">${cert.provider.toUpperCase()}</span>
          <span class="brand-badge" style="color: #fbbf24;">${cert.code}</span>
          <span class="badge ${cert.status === 'Ready' ? 'badge-ready' : 'badge-planned'}">${cert.status}</span>
        </div>
        <h2>${escapeHtml(cert.title)}</h2>
        <div class="detail-subtitle">${escapeHtml(cert.description)}</div>
      </div>
      <div>
        <a href="${repoUrl}/tree/${branch}/${cert.path}" target="_blank" rel="noopener noreferrer" class="btn-repo">
          Open Repository Folder
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>

    <!-- Exam Specifications -->
    <div class="specs-grid">
      <div class="spec-box">
        <div class="spec-box-label">Duration</div>
        <div class="spec-box-value">${cert.specs.duration}</div>
      </div>
      <div class="spec-box">
        <div class="spec-box-label">Question Count</div>
        <div class="spec-box-value">${cert.specs.questions}</div>
      </div>
      <div class="spec-box">
        <div class="spec-box-label">Passing Score</div>
        <div class="spec-box-value">${cert.specs.passingScore}</div>
      </div>
      <div class="spec-box">
        <div class="spec-box-label">Question Types</div>
        <div class="spec-box-value">${cert.specs.format}</div>
      </div>
    </div>
  `;

  // PDF Downloads Hub (if active cert has PDFs)
  if (cert.pdfs && cert.pdfs.length > 0) {
    html += `
      <h3 class="section-heading">Curated PDF Document Library</h3>
      <p class="section-caption">Sequenced study documents and question banks. Download locally or view the raw source in GitHub.</p>
      <div class="pdf-list">
        ${cert.pdfs.map(pdf => {
          const downloadUrl = pdf.relPath;
          const githubViewUrl = `${repoUrl}/blob/${branch}/${pdf.relPath}`;
          return `
            <div class="pdf-item">
              <div class="pdf-info">
                <div class="pdf-meta-line">
                  <span class="pdf-tag">${escapeHtml(pdf.role)}</span>
                  <span class="pdf-size">${pdf.pages} Pages</span>
                  <span class="pdf-size">• ${pdf.size}</span>
                </div>
                <div class="pdf-title">${escapeHtml(pdf.filename)}</div>
                <div class="pdf-purpose">${escapeHtml(pdf.purpose)}</div>
              </div>
              <div class="pdf-actions">
                <a href="${downloadUrl}" download="${pdf.filename}" class="btn-download">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download PDF
                </a>
                <a href="${githubViewUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                  View on GitHub
                </a>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // Domain Weights Breakdown
  if (cert.domains && cert.domains.length > 0) {
    html += `
      <h3 class="section-heading">Exam Domain Weight Distribution</h3>
      <p class="section-caption">Official syllabus weightings and task statements for scored exam objectives.</p>
      <div class="domains-list">
        ${cert.domains.map(dom => {
          const fileLink = dom.file ? `${repoUrl}/blob/${branch}/${dom.file}` : "#";
          return `
            <div class="domain-row">
              <div class="domain-header-row">
                ${dom.file ? `<a href="${fileLink}" target="_blank" rel="noopener noreferrer" class="domain-name" style="text-decoration: underline; text-underline-offset: 3px;">${escapeHtml(dom.name)}</a>` : `<span class="domain-name">${escapeHtml(dom.name)}</span>`}
                <span class="domain-weight">${dom.weight}%</span>
              </div>
              <div class="domain-bar-bg">
                <div class="domain-bar-fill" style="width: ${dom.weight}%;"></div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // Deep-Linked Markdown Notes & Practice Tests
  if (cert.studyNotes && cert.studyNotes.length > 0) {
    html += `
      <h3 class="section-heading">Technical Study Notes & Glossaries</h3>
      <p class="section-caption">Deep dives into core services, architecture diagrams, and concepts in the repository.</p>
      <div class="links-grid">
        ${cert.studyNotes.map(n => `
          <a href="${repoUrl}/blob/${branch}/${n.file}" target="_blank" rel="noopener noreferrer" class="link-card">
            <span>${escapeHtml(n.title)}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        `).join("")}
      </div>
    `;
  }

  if (cert.practiceTests && cert.practiceTests.length > 0) {
    html += `
      <h3 class="section-heading">Full Practice Exam Suite</h3>
      <p class="section-caption">Scenario-based multiple choice and multiple response questions with explanations.</p>
      <div class="links-grid">
        ${cert.practiceTests.map(t => `
          <a href="${repoUrl}/blob/${branch}/${t.file}" target="_blank" rel="noopener noreferrer" class="link-card">
            <span>${escapeHtml(t.name)}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        `).join("")}
      </div>
    `;
  }

  // Primary Sources & Credits
  if (cert.sources && cert.sources.length > 0) {
    html += `
      <h3 class="section-heading">Primary Documentation & Attributions</h3>
      <p class="section-caption">Direct references to authoritative curriculum and open-source materials.</p>
      <div class="source-box">
        ${cert.sources.map(src => `
          <div class="source-item">
            <div>
              <div class="source-title">${escapeHtml(src.title)}</div>
              <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="source-url">${escapeHtml(src.url)}</a>
            </div>
            <span class="source-type">${escapeHtml(src.type)}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  container.innerHTML = html;
}

function initSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderCards();
  });

  // Keyboard shortcut '/' to focus, 'Escape' to clear and blur
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      state.searchQuery = "";
      renderCards();
      searchInput.blur();
    }
  });
}

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeFilter = btn.dataset.filter;
      renderCards();
    });
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
