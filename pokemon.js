/*var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#2ECCFA"; 
var game = new Phaser.Game(w,h,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update,render:render});
*/

function loadImage(){
    backgroundImage = new Image;
    backgroundImage.src = "img/blue.jpg";

    background1Image = new Image;
    background1Image.src = "img/grass.png";

    buildingImage = new Image;
    buildingImage.src = "img/building.png";
    
    treeImage = new Image;
    treeImage.src = "img/coco.png";

    tree1Image = new Image;
    tree1Image.src = "img/tree-bright-e.png";

    tree2Image = new Image;
    tree2Image.src = "img/tree-dark-a.png";

    tree3Image = new Image;
    tree3Image.src = "img/tree-dark-c.png";

    tree4Image = new Image;
    tree4Image.src = "img/tree-dark-d.png";

    background2Image = new Image;
    background2Image.src = "img/ground.png";

    cloudImage = new Image;
    cloudImage.src = "img/cloud.png";

    playerImage = new Image;
    playerImage.src = "img/ambulance2.png";
    
    enemyImage = new Image;
    enemyImage.src = "img/birds.png";
    
    goalImage = new Image;
    goalImage.src = "img/hospital_kalp.png";
}


function init(){
    canvas = document.getElementById('mycanvas');
    W = canvas.width;
    H = canvas.height;
    score = 0;
    pen = canvas.getContext('2d');
    gameover = false;
    
    enemy = {
        x : 300,
        y : 100,
        w : 100,
        h : 100,
        speed : 1.5,
    }
    
    player = {
        x : 0,
        y : 500,
        w : 200,
        h : 100,
        speed : 2,
        state : "still",
    }
    cloud = {
       speed : 0.5,
        x : 1350,
        y : 10,

    }
    
    goal = {
        x : W-250,
        y : 400,
        w : 250,
        h : 200,
    }
    
    
    function keyPressed(e)
    {
        if(e.key=="ArrowRight")
            {
                player.state = "moving";
                if(player.speed < 0)
                    {
                        player.speed *= -1;
                    }
            }
        if(e.key=="ArrowLeft")
            {
                player.state = "moving";
                if(player.speed > 0)
                    {
                        player.speed *= -1;
                    }
            }
    }
    document.addEventListener('keydown',keyPressed);
    
    document.addEventListener('keyup',function(){
        player.state = "still";
    });
    
}

function draw(){
    //Erase the Old Frame
    pen.clearRect(0,0,W,H);
    i=0;
    
    pen.fillStyle = "black";
    pen.fillRect(0,0,1350,600);
    
    
    pen.font = "14px Areal";
    pen.fillText("Score " + score, 15,15);
    /*
    pen.fillStyle = "Blue";
    pen.fillRect(enemy.x,enemy.y,enemy.w,enemy.h);
    
    pen.fillStyle = "gray";
    pen.fillRect(player.x,player.y,player.w,player.h);
    
    pen.fillStyle = "Green";
    pen.fillRect(goal.x,goal.y,goal.w,goal.h);
    
    */
    //pen.font = "14px Areal";
    //pen.fillText("Score " + score, 15,15);
    
   // pen.fillStyle = "Blue";
    //Not moving 
    //background
    pen.drawImage(backgroundImage,0,0,1350,650);
    //cloud
    pen.drawImage(cloudImage,20,20,120,100);
    pen.drawImage(cloudImage,200,50,120,100);
    pen.drawImage(cloudImage,400,30,120,100); 
    pen.drawImage(cloudImage,600,80,120,100);
    pen.drawImage(cloudImage,800,60,120,100);
    pen.drawImage(cloudImage,1000,90,120,100);
    pen.drawImage(cloudImage,1200,65,120,100);
    //tree
    pen.drawImage(tree1Image,10,500,80,100);
    pen.drawImage(tree2Image,50,500,80,100);
    pen.drawImage(tree3Image,120,500,80,100);
    pen.drawImage(tree1Image,400,500,80,100);
    pen.drawImage(tree2Image,450,500,80,100);
    pen.drawImage(tree3Image,300,500,80,100);
    pen.drawImage(tree4Image,550,480,80,120);
    pen.drawImage(tree1Image,800,500,80,100);
    pen.drawImage(tree2Image,850,500,80,100);
    pen.drawImage(tree3Image,700,500,80,100);
    pen.drawImage(tree4Image,950,480,80,120);
    //building
    pen.drawImage(buildingImage,1050,302,180,300);
    pen.drawImage(buildingImage,650,302,180,300);
    //pen.drawImage(treeImage,200,300,120,300);
    //pen.drawImage(treeImage,200,300,120,300);
    pen.drawImage(treeImage,200,350,120,250);
    //Moving cloud
    
    pen.drawImage(enemyImage,enemy.x,enemy.y,enemy.w,enemy.h);
    pen.drawImage(cloudImage,cloud.x,cloud.y,100,80);
    pen.drawImage(cloudImage,cloud.x,cloud.y+125,100,80);
    pen.drawImage(cloudImage,cloud.x+120,cloud.y+50,100,80);
    //pen.fillStyle = "gray";
    pen.drawImage(playerImage,player.x,player.y,player.w,player.h);
    
    //pen.fillStyle = "Green";
    pen.drawImage(goalImage,goal.x,goal.y,goal.w,goal.h);
    while(i!=1350)
    {
        pen.drawImage(background2Image,i,625,45,25);
        pen.drawImage(background1Image,i,600,50,28);
        i += 45;
    }
    
    
    
    
    
}

function update(){
    enemy.y+= enemy.speed;
    if(enemy.y >= H-400-enemy.h || enemy.y <= 50)
        {
            enemy.speed *= -1;
        }
    
    if(player.state=="moving")
        {
            player.x += player.speed;
        }
    score = Math.round(player.x/10);
   cloud.x -= cloud.speed;
    if(cloud.x<=-50)
    {
        cloud.x = 1350;
    }
    
    
}

function gameLoop(){
    draw();
    update();
    console.log("In Game Loop");
            window.requestAnimationFrame(gameLoop);
}

function startGame(){
    init();
    loadImage();
    gameLoop();
}
//setInterval(gameLoop,56);
startGame();