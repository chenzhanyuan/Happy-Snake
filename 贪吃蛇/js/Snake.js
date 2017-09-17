(function(){
	var Snake = window.Snake = function(){
		this.body = [
			{row:5,col:5},
			{row:5,col:6},
			{row:5,col:7},
			{row:5,col:8},
			{row:5,col:9}
		];
		this.direction = "L";
		this.oldDirection = "L";
	}
	Snake.prototype.render = function(){
		for(var i = 0; i < this.body.length;i++){
			game.changeColor(this.body[i].row,this.body[i].col,"skyblue");
		}
	}
	Snake.prototype.changeDirection = function(direction){
		this.direction = direction;
	}
	Snake.prototype.update = function(){
		if(
			this.direction == "L"&& this.oldDirection == "R"||
			this.direction == "R"&& this.oldDirection == "L"||
			this.direction == "U"&& this.oldDirection == "D"||
			this.direction == "D"&& this.oldDirection == "U"
			){
			this.direction = this.oldDirection;
		}
		this.oldDirection = this.direction;
		switch(this.direction){
			case "L":
			var head = {row:this.body[0].row,col:this.body[0].col - 1};
			break;
			case "U":
			var head = {row:this.body[0].row - 1,col:this.body[0].col};
			break;
			case "R":
			var head = {row:this.body[0].row,col:this.body[0].col + 1};
			break;
			case "D":
			var head = {row:this.body[0].row + 1,col:this.body[0].col};
			break;
		}
		console.log(head.row);
		if(head.row < 0){
			head.row = 14;
		}else if(head.row > 14){
			head.row = 0;
		
		}else if(head.col < 0){
			head.col = 14;
		}else if(head.col > 14){
			head.col = 0;
		}
		this.body.unshift(head);
		if(game.food.isEat()){
			game.inner(game.food.row,game.food.col,"");
			game.food = null;
		}else{
			this.body.pop();
		}
		
	}
	//判断死法
	Snake.prototype.isOver = function(){
		for (var i = 1; i < this.body.length; i++) {
			if(this.body[0].row == this.body[i].row && this.body[0].col == this.body[i].col){
				return true;
			}
		};

	}
})();