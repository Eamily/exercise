window.onload = function() {
	var oTop = document.getElementById("top");
	var oBott = document.getElementById("bott");
	var oTbody = document.getElementById("tbody");
	//排序
	var oRand = document.getElementById("rand");
	//搜索
	var oSee = document.getElementById("see_name");
	var oSelect = document.getElementById("select");
	//移入变色
	var oMove = document.getElementById("move");
	//添加
	var oAdd = document.getElementById("add");
	var oName = document.getElementById("name");
	var oAge = document.getElementById("age");
	//存储tr
	var oNa = oTbody.querySelectorAll("a");
	var arr = [];
	var num = 0;
	for(var i = 0; i < oNa.length; i++) {
		arr.push(oNa[i].parentNode.parentNode);
		num++;
	}
	//删除
	oTbody.onclick = function(e) {
		if(e.target.tagName == "A") {
			this.removeChild(e.target.parentNode.parentNode);
			for(var i = 0; i < arr.length; i++) {
				if(arr[i] == e.target.parentNode.parentNode) {
					arr.splice(i, 1);
				}
			}
		}
	}
	//添加
	oAdd.onclick = function() {
		var oTr = document.createElement("tr");
		if(oName.value == '' || oAge.value == '') {
			alert("必须输入姓名和年龄才能添加！")
		} else {
			oTr.innerHTML = '<td>' + (num + 1) + '</td><td>' + oName.value + '</td><td>' + oAge.value + '</td><td><a name="dele" href="#">删除</a></td>';
			oTbody.appendChild(oTr);
			arr.push(oTr);
			num++;
		}
	}
	//移入变色
	nochage();
	oMove.onclick = function() {
		if(oMove.value == "开启移入变色") {
			oMove.style.backgroundColor = "#d9534f";
			oMove.value = "关闭移入变色";
			changecolor();
		} else {
			oMove.style.backgroundColor = "#5bc0de";
			oMove.value = "开启移入变色";
			nochage();
		}
	}
	//将之前的事件移除
	function nochage() {
		oTbody.onmouseover = null;
		oTbody.onmouseout = null;
	}

	function changecolor() {
		oTbody.onmouseover = function(e) {
			if(e.target.tagName == "TD") {
				e.target.parentNode.style.backgroundColor = "#eeeeee";
			}
		}
		oTbody.onmouseout = function(e) {
			if(e.target.tagName == "TD") {
				e.target.parentNode.style.backgroundColor = "#ffffff";
			}
		}
	}
	//搜索
	oSelect.onclick = function() {
		if(oSee.value == "") {
			alert("请输入搜索姓名")
		} else {
			var know = 0;
			for(var i = 0; i < arr.length; i++) {
				if(arr[i].cells[1].innerHTML == oSee.value) {
					arr[i].style.backgroundColor = "yellow";
					know++;
				}
			}
			if(know == 0) {
				alert("不存在此人！")
			}
		}
	}
	//排序
	oRand.onclick = function() {
		var obj = arr;
		obj.sort(function(a, b) {
			var m = parseInt(a.cells[2].innerHTML);
			var n = parseInt(b.cells[2].innerHTML);
			if(isNaN(m) || isNaN(n)) {
				return 0;
			} else {
				return m - n;
			}
		})
		oTbody.innerHTML = "";
		for(var i = 0; i < obj.length; i++) {
			oTbody.appendChild(obj[i]);
		}
	}
}