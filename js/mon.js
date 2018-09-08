/**
 * Created by web-01 on 2018/7/26.
 */
//1.创建大鱼类monObj
 var monObj=function(){
    //大鱼位置
    this.x=0;
    this.y=0;
    //大鱼浮动角度
    this.angle=0;
    //大鱼眼睛
    this.bigEye=[];
    //大鱼身体
    this.bigBody=[];
    //大鱼尾巴
    this.bigTail=[];

    //创建三个变量切换大鱼尾巴图片
    //起始时间
    this.bigTailStart=1;
    //结束时间
    this.bigTailEnd=60;
    //图片下标
    this.bigTailIndex=0;

   //创建三个变量切换大鱼眼睛图片
    //起始时间
    this.bigEyeStart=1;
    //结束时间
    this.bigEyeEnd=2000;
    //图片下标
    this.bigEyeIndex=0;

    //创建三个变量切换大鱼身体图片
    //起始时间
    this.bigBodyStart=1;
    //结束时间
    this.bigBodyEnd=300;
    //图片下标
    this.bigBodyIndex=0;


};
//2.为大鱼类添加初始化方法
 monObj.prototype.init=function(){
     //1.初始化大鱼位置在画布中央
     this.x=canWidth*0.5;
     this.y=canHeight*0.5;
     //2.初始化大鱼角度
     this.angle=0;
     //3.初始化大鱼眼睛
     for(var i=0;i<2;i++){
         this.bigEye[i]=new Image();
         this.bigEye[i].src="src/bigEye"+i+".png";
     }
     //console.log(this.bigEye);
     //4.初始化大小鱼身体
     for(var i=0; i<8;i++){
         this.bigBody[i]=new Image();
         this.bigBody[i].src="src/bigSwim"+i+".png";
     }
     //console.log(this.bigBody);
     //5.初始化大鱼尾巴
     for(var i=0;i<8;i++){
         this.bigTail[i]=new Image();
         this.bigTail[i].src="src/bigTail"+i+".png";
     }
     //console.log(this.bigTail);
 };
//3.为大鱼类添加绘制方法
 monObj.prototype.draw=function(){
     //切换大鱼尾巴下标
     //累加起始时间
     this.bigTailStart+=deltaTime;
     //如果起始时间大鱼结束时间
     if(this.bigTailStart>this.bigTailEnd){
         //切换图片下标
         this.bigTailIndex=(this.bigTailIndex+1)%8;
         //起始时间恢复初始值
         this.bigTailStart=1;
     }

     //切换大鱼眼睛下标
     //累加起始时间
     this.bigEyeStart+=deltaTime;
     //如果起始时间大鱼结束时间
     if(this.bigEyeStart>this.bigEyeEnd){
         //切换图片下标
         this.bigEyeIndex=(this.bigEyeIndex+1)%2;
         //起始时间恢复初始值
         this.bigEyeStart=1;
         if(this.bigEyeIndex==1){
             this.bigEyeEnd=200;
         }
         if(this.bigEyeIndex==0){
             this.bigEyeEnd=2000;
         }
     }

     //切换大鱼身体下标
     //累加起始时间
     this.bigBodyStart+=deltaTime;
     //如果起始时间大鱼结束时间
     if(this.bigBodyStart>this.bigBodyEnd){
         //切换图片下标
         this.bigBodyIndex=(this.bigBodyIndex+1)%8;
         //起始时间恢复初始值
         this.bigBodyStart=1;
     }


     //将鼠标x赋值大鱼x,将鼠标y赋值大鱼y;
     //大鱼面向鼠标慢慢的游过去
     this.x=lerpDistance(mx,this.x,0.96);
     this.y=lerpDistance(my,this.y,0.94);
     //调整大鱼游动角度》面向鼠标
     //（1）计算大鱼与鼠标的坐标差
     var deltaY=my-this.y;
     var deltaX=mx-this.x;
     //（2）计算角度差
     var beta=Math.atan2(deltaY,deltaX)+Math.PI;
     //（3）由角度差计算大鱼新角度
     this.angle=lerpAngle(beta,this.angle,0.9);
     //3.1.保存画笔状态
     ctx1.save();
     //3.2.平移原点
     ctx1.translate(this.x,this.y);
     //3.3.设置大鱼选择角度
     ctx1.rotate(this.angle);

     //3.4.绘制大鱼身体
     ctx1.drawImage(this.bigBody[this.bigBodyIndex],
         -this.bigBody[this.bigBodyIndex].width*0.5,
         -this.bigBody[this.bigBodyIndex].height*0.5
     );
     //3.5.绘制大鱼尾巴
    ctx1.drawImage(this.bigTail[this.bigTailIndex],
        -this.bigTail[this.bigTailIndex].width*0.5+30,
        -this.bigTail[this.bigTailIndex].height*0.5
    );
     //3.6.绘制大鱼眼睛
     ctx1.drawImage(this.bigEye[this.bigEyeIndex],-this.bigEye[this.bigEyeIndex].width*0.5,-this.bigEye[this.bigEyeIndex].height*0.5);
     //3.7.恢复画笔状态
     ctx1.restore();

 };
//4.将mon.js 添加到index.html
//5.在main.js中创建对象并且调用相应方法
//6.
