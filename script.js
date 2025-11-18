document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.contact-item, .social a, .download-btn, .pdf-section');
    items.forEach((item, i) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        setTimeout(() => {
            item.style.transition = "all 0.7s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, i * 180);
    });
});

document.querySelectorAll('.contact-item span').forEach(span => {
    span.parentElement.addEventListener('click', function (e) {
        if (this.href.includes('tel') || this.href.includes('mailto')) {
            e.preventDefault();
            const text = this.querySelector('span').textContent.trim();
            navigator.clipboard.writeText(text).then(() => {
                alert("Copied: " + text);
            });
        }
    });
});