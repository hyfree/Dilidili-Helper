/*
		document.getElementById("AdKill").onclick = function() {
			if (this.className == "inner-on") {
				this.style.left = -51 + "px";
				this.childNodes[1].checked = false;
				this.className = "inner-off";
			}else{
				this.style.left = 0;
				this.childNodes[1].checked = true;
				this.className = "inner-on";
			}
        }
        */
document.getElementById("AdKill").onclick = function() {
    ctlButton(this,false);
}
//控制滑动按钮的关闭
function  ctlButton(button,letOpen){
    if(letOpen){
        if (button.className == "inner-on") {
          //do something

        }else{
            button.style.left = 0;
            button.childNodes[1].checked = true;
            button.className = "inner-on";
        }
    }else{
        if (button.className == "inner-on") {
            button.style.left = -51 + "px";
            button.childNodes[1].checked = false;
            button.className = "inner-off";
        }else{
         //do something

        }
    }

}