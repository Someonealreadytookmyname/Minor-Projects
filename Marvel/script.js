document.addEventListener('DOMContentLoaded', function() {
    const symbols = document.querySelectorAll('.symbol');

    symbols.forEach(symbol => {
        symbol.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            document.getElementById('header').style.backgroundColor = color;
        });
    });
});
