(function(){
	var Game = window.Game = function(){
		//表格结构
		this.table = null;
		this.snake = new Snake();
		this.food = null;
		//游戏初始化
		this.init();
		this.timer;
		this.start();
		this.bindEvent();
	}
	//游戏初始化
	Game.prototype.init = function(){
		this.table = document.createElement("table");
		for (var i = 0; i < 15; i++) {
			var tr = document.createElement("tr");
			for(var k = 0;k < 15;k++){
				var td = document.createElement("td");
				tr.appendChild(td);
			}
			this.table.appendChild(tr);
	    }
	    document.body.appendChild(this.table);
	}
	Game.prototype.changeColor = function(row,col,color){
		document.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.backgroundColor = color;
	}
	Game.prototype.clear = function(row,col,color){
		for (var i = 0; i < 15; i++) {
			for(var k = 0;k < 15; k++){
				this.changeColor(i,k,"");
			}
		};
	}
	Game.prototype.bindEvent = function(){
		var self = this;
		document.onkeydown = function(){

			switch(event.keyCode){
				 case 37:
               self.snake.changeDirection("L");
                break;
               case 38:
               self.snake.changeDirection("U");
                break;
               case 39:
                self.snake.changeDirection("R");
                break;
               case 40:
               self.snake.changeDirection("D");
                break; 
			}
		}
	}
	Game.prototype.inner = function(row,col,content){
		this.table.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = content;
	}
	Game.prototype.start = function(){
		var self = this;
		this.timer = setInterval(function(){
			if (self.food==null) {
             self.food = new Food();
         }
			self.clear();
			
			self.snake.update();
			if(self.snake.isOver()){
				clearInterval(self.timer);
			}else{
				self.snake.render();
			}
			
		},300);
	}
})();