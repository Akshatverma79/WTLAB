document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('studentForm');
  const fields = ['name', 'father', 'roll', 'course', 'branch', 'batch'];

  function setValid(id, ok) {
    const chk = document.querySelector('.check[data-for="' + id + '"]');
    if (!chk) return;
    if (ok) chk.classList.add('valid'); else chk.classList.remove('valid');
  }

  function showError(id, show) {
    const err = document.getElementById('err-' + id);
    if (!err) return;
    err.style.display = show ? 'block' : 'none';
  }

  fields.forEach(function (id) {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('input', function () {
      if (input.value.length > 20) input.value = input.value.slice(0, 20);
      const ok = input.value.trim().length > 0 && input.value.trim().length <= 20;
      setValid(id, ok);
      showError(id, !ok);
    });
    input.addEventListener('blur', function () {
      const ok = input.value.trim().length > 0 && input.value.trim().length <= 20;
      setValid(id, ok);
      showError(id, !ok);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let all = true;
    fields.forEach(function (id) {
      const input = document.getElementById(id);
      const ok = input && input.value.trim().length > 0 && input.value.trim().length <= 20;
      setValid(id, ok);
      showError(id, !ok);
      if (!ok) all = false;
    });
    const success = document.getElementById('success');
    if (all) {
      success.style.display = 'block';
      // keep the success message visible
    } else {
      success.style.display = 'none';
    }
  });

  form.addEventListener('reset', function () {
    fields.forEach(function (id) { setValid(id, false); showError(id, false); });
    const success = document.getElementById('success');
    success.style.display = 'none';
  });
});