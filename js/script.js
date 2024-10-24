document.addEventListener('DOMContentLoaded', function() {
    const navitems = document.querySelectorAll('.nav-item');
    navitems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index);
    });
});

document.getElementById('year').textContent = new Date().getFullYear();