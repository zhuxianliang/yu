/**
 * Created by web-01 on 2018/7/26.
 */
//collision.js 碰撞检测
//1.大鱼碰撞食物
function momFruitsCollison(){
    //1.1创建循环获取所有食物
    for(var i=0;i<fruit.num;i++){
        //1.2当前食物是活动
        if(fruit.alive[i]){
            //1.3计算大鱼和当前食物距离 30像素
            var l=calLength2(fruit.x[i],fruit.y[i],mon.x,mon.y);
            //1.4当前食物状态 false
            if(l<900){
                fruit.dead(i);
                data.addScore(i);
            }
        }

    }


}
//2.大鱼碰撞小鱼(吃饱)
function momBabyCollsion(){


    //3.获取大鱼和小鱼之间距离
    var l=calLength2(mon.x,mon.y,baby.x,baby.y);
    //4.如果距离小于900像素
    if(l<900){
        //大鱼是否吃到食物，没有就停止执行
        if(data.fruitNum==0){
            return;
        }

        //5.小鱼身体小标为0
        baby.babyBodyIndex=0;
        //6.大鱼为小鱼后，吃掉食物的数量清空
        data.fruitNum=0;
    }

}
