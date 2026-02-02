document.addEventListener('DOMContentLoaded', () => {
    const feeForm = document.getElementById('feeForm');
    const inputsToValidate = document.querySelectorAll('.validate-me');
    const feeItems = document.querySelectorAll('.fee-item');
    const amountPaidInput = document.getElementById('amountPaid');
    const totalFeeDisplay = document.getElementById('totalFee');
    const dueAmountDisplay = document.getElementById('dueAmount');

    // --- 1. Real-time Calculation ---
    function calculateTotals() {
        let total = 0;
        feeItems.forEach(item => total += parseFloat(item.value) || 0);
        totalFeeDisplay.value = total;
        const paid = parseFloat(amountPaidInput.value) || 0;
        dueAmountDisplay.value = total - paid;
    }

    [...feeItems, amountPaidInput].forEach(input => {
        input.addEventListener('input', calculateTotals);
    });

    // --- 2. Real-time Verification & Validation ---
    inputsToValidate.forEach(input => {
        const errorSpan = input.nextElementSibling;

        input.addEventListener('input', () => {
            const val = input.value.trim();

            if (val.length === 0) {
                // Mandatory Check
                showError(input, errorSpan, "This field is mandatory");
            } else if (val.length > 20) {
                // Character Limit Check
                showError(input, errorSpan, "Limit exceeded (Max 20 characters)");
            } else {
                // Input is valid
                clearError(input, errorSpan);
            }
        });
    });

    function showError(input, span, message) {
        input.classList.add('invalid');
        span.textContent = message;
        span.style.visibility = 'visible';
    }

    function clearError(input, span) {
        input.classList.remove('invalid');
        span.style.visibility = 'hidden';
    }

    // --- 3. Final Form Submission Check ---
    feeForm.addEventListener('submit', (e) => {
        let isFormValid = true;

        inputsToValidate.forEach(input => {
            const errorSpan = input.nextElementSibling;
            if (!input.value.trim()) {
                showError(input, errorSpan, "This field is mandatory");
                isFormValid = false;
            }
            if (input.value.length > 20) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            e.preventDefault();
            alert("Please correct the errors before submitting.");
        }
    });

    calculateTotals();
});