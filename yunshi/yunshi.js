var d1 = new Date();
var d2 = new Date(d1.getFullYear(), d1.getMonth(), d1.getUTCDate(), 23, 59, 59, 999);

function ran(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
function gc(name){ // Get Cookies
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg)){
		return arr[2];
	}
	else{
		return null;
	} 
}
function gt(){ // Get some text
	var ys = ["大吉", "中吉", "小吉", "中平", "小凶", "凶", "大凶"],
	j = ["诸事皆不宜", ["上课","全部消化"], ["写作业","一定是全对"], ["考试","全班第一的高分"], ["睡觉","养精蓄锐明天再战"], ["刷题","成为卷王"], ["放松","快乐一下"], ["发朋友圈","被夸"]],
	x = ["诸事皆宜", ["上课","容易睡着"], ["写作业","要写不完啦"], ["考试","作弊会被抓"], ["睡觉","孤灯挑尽未成眠"], ["刷题","原来我这么菜"], ["放松","被催着刷题"], ["发朋友圈","被误解"]];
	var x1, x2, y1, y2, z;
	z = ran(0, 6);
	x1 = ran(1, j.length-1);
	x2 = ran(1, j.length-1);
	y1 = ran(1, x.length-1);
	y2 = ran(1, x.length-1);
	
	while(x1 == x2 || y1 == y2 || x1 == y1 || x1 == y2 || x2 == y1 || x2 == y2){
		x1 = ran(1, j.length-1);
		x2 = ran(1, j.length-1);
		y1 = ran(1, x.length-1);
		y2 = ran(1, x.length-1);
	}
	
	if(gc("hasDrawnLots") == "true"){
		z=gc("ys"),x1=gc("x1"),x2=gc("x2"),y1=gc("y1"),y2=gc("y2");
	}
	document.getElementById("ys").innerText = ys[z];
	if(z == 0){
		document.getElementById("y1").innerText = x[0];
		document.getElementById("x1").innerText = j[x1][0];
		document.getElementById("x2").innerText = j[x2][0];
		document.getElementById("x1-ct").innerText = j[x1][1];
		document.getElementById("x2-ct").innerText = j[x2][1];
		return;
	}
	if(z == 3){
		document.getElementById("ys-title").style.color = "rgb(94,185,94)";
	}
	if(z == 4 || z == 5 || z == 6){
		document.getElementById("ys-title").style.color = "rgb(63,63,63)";
	}
	if(z == 6){
		document.getElementById("x1").innerText = j[0];
		document.getElementById("y1").innerText = x[y1][0];
		document.getElementById("y2").innerText = x[y2][0];
		document.getElementById("y1-ct").innerText = x[y1][1];
		document.getElementById("y2-ct").innerText = x[y2][1];
		return;
	}
	document.getElementById("x1").innerText = j[x1][0];
	document.getElementById("x2").innerText = j[x2][0];
	document.getElementById("y1").innerText = x[y1][0];
	document.getElementById("y2").innerText = x[y2][0];
	document.getElementById("x1-ct").innerText = j[x1][1];
	document.getElementById("x2-ct").innerText = j[x2][1];
	document.getElementById("y1-ct").innerText = x[y1][1];
	document.getElementById("y2-ct").innerText = x[y2][1];
	
	document.cookie = "ys="+z+";expires=" + d2.toUTCString();
	document.cookie = "x1="+x1+";expires=" + d2.toUTCString();
	document.cookie = "x2="+x2+";expires=" + d2.toUTCString();
	document.cookie = "y1="+y1+";expires=" + d2.toUTCString();
	document.cookie = "y2="+y2+";expires=" + d2.toUTCString();
	return;
}

gt();
document.cookie = "hasDrawnLots=true;expires=" + d2.toUTCString();