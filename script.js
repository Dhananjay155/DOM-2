document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const userInput = document.getElementById('userInput');
    const result = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const text = userInput.value;
        const lengthExcludingSpaces = calculateLength(text);
        result.textContent = lengthExcludingSpaces;

        result.classList.add('highlight');
        setTimeout(() => {
            result.classList.remove('highlight');
        }, 300);
    });

    function calculateLength(text) {
        const textWithoutSpaces = text.replace(/\s+/g, '');
        return textWithoutSpaces.length;
    }
});
