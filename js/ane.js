//1.创建海葵类 aneObj
var aneObj=function(){
    this.x=[];   //每个海葵x的位置
    this.len=[];   //每个海葵len的高度
};
//2.为海葵类添加属性 num 50
aneObj.prototype.num=50;     //将属性添加在原型中
//3.为海葵类添加初始化方法 init(
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        //每个海葵生长位置随机，比较自然生长
        this.x[i]=i*16+Math.random()*20;
        //每个海葵高度，右基准高度，再加一个随机数
        this.len[i]=200+Math.random()*50;
    }
};
//4.为海葵类添加绘制方法 draw
aneObj.prototype.draw=function(){
    //4.1保存画笔状态 画布2【海葵，食物，背景】
    ctx2.save();
    ctx2.strokeStyle="gray";
    ctx2.globalAlpha=0.6;    //透明度
    ctx2.lineCap="round";   //圆角
    ctx2.lineWidth=15;
    //4.5创建循环
    for(var i=0;i<this.num;i++){
        //4.7创建新路径
        ctx2.beginPath();
        //4.8移动画布低端
        ctx2.moveTo(this.x[i],canHeight);
        //4.9画一条直线
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        //4.10描边
        ctx2.stroke();
    }
    //4.11恢复画笔状态

};
//5.将ane.js添加index.html
//6.在main.js创建海葵类对象并调用相应方法