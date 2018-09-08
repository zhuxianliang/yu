//1.声明游戏中全局变量
    //1.1创建四个变量保存两个画布和画笔
    var can1=null;   //第一个画布
    var can2=null;   //第二个画布
    var ctx1=null;   //第一个画笔
    var ctx2=null;   //第二个画笔
    //1.2创建两个变量保存画布宽度和高度
    var canWidth=0;
    var canHeight=0;
    //1.3创建一个变量保存背景图片
    var bg=null;
    //1.4创建一个变量保存海葵对象
    var ane=null;
    //1.5创建一个变量保存食物对象
    var fruit=null;
    //1.6 创建一个变量保存大鱼对象
    var mon=null;
    //1.7创建两个变量保存鼠标位置
    var mx=0;
    var my=0;
    //1.8创建两个变量保存上一帧执行时间和两帧之间的时间差
    var lastTime;
    var deltaTime;
    //1.9创建一个变量保存小鱼
    var baby;
    //1.10创建一个变量保存分数
    var data;

//2.创建函数game 入口函数
function game(){
    init();
    gameloop();
}
//3.创建函数init 初始化函数
function init(){
    //3.1初始化画布和画笔
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    //3.2初始化画布高度和宽度
    canWidth=can1.width;
    canHeight=can2.height;
    //3.3背景图片
    bg=new Image();
    bg.src="src/background.jpg";
    //3.4创建海葵对象并且调用初始化方法
    ane=new aneObj();
    ane.init();
    //3.5创建食物对象并且调用初始化方法
    fruit=new fruitObj();
    fruit.init();
    //3.6创建大鱼对象并且调用初始化方法
    mon=new monObj();
    mon.init();
    //3.7为画布1绑定鼠标移动事件和处理函数
    can1.addEventListener("mousemove",onMouseMove,false);
    //3.8初始化当前时间和两帧之间时间差
    lastTime=Date.now();
    deltaTime=0;
    //3.9创建小鱼对象并且调用初始化方法
    baby= new babyObj();
    baby.init();
    //3.10创建分数对象
    data=new dataObj();

}
//4.创建函数gameloop 绘制游戏中各个角色
function gameloop(){
    //4.1创建定时器不停绘制画布中的内容
    //setInterval();setTimeout();智能定时器；
    requestAnimFrame(gameloop);
    //4.2计算两帧之间的时间差
    var now =Date.now();         //获取当期时间
    deltaTime=now-lastTime;        // 当前时间减去上一帧时间
    lastTime=now;                    //恢复上一帧时间
    if(deltaTime>40){ deltaTime=40;}
    //console.log(deltaTime);




    //4.4控制画布上食物活动
    fuitMonotor();
    //4.4_1监控画布上大鱼是否碰撞食物
    momFruitsCollison();
    //4.4.2监控画布上小鱼是否碰撞大鱼
    momBabyCollsion();
    //4.5绘制背景图片
    drawBackground();
    //4.5_1清除画布
    ctx1.clearRect(0,0,canWidth,canHeight);
    //4.6绘制海葵
    ane.draw();
    //4.7绘制食物
    fruit.draw();
    //4.8绘制大鱼对象
    mon.draw();
    //4.9绘制小鱼
    baby.draw();
    //4.10分数
    data.draw();

}
//5.当页面加载成功后调用game函数
document.body.onload=game;

//捕获鼠标移入时位置函数
function onMouseMove(e){
    if(e.offsetX||e.layerX){
        mx=e.offsetX==undefined?e.layerX:e.offsetX;
    }
    if(e.offsetY||e.layerY){
        my=e.offsetY==undefined?e.layerY:e.offsetY;
    }
    //console.log(mx+"_"+my);
}