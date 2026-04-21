// =============================================
//  TEMPLATE CARD SELECTION
// =============================================
const templateCards = document.querySelectorAll('.template-card');
const estimateBtn   = document.getElementById('estimateBtn');
const bottomHint    = document.getElementById('bottomHint');

let selectedTemplate = null;

templateCards.forEach(card => {
  card.addEventListener('click', () => {
    if (selectedTemplate === card) {
      card.classList.remove('template-card--selected');
      selectedTemplate = null;
    } else {
      templateCards.forEach(c => c.classList.remove('template-card--selected'));
      card.classList.add('template-card--selected');
      selectedTemplate = card;
    }
    syncBottomBar();
  });
});

// =============================================
//  FILTER CHANGE LISTENERS
// =============================================
const locationInput = document.querySelector('.input-with-icon-left');
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const allSelects    = document.querySelectorAll('.select');

if (locationInput) {
  locationInput.addEventListener('input', syncBottomBar);
}

allCheckboxes.forEach(cb => cb.addEventListener('change', syncBottomBar));
allSelects.forEach(sel => sel.addEventListener('change', syncBottomBar));

function hasActiveFilters() {
  if (locationInput && locationInput.value.trim()) return true;
  for (const cb of allCheckboxes) { if (cb.checked) return true; }
  for (const sel of allSelects) {
    if (sel.value && sel.value !== 'any' && sel.value !== '') return true;
  }
  return false;
}

function syncBottomBar() {
  if (!estimateBtn || !bottomHint) return;
  const active = selectedTemplate !== null || hasActiveFilters();
  estimateBtn.disabled = !active;
  if (active) {
    bottomHint.textContent = 'Ready to estimate. Click the button to see record count and pricing.';
    bottomHint.classList.add('action-bar__hint--ready');
  } else {
    bottomHint.textContent = 'Select location, template, or filters to get started';
    bottomHint.classList.remove('action-bar__hint--ready');
  }
}

// =============================================
//  DUAL RANGE SLIDER
// =============================================
const rangeMin  = document.getElementById('rangeMin');
const rangeMax  = document.getElementById('rangeMax');
const rangeFill = document.getElementById('rangeFill');
const rangeLabel = document.getElementById('rangeLabel');

function formatMoney(v) {
  return '$' + Number(v).toLocaleString('en-US');
}

function updateSlider() {
  if (!rangeMin || !rangeMax || !rangeFill) return;

  let minVal = parseInt(rangeMin.value);
  let maxVal = parseInt(rangeMax.value);
  const min  = parseInt(rangeMin.min);
  const max  = parseInt(rangeMin.max);
  const gap  = 10000;

  if (minVal > maxVal - gap) { minVal = maxVal - gap; rangeMin.value = minVal; }
  if (maxVal < minVal + gap) { maxVal = minVal + gap; rangeMax.value = maxVal; }

  const range      = max - min;
  const leftPct    = ((minVal - min) / range) * 100;
  const rightPct   = ((maxVal - min) / range) * 100;

  rangeFill.style.left  = leftPct + '%';
  rangeFill.style.width = (rightPct - leftPct) + '%';

  if (rangeLabel) {
    rangeLabel.textContent = 'Price Range: ' + formatMoney(minVal) + ' - ' + formatMoney(maxVal);
  }

  syncBottomBar();
}

if (rangeMin && rangeMax) {
  rangeMin.addEventListener('input', updateSlider);
  rangeMax.addEventListener('input', updateSlider);
  updateSlider();
}

// =============================================
//  SELECT PLACEHOLDER STYLING
// =============================================
allSelects.forEach(sel => {
  function checkPlaceholder() {
    if (!sel.value || sel.value === '') {
      sel.classList.add('placeholder');
    } else {
      sel.classList.remove('placeholder');
    }
  }
  sel.addEventListener('change', checkPlaceholder);
  checkPlaceholder();
});
