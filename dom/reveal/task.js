const findText = document.getElementsByClassName('reveal');

window.addEventListener('scroll', function() {
    for(const block of findText) {
        const rect = block.getBoundingClientRect();
        block.classList.toggle('reveal_active', (rect.top < window.innerHeight) && (rect.bottom > 0));
    }
})