//Create variables here
var  dog, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
  dog=loadImage("images/dogImg1.png");
  happyDog=loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database();

  createCanvas(500, 500);
  dogSprite=createSprite(250,250)
  dogSprite.scale=0.2;
  dogSprite.addImage(dog)

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)


  if(keyWentDown(UP_ARROW)){
writeStock(foodStock)
dogSprite.addImage(happyDog);
  }
  drawSprites();
  //add styles here
textSize(20)
fill("black")
  text("food remaining:"+foodStock,150,150)

}
function readStock(data){
foodStock=data.val()
}

function writeStock(x){
if(x<=0){
x=0;
}else{
  x=x-1
}
  database.ref('/').update({
    Food:x
  })
}



