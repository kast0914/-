window.onload = function () {
    const checkboxes = document.querySelectorAll('#task-list input[type="checkbox"]');
    const scoreElem = document.getElementById('score');
    let score = 0;

    checkboxes.forEach(box => {
        box.addEventListener('change', function() {
            const points = parseInt(this.getAttribute('data-points'));
            if (this.checked) {
                score += points;
            } else {
                score -= points;
            }
            scoreElem.textContent = `획득 포인트: ${score}`;
        });
    });
};
