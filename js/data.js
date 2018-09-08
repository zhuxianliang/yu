/**
 * Created by web-01 on 2018/7/31.
 */
//保存分数数据与行为
//1.创建分数类dataObj
var dataObj=function(){
    this.score=0;    //分数
    this.gameOver=false;         //游戏是否结束
    this.alppha=0;              //透明度
    this.double=1;             //吃到双倍分数
    this.fruitNum=0;           //大鱼吃到食物数量
}
//2.为分数类添加绘制方法
dataObj.prototype.draw=function(){
    //1.保存画笔状态
    ctx1.save();
    ctx1.fillStyle="#fff";
    ctx1.font="35px Verdannar";
    ctx1.textAlign="center";             //s=水平对齐方法
    //5.绘制分数
    ctx1.fillText("SCORE："+this.score,canWidth*0.5,canHeight-80)
    //9.恢复画笔状态
    ctx1.restore();

}
//3.将data.js添加index.html
//4.在main.js 创建对象并调用相应方法
//5.为分数类添加方法addScore
dataObj.prototype.addScore=function(i){
    //1.判断食物类型如果橙色 double=2;
    if(fruit.fruitType[i]=="orange"){
        this.double=2;
    }
    //2.计算分数
    this.score+=this.double*100;
    //3.将double 恢复为1
    this.double=1;
    //4.大鱼吃到食物数量++
    this.fruitNum++;


}