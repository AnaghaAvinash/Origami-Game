var b,tI,t,fI,f,NewTriangle,NewSquare,NewRectangle,NewCircle,a,r,hI,h,c=0;

//variables for shapes images
var Bsquare,Bcircle,Brectangle;
var Gsquare,Gcircle,Grectangle,Gtriangle;
var GRsquare,GRcircle,GRrectangle,GRtriangle;
var Osquare,Ocircle,Orectangle,Otriangle;
var Psquare,Pcircle,Prectangle,Ptriangle;
var PUsquare,PUcircle,PUrectangle,PUtriangle;
var Rsquare,Rcircle,Rrectangle,Rtriangle;
var Wsquare,Wcircle,Wrectangle,Wtriangle;
var Ysquare,Ycircle,Yrectangle,Ytriangle;

//variables for button images
var BlueI,RedI,GreenI,GreyI,WhiteI,OrangeI,PinkI,PurpleI,YellowI;
var TriangleI,CircleI,RectangleI,SquareI;
var DecreaseI,IncreaseI,deleteI,rotateI;

//variables for colour sprites
var Blue,Red,White,Green,Grey,Pink,Purple,Orange,Yellow;

//variables for NewTriangle sprites
var Circle,Rectangle,Square,Triangle;

//variables for button sprites;
var Decrease,Increase,Delete,Rotate;

function preload(){
b = loadImage("images/back.jpg");
tI = loadImage("images/textI.png");
fI = loadImage("images/buttons/FEEDBACK.png");
hI = loadImage("images/HowTo.png");

//Blue images
Bsquare = loadImage("images/blue/square.png");
Bcircle = loadImage("images/blue/circle.png");
Brectangle = loadImage("images/blue/rectangle.png");
Btriangle = loadImage("images/blue/triangle.png");

//Green images
Gsquare = loadImage("images/green/square.png");
Gcircle = loadImage("images/green/circle.png");
Grectangle = loadImage("images/green/rectangle.png");
Gtriangle = loadImage("images/green/triangle.png");

//Grey images
GRsquare = loadImage("images/grey/square.png");
GRcircle = loadImage("images/grey/circle.png");
GRrectangle = loadImage("images/grey/rectangle.png");
GRtriangle = loadImage("images/grey/triangle.png");

//Orange images
Osquare = loadImage("images/orange/square.png");
Ocircle = loadImage("images/orange/circle.png");
Orectangle = loadImage("images/orange/rectangle.png");
Otriangle = loadImage("images/orange/triangle.png");

//pink images
Psquare = loadImage("images/pink/square.png");
Pcircle = loadImage("images/pink/circle.png");
Prectangle = loadImage("images/pink/rectangle.png");
Ptriangle = loadImage("images/pink/triangle.png");

//purple images
PUsquare = loadImage("images/purple/square.png");
PUcircle = loadImage("images/purple/circle.png");
PUrectangle = loadImage("images/purple/rectangle.png");
PUtriangle = loadImage("images/purple/triangle.png");

//red images
Rsquare = loadImage("images/red/square.png");
Rcircle = loadImage("images/red/circle.png");
Rrectangle = loadImage("images/red/rectangle.png");
Rtriangle = loadImage("images/red/triangle.png");

//white images
Wsquare = loadImage("images/white/square.png");
Wcircle = loadImage("images/white/circle.png");
Wrectangle = loadImage("images/white/rectangle.png");
Wtriangle = loadImage("images/white/triangle.png");

//yellow images
Ysquare = loadImage("images/yellow/square.png");
Ycircle = loadImage("images/yellow/circle.png");
Yrectangle = loadImage("images/yellow/rectangle.png");
Ytriangle = loadImage("images/yellow/triangle.png");

//colour buttons images
BlueI = loadImage("images/buttons/BLUE.png");
RedI = loadImage("images/buttons/RED.png");
GreenI = loadImage("images/buttons/GREEN.png");
GreyI = loadImage("images/buttons/GREY.png");
BlueI = loadImage("images/buttons/BLUE.png");
PinkI = loadImage("images/buttons/PINK.png");
PurpleI = loadImage("images/buttons/PURPLE.png");
WhiteI = loadImage("images/buttons/WHITE.png");
YellowI = loadImage("images/buttons/YELLOW.png");
OrangeI = loadImage("images/buttons/ORANGE.png");

//NewTriangle buttons images
TriangleI = loadImage("images/buttons/TRIANGLE.png");
CircleI = loadImage("images/buttons/CIRCLE.png");
RectangleI = loadImage("images/buttons/RECTANGLE.png");
SquareI = loadImage("images/buttons/SQUARE.png");

//buttons images
DecreaseI = loadImage("images/buttons/DECREASEsize.png");
IncreaseI = loadImage("images/buttons/INCREASEsize.png");
deleteI = loadImage("images/buttons/delete.png");
rotateI = loadImage("images/buttons/rotate.png");

}

function setup() {
  createCanvas(1300,600);

  //colour button sprites
  Blue = createSprite(100,200);
  Red = createSprite(100,450);
  White = createSprite(100,550);
  Green = createSprite(100,250);
  Grey = createSprite(100,500);
  Pink = createSprite(100,400);
  Purple = createSprite(100,150);
  Orange = createSprite(100,350);
  Yellow = createSprite(100,300);

  //NewTriangle button sprites
  Circle = createSprite(1200,250);
  Rectangle = createSprite(1200,200);
  Triangle = createSprite(1200,150);
  Square = createSprite(1200,300);

  //other button sprites
  Decrease = createSprite(1200,450);
  Increase = createSprite(1200,400);
  Delete = createSprite(1200,350);
  Rotate = createSprite(1200,500);
  
  h = createSprite(650,300);
  h.visible = false;
  t = createSprite(650,200);
  f = createSprite(1200,550);

  //creating shapes
  NewTriangle = createSprite(650,300);
  NewTriangle.visible=false;
  NewSquare = createSprite(650,300);
  NewSquare.visible=false;
  NewRectangle = createSprite(650,300);
  NewRectangle.visible=false;
  NewCircle = createSprite(650,300);
  NewCircle.visible=false;

}


function draw() {  
  background(b);

  // colour button images
  Blue.addImage(BlueI);
  Blue.scale = 0.6;

  Red.addImage(RedI);
  Red.scale = 0.6;

  White.addImage(WhiteI);
  White.scale = 0.6;

  Grey.addImage(GreyI);
  Grey.scale = 0.6;

  Green.addImage(GreenI);
  Green.scale = 0.6;

  Pink.addImage(PinkI);
  Pink.scale = 0.6;

  Purple.addImage(PurpleI);
  Purple.scale = 0.6;

  Yellow.addImage(YellowI);
  Yellow.scale = 0.6;

  Orange.addImage(OrangeI);
  Orange.scale = 0.6;

  //NewTriangles button images
   Circle.addImage(CircleI);
   Circle.scale = 0.6;

   Square.addImage(SquareI);
   Square.scale = 0.6;

   Triangle.addImage(TriangleI);
   Triangle.scale = 0.6;

   Rectangle.addImage(RectangleI);
   Rectangle.scale = 0.6;

   //other button images
   Decrease.addImage(DecreaseI);
   Decrease.scale = 0.6;

   Increase.addImage(IncreaseI);
   Increase.scale = 0.6;

   Delete.addImage(deleteI);
   Delete.scale = 0.6;

   Rotate.addImage(rotateI);
   Rotate.scale = 0.6;

   h.addImage(hI);
   h.scale = 0.5;
   

  t.addImage(tI)
  t.scale = 0.8;

  f.addImage(fI);
  f.scale = 0.6;

  if(keyDown("space")){
    h.visible=false;
  }

  
  if(mousePressedOver(f)){
    h.visible=true;
  }
  if(mousePressedOver(Triangle)){
    TRiangle();
  }

  if(mousePressedOver(Green)){
    GReen();
  }

  if(mousePressedOver(Grey)){
    GRey();
  }

  if(mousePressedOver(Blue)){
    BLue();
  }

  if(mousePressedOver(Yellow)){
      YEllow();
  }

  if(mousePressedOver(Red)){
    REd();
  }

  if(mousePressedOver(Orange)){
    ORange();
  }

  if(mousePressedOver(Pink)){
    PInk();
  }

  if(mousePressedOver(White)){
    WHite();
  }

  if(mousePressedOver(Purple)){
    PUrple();
  }

  if(mousePressedOver(Square)){
    SQuare();
  }

  if(mousePressedOver(Rectangle)){
    REctangle();
  }

  if(mousePressedOver(Circle)){
    CIrcle();
  }

  
  if(mousePressedOver(NewCircle)){
    r=1;
     }
 
     if(mousePressedOver(NewTriangle)){
     r=2;
      }

      if(mousePressedOver(NewRectangle)){
        r=3;
         }

         if(mousePressedOver(NewSquare)){
          r=4;
           }

           if(r==1 && mousePressedOver(Increase)) {
             NewCircle.scale += 0.05;
           }

           if(r==1 && mousePressedOver(Decrease)) {
            NewCircle.scale -= 0.05;
          }

          if(r==2 && mousePressedOver(Increase)) {
            NewTriangle.scale += 0.05;
          }

          if(r==2 && mousePressedOver(Decrease)) {
           NewTriangle.scale -= 0.05;
         }

         if(r==3 && mousePressedOver(Increase)) {
          NewRectangle.scale += 0.05;
        }

        if(r==3 && mousePressedOver(Decrease)) {
         NewRectangle.scale -= 0.05;
       }

       if(r==4 && mousePressedOver(Increase)) {
        NewSquare.scale += 0.05;
      }

      if(r==4 && mousePressedOver(Decrease)) {
       NewSquare.scale -= 0.05;
     }

     if(r==1 && mousePressedOver(Delete)) {
      NewCircle.destroy();
    }

    if(r==2 && mousePressedOver(Delete)) {
      NewTriangle.destroy();
    }


    if(r==3 && mousePressedOver(Delete)) {
      NewRectangle.destroy();
    }

    if(r==4 && mousePressedOver(Delete)) {
      NewSquare.destroy();
    }

    if(r==1 && mousePressedOver(Rotate)) {
      NewCircle.rotation += 5;
    }

    if(r==2 && mousePressedOver(Rotate)) {
      NewTriangle.rotation += 5;
    }

    if(r==3 && mousePressedOver(Rotate)) {
      NewRectangle.rotation += 5;
    }

    if(r==4 && mousePressedOver(Rotate)) {
      NewSquare.rotation += 5;
    }


    
    
  
  
  drawSprites();

}

//add a new triangle
function TRiangle(){
NewTriangle.visible=true;
NewTriangle.addImage(PUtriangle);
NewTriangle.scale = 0.5;
h.visible= false;
a=1;
}

//add image of purple triangle
function PurpleTriangle(){
  NewTriangle.addImage(PUtriangle);
  NewTriangle.scale = 0.5;
}

//add image of blue triangle
function BlueTriangle(){
  NewTriangle.addImage(Btriangle);
  NewTriangle.scale = 0.5;
}

//add image of green triangle
function GreenTriangle(){
NewTriangle.addImage(Gtriangle);
NewTriangle.scale = 0.5;
}

//add image of yellow triangle
function YellowTriangle(){
  NewTriangle.addImage(Ytriangle);
  NewTriangle.scale = 0.5;
}


//add image of orange triangle
function OrangeTriangle(){
  NewTriangle.addImage(Otriangle);
  NewTriangle.scale = 0.5;
}

//add image of pink triangle
function PinkTriangle(){
  NewTriangle.addImage(Ptriangle);
  NewTriangle.scale = 0.5;
}

//add image of red triangle
function RedTriangle(){
  NewTriangle.addImage(Rtriangle);
  NewTriangle.scale = 0.5;
}

//add image of grey triangle
function GreyTriangle(){
  NewTriangle.addImage(GRtriangle);
  NewTriangle.scale = 0.5;
}

//add image of orange triangle
function WhiteTriangle(){
  NewTriangle.addImage(Wtriangle);
  
}

//add a new square
function SQuare(){
  NewSquare.visible=true;
  NewSquare.addImage(PUsquare);
  NewSquare.scale = 0.5;
 a=2;
  }

//add image of purple square
function PurpleSquare(){
  NewSquare.addImage(PUsquare);
  NewSquare.scale = 0.5;
}

//add image of blue square
function BlueSquare(){
  NewSquare.addImage(Bsquare);
  NewSquare.scale = 0.5;
}

//add image of green square
function GreenSquare(){
  NewSquare.addImage(Gsquare);
  NewSquare.scale = 0.5;
}

//add image of yellow square
function YellowSquare(){
  NewSquare.addImage(Ysquare);
  NewSquare.scale = 0.5;
}

//add image of orange square
function OrangeSquare(){
  NewSquare.addImage(Osquare);
  NewSquare.scale = 0.5;
}

//add image of pink square
function PinkSquare(){
  NewSquare.addImage(Psquare);
  NewSquare.scale = 0.5;
}

//add image of red square
function RedSquare(){
  NewSquare.addImage(Rsquare);
  NewSquare.scale = 0.5;
}

//add image of grey square
function GreySquare(){
  NewSquare.addImage(GRsquare);
  NewSquare.scale = 0.5;
}

//add image of white square
function WhiteSquare(){
  NewSquare.addImage(Wsquare);
  NewSquare.scale = 0.5;
}

//add a new recatngle
function REctangle(){
  NewRectangle.visible=true;
  NewRectangle.addImage(PUrectangle);
  NewRectangle.scale = 0.2;
  a=3;
  }

//add image of purple rectangle
function PurpleRect(){
  NewRectangle.addImage(PUrectangle);
  NewRectangle.scale = 0.2;
}

//add image of blue rectangle
function BlueRect(){
  NewRectangle.addImage(Brectangle);
  NewRectangle.scale = 0.2;
}

//add image of green rectangle
function GreenRect(){
  NewRectangle.addImage(Grectangle);
  NewRectangle.scale = 0.2;
}

//add image of yellow rectangle
function YellowRect(){
  NewRectangle.addImage(Yrectangle);
  NewRectangle.scale = 0.2;
}

//add image of orange rectangle
function OrangeRect(){
  NewRectangle.addImage(Orectangle);
  NewRectangle.scale = 0.2;
}

//add image of pink rectangle
function PinkRect(){
  NewRectangle.addImage(Prectangle);
  NewRectangle.scale = 0.2;
}

//add image of red rectangle
function RedRect(){
  NewRectangle.addImage(Rrectangle);
  NewRectangle.scale = 0.2;
}

//add image of grey rectangle
function GreyRect(){
  NewRectangle.addImage(GRrectangle);
  NewRectangle.scale = 0.2;
}

//add image of white rectangle
function WhiteRect(){
  NewRectangle.addImage(Wrectangle);
  NewRectangle.scale = 0.2;
}

//add a new circle
function CIrcle(){
  NewCircle.visible=true;
  NewCircle.addImage(PUcircle);
  NewCircle.scale = 0.5;
  a=4;
}

 //add image of purple circle
 function PurpleCircle(){
  NewCircle.addImage(PUcircle);
 NewCircle.scale = 0.5;
}

//add image of blue circle
function BlueCircle(){
  NewCircle.addImage(Bcircle);
  NewCircle.scale = 0.5;
}

//add image of green circle
function GreenCircle(){
  NewCircle.addImage(Gcircle);
  NewCircle.scale = 0.5;
}

//add image of yellow circle
function YellowCircle(){
  NewCircle.addImage(Ycircle);
  NewCircle.scale = 0.5;
}

//add image of orange circle
function OrangeCircle(){
  NewCircle.addImage(Ocircle);
  NewCircle.scale = 0.5;
}

//add image of pink circle
function PinkCircle(){
  NewCircle.addImage(Pcircle);
  NewCircle.scale = 0.5;
}

//add image of red circle
function RedCircle(){
  NewCircle.addImage(Rcircle);
  NewCircle.scale = 0.5;
}

//add image of grey circle
function GreyCircle(){
  NewCircle.addImage(GRcircle);
  NewCircle.scale = 0.5;
}

//add image of white rectangle
function WhiteCircle(){
  NewCircle.addImage(Wcircle);
  NewCircle.scale = 0.5;
}




//everything related to purple
function PUrple(){
  if(a==1){
    PurpleTriangle();
  }else if(a==2){
    PurpleSquare();
  }else if (a==3){
    PurpleRect();
  }else if (a==4){
    PurpleCircle();
  }
}

//everything related to blue
function BLue(){
  if(a==1){
    BlueTriangle();
  }else if(a==2){
    BlueSquare();
  }else if (a==3){
    BlueRect();
  }else if (a==4){
    BlueCircle();
  }
}

//everything related to green
function GReen(){
  if(a==1){
    GreenTriangle();
  }else if(a==2){
    GreenSquare();
  }else if (a==3){
    GreenRect();
  }else if (a==4){
    GreenCircle();
  }
}

//everything related to yellow
function YEllow(){
  if(a==1){
    YellowTriangle();
  }else if(a==2){
    YellowSquare();
  }else if (a==3){
    YellowRect();
  }else if (a==4){
    YellowCircle();
  }
}

//everything related to orange
function ORange(){
  if(a==1){
    OrangeTriangle();
  }else if(a==2){
    OrangeSquare();
  }else if (a==3){
    OrangeRect();
  }else if (a==4){
    OrangeCircle();
  }
}

//everything related to pink
function PInk(){
  if(a==1){
    PinkTriangle();
  }else if(a==2){
    PinkSquare();
  }else if (a==3){
    PinkRect();
  }else if (a==4){
    PinkCircle();
  }
}

//everything related to red
function REd(){
  if(a==1){
    RedTriangle();
  }else if(a==2){
    RedSquare();
  }else if (a==3){
    RedRect();
  }else if (a==4){
    RedCircle();
  }
}

//everything related to grey
function GRey(){
  if(a==1){
    GreyTriangle();
  }else if(a==2){
    GreySquare();
  }else if (a==3){
    GreyRect();
  }else if (a==4){
      GreyCircle();
  }
}

//everything related to white
function WHite(){
  if(a==1){
    WhiteTriangle();
  }else if (a==2){
    WhiteSquare();
  }else if (a==3){
    WhiteRect();
  }else if (a==4){
    WhiteCircle();
  }
}

function mouseDragged(){
	if(r==1){
		NewCircle.x = mouseX;
		NewCircle.y = mouseY;
	}
	

	if(r==2){
		NewTriangle.x = mouseX;
		NewTriangle.y = mouseY;
	}


if(r==3){
  NewRectangle.x = mouseX;
  NewRectangle.y = mouseY;
  
}


if(r==4){
  NewSquare.x = mouseX;
  NewSquare.y = mouseY;
  
}
}







