//1.创建食物类 fruitObj
var fruitObj=function(){
    this.alive=[];    //数组保存食物状态true；false
    this.orange=new Image();     //橙色图片  200 少
    this.blue=new Image();       //蓝色图片  100 多
    this.x=[];   //食物位置【x】
    this.y=[];   //食物位置【y】
    this.l=[];   //食物宽度（由小变大） 0~14
    this.spd=[];  //食物速度（生长，漂浮）
    this.fruitType=[];  //食物类型（"orange","blue"）
};
// 2.为食物类添加属性数量
fruitObj.prototype.num=30;
//3.为食物类添加方法init
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;  //测试所有食物都活动
        this.x[i]=0;
        this.y[i]=0;
        this.l[i]=0;
        this.spd[i]=Math.random()*0.7+0.03;
        this.fruitType[i]="";
    }
    this.blue.src="src/blue.png";
    this.orange.src="src/fruit.png";
};
//4.为食物类添加方法draw
fruitObj.prototype.draw=function(){
    //创建循环
    for(var i=0;i<this.num;i++){
    //判断当前食物是否活动状态 是
        if(this.alive[i]){
            //判断当前食物宽度是否小于14 由小变大
            //当前食物宽度增加spd
            if(this.l[i]<14){
                this.l[i]+=this.spd[i];
            }
            //如果当前食物宽度大于14 向上漂浮
            else if(this.l[i]>14){
                this.y[i]-=this.spd[i];
            }
            //当前食物类型 blue orange  选择绘制图片
            if(this.fruitType[i]=="blue"){
                var pic=this.blue;
            }else{
                var pic=this.orange;
            }
            //绘制图片
            ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
            //8 漂浮出画布状态改变false
            if(this.y[i]<10){
                this.alive[i]=false;
            }
        }


    }
};
//5.创建函数监控画布上食物个数 如果不够15活动食物出生
function fuitMonotor(){
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){ num++;}
    }
    if(num<15){
        sendFruit();    //挑选一个不活动的食物
        return;
    }
}
//6.在所有食物中挑选第一个不活动食物
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            //出生
            fruit.born(i);
            return
        }
    }
}
//7.出生
fruitObj.prototype.born=function(i){
     //7.1随机找到海葵下标
    var aneId=Math.floor(Math.random()*ane.num);
    //7.2获取海葵x 赋值当前食物x
    this.x[i]=ane.x[aneId];
    //7.3计算海葵高度赋值当前食物y
    this.y[i]=canHeight-ane.len[aneId];
    //7.4当前食物状态true
    this.alive[i]=true;
    //7.5选一个颜色
    this.fruitType[i]=Math.random()<0.9?"blue":"orange";
    //7.6每次出生宽度为0；
    this.l[i]=0;
}
//8.如果食物漂浮出画布或被大鱼吃掉状态改变为不活动
fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
    //return;
}
//9.