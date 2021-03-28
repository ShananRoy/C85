var canvas=new fabric.Canvas('myCanvas');
block_image_width=30
block_image_height=30
player_y=10
player_x=10
var player_object="";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
{
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
canvas.add(player_object);


});

}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
{
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
canvas.add(block_image_object);


});

}
window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log (keyPressed);
if(e.shiftKey==true && keyPressed=='80')
{
console.log("P and shift key pressed together");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keyPressed=='77')
{
console.log("m and shift key pressed together");
block_image_width=block_image_width-10;
block_image_height=block_image_height-10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(keyPressed=='38')
{
    up();
    console.log("up");
}
if(keyPressed=='40')
{
    down();
    console.log("down");
}
if(keyPressed=='37')
{
    left();
    console.log("left");
}
if(keyPressed=='39')
{
    right();
    console.log("right");
}
if(keyPressed=='87')
{
    new_image('captain_america_left_hand.png')
   console.log("w");
}
if(keyPressed=='71')
{
    new_image('Final_output.png')
   console.log("g");
}
if(keyPressed=='76')
{
    new_image('hulk_face.png')
   console.log("l");
}
if(keyPressed=='84')
{
    new_image('hulk_left_hand.png')
   console.log("t");
}
if(keyPressed=='82')
{
    new_image('hulk_legs.png')
   console.log("r");
}
if(keyPressed=='89')
{
    new_image('hulk_right_hand.png')
   console.log("y");
}
if(keyPressed=='68')
{
    new_image('hulkd_body.png')
   console.log("d");
}
if(keyPressed=='85')
{
    new_image('ironman_body.png')
   console.log("u");
}

if(keyPressed=='67')
{
    new_image('ironman_face.png')
   console.log("c");
}
if(keyPressed=='81')
{
    new_image('ironman_left_hand.png')
   console.log("q");
}
if(keyPressed=='113')
{
    new_image('ironman_legs.png')
   console.log("f2");
}
if(keyPressed=='114')
{
    new_image('ironman_right_hand.png')
   console.log("f3");
}
if(keyPressed=='115')
{
    new_image('spiderman_body.png')
   console.log("f4");
}
if(keyPressed=='116')
{
    new_image('spiderman_face.png')
   console.log("f5");
}
if(keyPressed=='117')
{
    new_image('spiderman_left_hand.png')
   console.log("f6");
}
if(keyPressed=='118')
{
    new_image('spiderman_legs.png')
   console.log("f7");
}
if(keyPressed=='119')
{
    new_image('spiderman_right_hand.png')
   console.log("f8");
}
if(keyPressed=='120')
{
    new_image('thor_face.png')
   console.log("f9");
}
if(keyPressed=='121')
{
    new_image('thor_left_hand.png')
   console.log("f10");
}
if(keyPressed=='122')
{
    new_image('thor_right_hand.png')
   console.log("f11");
}
}
function up()
{
    if(player_y>0)
    {
        player_y=player_y-block_image_height;
        console.log("blockimageheight=" +block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("blockimageheight=" +block_image_height);
        vaconsole.log("When down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x>0)
    {
        player_x=player_x-block_image_width;
        console.log("blockimagewidth=" +block_image_width);
        vaconsole.log("When left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x=player_x-block_image_height;
        console.log("blockimagewidth=" +block_image_width);
        vaconsole.log("When right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}