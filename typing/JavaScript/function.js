		function onload() {
			var btn1=document.getElementById("btn1").onclick();
		}
		function test() {
			initPage();
		}
		var ms = 1000;
		var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var score = 0;
		function initPage() {
			//生成26个英文字母
			generateChar();
			//让字母进行下落
			downChar();
		}
		window.onkeyup = function () {
			//获取显示区域
			var div = document.getElementById("showDiv");
			//获取用户按下的键值
			var eve = window.event||event;
			var code = eve.keyCode;
			//获取显示区域创建出来的按钮
			var btns = div.childNodes;
			for (var i = 0; i <btns.length; i++) {
				//获取某一个按钮节点
				var btn =btns[i];
				if (btn.nodeType==1) {
					//判断用户按下的键值 和按钮的值是否一致
					if (btn.value == chars[code-65]) {
						div.removeChild(btn);
						score +=10;
						document.getElementById("spanScore").innerHTML = score;
						//进行分数判断
						if (score==800) {alert("Game Over");
					}
					}
				}
			}
			

		}

function generateChar() {
		var div = document.getElementById("showDiv");
		window.setInterval(function () {
			var random=Math.ceil(Math.random()*3);
			var btn = document.createElement("input");
			btn.type="button";
			btn.value = chars[parseInt(Math.random()*26)];
			btn.className = "btn";
			btn.style.top = "60px";
			btn.style.left=parseInt(Math.random()*760)+"px";
			btn.style.background="url(images/"+random+".png)no-repeat";
			btn.style.backgroundSize="40px 40px";
			div.appendChild(btn);

		},ms);
}
function downChar() {
		var div = document.getElementById("showDiv");
		window.setInterval(function () {
			var btns = div.childNodes;
			for (var i = 0; i <btns.length; i++) {
				//获取某一个按钮节点
				var btn =btns[i];
				if (btn.nodeType==1) {
					var top =parseInt(btn.style.top);
					if (top<412) {
						btn.style.top=top+40+"px";
					}else{
						div.removeChild(btn);
						score -=10;
						document.getElementById("spanScore").innerHTML = score;
					}
				}
			}
				

		},ms);
}