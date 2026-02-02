document.addEventListener('DOMContentLoaded', () => {
    const feeForm = document.getElementById('feeForm');
    const allInputs = feeForm.querySelectorAll('input:not([type="hidden"])');
    const feeItems = feeForm.querySelectorAll('.fee-item');
    const amountPaidInput = document.getElementById('amountPaid');
    const totalFeeDisplay = document.getElementById('totalFee');
    const dueAmountDisplay = document.getElementById('dueAmount');

    // helper: create inline error span after input
    function ensureErrorSpan(input) {
        const next = input.nextElementSibling;
        if (next && next.classList && next.classList.contains('field-error')) return next;
        const span = document.createElement('span');
        span.className = 'field-error';
        span.style.color = '#b22222';
        span.style.fontSize = '12px';
        span.style.display = 'none';
        span.style.marginLeft = '8px';
        input.parentNode.appendChild(span);
        return span;
    }

    function showFieldError(input, message) {
        const span = ensureErrorSpan(input);
        span.textContent = message;
        span.style.display = 'inline-block';
        input.classList.add('invalid');
        input.style.border = '2px solid #b22222';
    }

    function clearFieldError(input) {
        const next = input.nextElementSibling;
        if (next && next.classList && next.classList.contains('field-error')) {
            next.style.display = 'none';
            next.textContent = '';
        }
        input.classList.remove('invalid');
        input.style.border = '';
    }

    // enforce required for all fields and maxlength for text
    allInputs.forEach(input => {
        // mark required
        input.required = true;

        if (input.type === 'text') {
            input.maxLength = 20;
        }

        // ensure error element exists
        ensureErrorSpan(input);

        // input listener
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            if (e.target.type === 'text' && val.length > 20) {
                e.target.value = val.slice(0, 20);
                showFieldError(e.target, 'Max 20 characters — trimmed');
                setTimeout(() => clearFieldError(e.target), 1500);
            } else if (e.target.type === 'number') {
                if (e.target.value !== '' && parseFloat(e.target.value) < 0) {
                    e.target.value = Math.abs(parseFloat(e.target.value));
                }
                // clear error while typing
                if (e.target.value !== '') clearFieldError(e.target);
            } else {
                if (e.target.value.trim() !== '') clearFieldError(e.target);
            }
            // recalc totals on any change
            calculateTotals();
        });

        // blur listener shows mandatory if left empty
        input.addEventListener('blur', (e) => {
            const t = e.target;
            if (t.type === 'number') {
                if (t.value === '') showFieldError(t, 'This field is mandatory');
                else clearFieldError(t);
            } else {
                if (t.value.trim() === '') showFieldError(t, 'This field is mandatory');
                else clearFieldError(t);
            }
        });
    });

    // totals calculation
    function calculateTotals() {
        let total = 0;
        feeItems.forEach(item => {
            const v = parseFloat(item.value);
            if (!isFinite(v) || v < 0) {
                item.value = Math.max(0, Number(item.value) || 0);
            }
            total += parseFloat(item.value) || 0;
        });
        totalFeeDisplay.value = total.toFixed(2);
        const paid = parseFloat(amountPaidInput.value) || 0;
        dueAmountDisplay.value = (total - paid).toFixed(2);
    }

    feeItems.forEach(input => input.addEventListener('input', calculateTotals));
    amountPaidInput.addEventListener('input', calculateTotals);

    // final submit validation
    feeForm.addEventListener('submit', (e) => {
        let valid = true;
        // check all inputs
        allInputs.forEach(input => {
            if (input.type === 'number') {
                if (input.value === '') { showFieldError(input, 'This field is mandatory'); valid = false; }
            } else {
                if (input.value.trim() === '') { showFieldError(input, 'This field is mandatory'); valid = false; }
                else if (input.type === 'text' && input.value.length > 20) { showFieldError(input, 'Exceeds 20 characters'); valid = false; }
            }
        });

        const total = parseFloat(totalFeeDisplay.value) || 0;
        const paid = parseFloat(amountPaidInput.value) || 0;
        if (total <= 0) { alert('Total fee must be greater than 0.'); valid = false; }
        if (paid < 0) { alert('Amount paid cannot be negative.'); valid = false; }
        if (paid > total) { alert('Amount paid cannot exceed total fee.'); valid = false; }

        if (!valid) {
            e.preventDefault();
            const firstInvalid = feeForm.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
        }
    });

    // initial calc
    calculateTotals();
});