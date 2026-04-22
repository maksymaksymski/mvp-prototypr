// ── Auth guard & nav rendering ─────────────────────────────────────────────
// Call initPage({ requireAdmin: false }) at the top of each protected page.
// Call initPage({ requireAdmin: true }) on admin-only pages.

function initPage({ requireAdmin = false } = {}) {
  const role     = sessionStorage.getItem('role');
  const name     = sessionStorage.getItem('userName')     || 'User';
  const initials = sessionStorage.getItem('userInitials') || '?';

  // Not logged in → back to login
  if (!role) {
    window.location.href = 'login.html';
    return;
  }

  // Admin-only page accessed by regular user → back to orders
  if (requireAdmin && role !== 'admin') {
    window.location.href = 'orders.html';
    return;
  }

  // Inject user name + initials into nav
  document.querySelectorAll('.top-nav__user-name').forEach(el => el.textContent = name);
  document.querySelectorAll('.top-nav__avatar').forEach(el => {
    el.textContent = initials;
    el.title = name;
  });

  // Hide entire nav links for regular users — they have nowhere to navigate
  if (role !== 'admin') {
    document.querySelectorAll('.top-nav__links').forEach(el => el.style.display = 'none');
  }
}

function logout() {
  // Inject modal if not already present
  if (!document.getElementById('logoutModal')) {
    const el = document.createElement('div');
    el.id = 'logoutModal';
    el.className = 'modal-backdrop';
    el.innerHTML = `
      <div class="modal modal--sm">
        <div class="modal__header">
          <div>
            <h3 class="modal__title">Sign out?</h3>
            <p class="modal__subtitle">You'll need to sign in again to access your lists.</p>
          </div>
          <button class="modal__close" onclick="document.getElementById('logoutModal').classList.remove('modal-backdrop--open')">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div class="modal__footer">
          <button class="btn btn-outline btn-md" onclick="document.getElementById('logoutModal').classList.remove('modal-backdrop--open')">Cancel</button>
          <button class="btn btn-danger btn-md" onclick="sessionStorage.clear(); window.location.href='login.html'">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M6 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3M11 11l3-3-3-3M14 8H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Sign out
          </button>
        </div>
      </div>`;
    document.body.appendChild(el);
  }
  document.getElementById('logoutModal').classList.add('modal-backdrop--open');
}
