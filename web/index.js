const position = document.documentElement;
position.addEventListener("mousemove", e => {
    position.style.setProperty('--X', e.clientX + 'px');
})