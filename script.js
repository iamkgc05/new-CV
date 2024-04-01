document.addEventListener('DOMContentLoaded', (event) => {
    // Toggle navigation on logo click
    document.querySelector('.container .logo').addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('active');
    });

    // Hide navigation on nav item click
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('nav ul').classList.remove('active');
        });
    });
});