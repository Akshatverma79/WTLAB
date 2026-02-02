document.addEventListener('DOMContentLoaded', () => {
    const feeForm = document.getElementById('feeForm');
    const requiredTextInputs = feeForm.querySelectorAll('input[type="text"][required]');
    const feeItems = feeForm.querySelectorAll('.fee-item');
    const amountPaidInput = document.getElementById('amountPaid');
    const totalFeeDisplay = document.getElementById('totalFee');
    const dueAmountDisplay = document.getElementById('dueAmount');

    const modal = document.getElementById('validationModal');
    const modalCheckbox = document.getElementById('exceedCheckbox');
    const modalOkBtn = document.getElementById('modalOkBtn');
    let currentOverLimitInput = null;

    // --- Totals calculation ---
    function calculateTotals() {
        let total = 0;
        feeItems.forEach(item => {
            const v = parseFloat(item.value);
            if (!isFinite(v) || v < 0) {
                // prevent negative or NaN
                item.value = Math.max(0, Number(item.value) || 0);
            }
            total += parseFloat(item.value) || 0;
        });
        totalFeeDisplay.value = total.toFixed(2);
        const paid = parseFloat(amountPaidInput.value) || 0;
        dueAmountDisplay.value = (total - paid).toFixed(2);
    }

    // Attach listeners for fee calculations
    feeItems.forEach(input => input.addEventListener('input', () => {
        // sanitize negative
        if (input.value !== '' && parseFloat(input.value) < 0) input.value = Math.abs(parseFloat(input.value));
        calculateTotals();
    }));
    amountPaidInput.addEventListener('input', () => {
        if (amountPaidInput.value !== '' && parseFloat(amountPaidInput.value) < 0) amountPaidInput.value = Math.abs(parseFloat(amountPaidInput.value));
        calculateTotals();
    });

    // --- Required text inputs validation ---
    requiredTextInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const v = e.target.value;
            // enforce maxlength on client-side
            if (v.length > 20) {
                // show modal to inform user; hold reference to current input
                currentOverLimitInput = e.target;
                openModal();
            } else {
                clearFieldError(e.target);
            }
        });

        input.addEventListener('blur', (e) => {
            const v = e.target.value.trim();
            if (!v) setFieldError(e.target, 'This field is mandatory');
            else if (v.length > 20) setFieldError(e.target, 'Exceeds 20 characters');
            else clearFieldError(e.target);
        });
    });

    function setFieldError(input, message) {
        input.style.border = '2px solid #b22222';
        input.title = message;
    }

    function clearFieldError(input) {
        input.style.border = '';
        input.title = '';
    }

    // --- Modal handling when user exceeds maxlength ---
    function openModal() {
        if (!modal) return;
        modal.style.display = 'block';
        modalCheckbox.checked = false;
        modalOkBtn.disabled = true;
    }

    function closeModal() {
        if (!modal) return;
        modal.style.display = 'none';
    }

    if (modalCheckbox) {
        modalCheckbox.addEventListener('change', () => {
            modalOkBtn.disabled = !modalCheckbox.checked;
        });
    }

    if (modalOkBtn) {
        modalOkBtn.addEventListener('click', () => {
            if (currentOverLimitInput) {
                // trim to 20 chars
                currentOverLimitInput.value = currentOverLimitInput.value.slice(0, 20);
                clearFieldError(currentOverLimitInput);
                currentOverLimitInput = null;
            }
            closeModal();
            calculateTotals();
        });
    }

    // close the modal when clicking outside content
    window.addEventListener('click', (ev) => {
        if (ev.target === modal) closeModal();
    });

    // --- Final form validation on submit ---
    feeForm.addEventListener('submit', (e) => {
        let valid = true;

        // check required text inputs
        requiredTextInputs.forEach(input => {
            const v = input.value.trim();
            if (!v) { setFieldError(input, 'This field is mandatory'); valid = false; }
            else if (v.length > 20) { setFieldError(input, 'Exceeds 20 characters'); valid = false; }
            else clearFieldError(input);
        });

        // totals sanity checks
        const total = parseFloat(totalFeeDisplay.value) || 0;
        const paid = parseFloat(amountPaidInput.value) || 0;
        if (total <= 0) { alert('Total fee must be greater than 0.'); valid = false; }
        if (paid < 0) { alert('Amount paid cannot be negative.'); valid = false; }
        if (paid > total) { alert('Amount paid cannot exceed total fee.'); valid = false; }

        if (!valid) {
            e.preventDefault();
            // focus first invalid
            const firstInvalid = feeForm.querySelector('input[style*="b22222"]');
            if (firstInvalid) firstInvalid.focus();
        } else {
            // allow submission (or handle via AJAX)
        }
    });

    // initial calculation
    calculateTotals();
});