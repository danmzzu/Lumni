document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter[data-ref]');

    counters.forEach(counterElement => {
        const inputId = counterElement.dataset.ref;
        const inputElement = document.getElementById(inputId);

        if (inputElement) {
            const maxLength = inputElement.maxLength;

            function updateCounter() {
                const currentLength = inputElement.value.length;
                counterElement.innerText = `${currentLength} / ${maxLength}`;
                const percentage = (currentLength / maxLength) * 100;

                if (percentage >= 100) {
                    counterElement.style.color = 'red';
                } else if (percentage >= 50) {
                    counterElement.style.color = 'orange';
                } else {
                    counterElement.style.color = '#666';
                }
            }

            updateCounter();
            inputElement.addEventListener('input', updateCounter);
        } else {
            console.warn(`Input com ID "${inputId}" não encontrado para o contador:`, counterElement);
        }
    });
});