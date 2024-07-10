let back_boxes = document.querySelectorAll('.back_container');

back_boxes.forEach(back_box => {
    back_box.addEventListener('mousemove', function(e) {
        let rect = back_box.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        back_box.style.setProperty('--x', x + 'px');
        back_box.style.setProperty('--y', y + 'px');
    });
});
