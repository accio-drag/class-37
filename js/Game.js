class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1= createSprite(100,200,50,50);
    car2= createSprite(300,200,50,50);
  
    car3= createSprite(500,200,50,50);
  
    car4= createSprite(700,200,50,50);
  
cars = [car1,car2,car3,car4];



  }
  play(){
    form.hide();
    textSize(25);
    text("GAME START",150,100)
    Player.getPlayerInfo();
  if ( allPlayers !== undefined){
    //var pos = 120;
    var x = 0 
    var index = 0
    var y = 0
    for (var plr in allPlayers){
      index+=1; 
      x+=200;
      y= displayHeight-allPlayers[plr].distance;
      car[index-1].position.x = x;
      car[index-1].position.y = y;
      if (index === player.index){
        cars[index-1].shapeColor="red"
      }
    
    }
  }
  if (keyDown(UP_ARROW)&& player.index!==null){
player.distance+=50;
player.update()
  }

drawSprites();
  }



}