class Game{
    constructor(){

    }
    getState(){
        var gameStatereft=database.ref("gameState")
        gameStatereft.on("value",function(data){
            gameState=data.val()
        })


    }
    update(State){
        database.ref("/").update({
            gameState:State
        })
        }
        start(){
            if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
            }
        }
}