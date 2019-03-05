'use strict';
    //Resizing
/*window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
*/
window.addEventListener('load', () => {
    
    const canvas = document.querySelector('#canvas');
    //Define 2d, 3d..
    const ctx = canvas.getContext('2d');
    
    //Def. hight
    canvas.height = window.innerHeight;
    //Def. width
    canvas.width = window.innerWidth;
    
    /*
    //Drawing rect
    ctx.strokeStyle =  'red';
    ctx.lineWidth = 5;
    ctx.strokeRect(10,10,100,100);
    ctx.strokeStyle = '#1212f8';
    ctx.strokeRect(10,10,200,10);
    */
    /*
    //Drawing lines
    //Where to start drawing
    ctx.beginPath(50,50);
    ctx.moveTo(100,100);
    ctx.lineTo(150,100);
    ctx.lineTo(150,150);
    //ctx.closePath();
    ctx.stroke();
    */
    
    //Variables
    let painting = false;
    
    function startDrawing(e){
        painting = true;
        draw(e);
    }
    function stopDrawing(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if (!painting) return;        
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'red';
            
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        
        
    }
    
    //Event Listner  
    canvas.addEventListener('mouseClicked', startDrawing);
    canvas.addEventListener('mouseClickedFalse', stopDrawing);
    canvas.addEventListener('mouseMove', draw);
    
    
});
