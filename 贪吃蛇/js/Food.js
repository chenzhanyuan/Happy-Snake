(function(){
	var Food = window.Food = function (){
		while(true){
			this.row = _.random(0,14);
			this.col = _.random(0,14);
			for (var i = 0; i < game.snake.body.length; i++) {
				if(game.snake.body[i].row == this.row && game.snake.body[i].col == this.col){
					break;
				}
			};
			if( i == game.snake.body.length){
				break;
			}
		}
		game.inner(this.row,this.col,"❤");
	}
	Food.prototype.isEat = function(){
		if(game.snake.body[0].row == this.row && game.snake.body[0].col == this.col){
			return true;
		}
	}
})();