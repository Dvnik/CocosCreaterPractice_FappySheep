cc.Class({
    extends: cc.Component,

    properties: {
        //-- 滚动的速度
        speed: 0,
        //-- X轴边缘
        resetX: 0
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(D.game.state !== D.GameManager.State.Run){
            return;
        }

        var x = this.node.x;
        x += this.speed * dt;
        if(x <= this.resetX){
            x -= this.resetX;
        }
        this.node.x = x;
    },
});
