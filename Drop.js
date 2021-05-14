class Drop {
    constructor(x,y){
        var options = {
        fricition:0.1,
        }
        this.image = loadImage("");
        this.rain = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.Drop)

        Update(){
           
            if(this.rain.position.y > Height){
           
                Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        }       
    }
}
}