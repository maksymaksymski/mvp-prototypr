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
  sessionStorage.clear();
  window.location.href = 'login.html';
}
