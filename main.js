canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
rover_width = 100;
rover_height = 100;
background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 150;
rover_y =200;
function add() {
    background_imgTag =  new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadrover;
    rover_imageTag.src = rover_image
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(rover_y>=0)
    {
        rover_y-= 10;
         console.log("when up arrow is pressed = " + rover_x + " - " +rover_y);
         uploadbackground();
         uploadwater();
         uploadrover();
    }
}

function down()
{
    if(rover_y<=500)
    {
        rover_y+= 10;
         console.log("when down arrow is pressed = " + rover_x + " | y = " +rover_y);
         uploadbackground();
         uploadwater();
         uploadrover();
    }
}

function left()
{
    if(rover_y>=0)
    {
        rover_x-= 10;
         console.log("when left arrow is pressed = " + rover_x + " | y = " +rover_y);
         uploadbackground();
         uploadwater();
         uploadrover();
    }
}

function right()
{
    if(rover_x<=700)
    {
        rover_x-= 10;
         console.log("when right arrow is pressed = " + rover_x + " | y = " +rover_y);
         uploadbackground();
         uploadwater();
         uploadrover();
    }
}