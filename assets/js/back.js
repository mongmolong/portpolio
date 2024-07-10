// let back_box = document.querySelectorAll('.back_container');
// back_box.forEach(box =>{
//     box.onmousemove = function(e){
//         let x = e.pageX - back_box.offsetLeft; 
//         let y = e.pageY - back_box.offsetTop; 

//         back_box.style.setProperty('--x', x + 'px');
//         back_box.style.setProperty('--y', y + 'px');
//     }
// })

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
