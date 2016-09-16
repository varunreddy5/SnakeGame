var width,height,snake,scl=20,food;


function setup(){
	width=window.innerWidth-220;
	height=window.innerHeight-220;
createCanvas(floor(width/20)*20,floor(height/20)*20); 
console.log(width,height);
    //createCanvas(width,height);
    textFont('Sintony');
    frameRate(15);
    snake=new Snake();
    pickUpLocation();
    
}

function pickUpLocation(){
    columns=floor(width/scl);
    rows=floor(height/scl);
    food=createVector(floor(random(columns)),floor(random(rows)));
    food.mult(scl);
}

function draw(){
    background(0);
    if(snake.dead()){
        gameOver();
        noLoop();
    }
    snake.show();
    snake.update();
    snakeScore();   
    
//        gameOver();
//        noLoop();
//    }
    fill(255,0,100);
    rect(food.x,food.y,scl,scl);
    
    if(snake.eats(food)){
        pickUpLocation();
        
        
    }

    function snakeScore(){
        fill(255,100,150);
        textSize(17);
        text("Score: "+snake.total,20,30);
    }
    
  

}
function gameOver(){
    textSize(30);
    text("Game Over",width/2.5,height/5);
    textSize(17);
    text("Click to Restart",width/2.4,height/4);
    return true;
}
function mousePressed(){
    if(gameOver()){
         loop();
        location.reload();
       
    }
}
function keyPressed(){
    if((keyCode===UP_ARROW && snake.yDir!=1  && snake.snakeArr.length!=0) || (keyCode===UP_ARROW && snake.snakeArr.length==0)){
        snake.direction(0,-1);
        console.log("Up arrow");
    }else if((keyCode===DOWN_ARROW && snake.yDir!=-1 && snake.snakeArr.length!=0) || (keyCode===DOWN_ARROW && snake.snakeArr.length==0)){
        snake.direction(0,1);
    }else if((keyCode===LEFT_ARROW && snake.xDir!=1 && snake.snakeArr.length!=0) || (keyCode===LEFT_ARROW && snake.snakeArr.length==0)){
        snake.direction(-1,0);
    }else if((keyCode===RIGHT_ARROW && snake.xDir!=-1 && snake.snakeArr.length!=0) || (keyCode===RIGHT_ARROW && snake.snakeArr.length==0)){
        snake.direction(1,0);
    }
}