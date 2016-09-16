function Snake(){
    this.x=200;
    this.y=200;
    this.xDir=1;
    this.yDir=0;
    this.xspeed=1;
    this.yspeed=0;
    this.total=0;
    this.snakeArr=[];
    this.show=function(){
        
         fill(255);
        rect(this.x,this.y,scl,scl);
        for(var i=0;i<this.snakeArr.length;i++){
            fill(255);
            rect(this.snakeArr[i].x,this.snakeArr[i].y,scl,scl);

           
        }
        
        console.log(this.x,this.y,'rectangle');
       
        
    }
    this.update=function(){
        
        if(this.total===this.snakeArr.length){
            for(var i=0;i<this.snakeArr.length-1;i++){
                console.log(this.snakeArr.length);
                this.snakeArr[i]=this.snakeArr[i+1];
            }
            
        }
        
        this.snakeArr[this.total-1]=createVector(this.x,this.y);
        
        
        this.x=this.x+this.xDir*scl;
        this.y=this.y+this.yDir*scl;
        
        this.x=constrain(this.x,-0.1,width-scl+0.1);
        this.y=constrain(this.y,-0.1,height-scl+0.1);
        
        
       
        
        
        
    }
    
    this.direction=function(xdirection,ydirection){
        this.xDir=xdirection;
        this.yDir=ydirection;
        
    }
    
    this.eats=function(foodPos){
        var d=dist(this.x,this.y,foodPos.x,foodPos.y)
            if(d<1){
                this.total++;
                return true;
            }else{
                return false;
            }
        
    }
    this.dead=function(){
       
        
       if (this.snakeArr.length == 0) {
           if (this.x > width-20 || this.y > height-20 || this.x < 0 || this.y < 0){
           
           
            
               return true;
           }
       }
//        if(this.x<=0 || this.y<=0){
//            return true;
//        }
         if(this.snakeArr.length!=0){
        
        for(var i=0;i<this.snakeArr.length;i++){
            var pos=this.snakeArr[i];
            var dis=dist(this.x,this.y,pos.x,pos.y);
              // console.log(this.x,this.y,this.snakeArr.length);
            if(dis<1){
                // this.total=0;
                // this.snakeArr=[];
                return true;
            }
           
        }
        }
    }
}
   
