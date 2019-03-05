'use strict';

window.addEventListener('load', () => {
    
    const canvas = document.querySelector('#canvas');
    //Define 2d, 3d..
    const ctx = canvas.getContext('2d');
    
    //Def. hight
        // canvas.height = window.innerHeight;
        // canvas.width = window.innerWidth;s
    //Keep size on resize 
    
    ctx.fillRect(100, 100, 0, 0);
    
    
    
});

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
