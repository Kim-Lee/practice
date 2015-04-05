function getElementsByClassName(oParent,oClassName){
		var elems = oParent.getElementsByTagName("*");
		var arrT = [];
		for(var i=0; i<elems.length;i++){
			if(elems[i].className == oClassName ){
				arrT.push(elems[i]);
			}
		}
		return arrT;
	}
window.onload = function(){
	var oContainer = document.getElementById("container")
	var oHideLeft = getElementsByClassName(oContainer,"hide_left")[0];
	var oHideRight = getElementsByClassName(oContainer,"hide_right")[0];
	var oBtnPre = getElementsByClassName(oContainer,"btn_pre")[0];
	var oBtnNext = getElementsByClassName(oContainer,"btn_next")[0];
	var oPicSmall = getElementsByClassName(oContainer,"pic_small")[0];
	var aPicSmallList = oPicSmall.getElementsByTagName("li");
	var oPicBig = getElementsByClassName(oContainer,"pic_big")[0];
	var aPicBigList = oPicBig.getElementsByTagName("li");
	var oTxtDesc = document.getElementsByTagName("span")[0];
	var oTxtNum = document.getElementsByTagName("span")[1];
	var aDesc = ["第一张","第二张","第三张","第四张","第五张","第六张"];
	var timer = null;
	var iNum = 0;
	var i=0;
	var oZindex = 2;

	oPicSmall.style.width = aPicSmallList.length * aPicSmallList[0].offsetWidth +'px';
	oTxtNum.innerHTML = (iNum+1) +'/' + aPicSmallList.length;
	oTxtDesc.innerHTML = aDesc[iNum];
	timer =setInterval(function(){
		iNum++;
		if(iNum == aPicSmallList.length){
			iNum = 0;
		}
		tab ();
	},2000)

	oBtnPre.onmouseover = oHideLeft.onmouseover = function(){
		startMove(oBtnPre,"opacity",100);
	}
	oBtnPre.onmouseout = oHideLeft.onmouseout = function(){
		startMove(oBtnPre,"opacity",0);
	}
	oBtnNext.onmouseover = oHideRight.onmouseover = function(){
		startMove(oBtnNext,"opacity",100);
	}
	oBtnNext.onmouseout = oHideRight.onmouseout = function(){
		startMove(oBtnNext,"opacity",0);
	}
	//以上为左右按钮
	for(i=0;i<aPicSmallList.length;i++){
		aPicSmallList[i].index = i;
		aPicSmallList[i].onmouseover = function(){
			startMove(this,"opacity",100);
		}
		aPicSmallList[i].onmouseout = function(){
			if(this.index != iNum ){
			//如果此时的元素索引号为点击时的索引号，则移开效果无效。
				startMove(this,"opacity",30);
			}
		}
		aPicSmallList[i].onclick = function(){
			clearInterval(timer);
			if(this.index == iNum) return;//为什么这两句调换位子会出错
			iNum = this.index;  //为什么这两句调换位子会出错
			tab();
			setTimeout(function(){    //加个延迟定时器内包含定时器，

				timer = setInterval(function(){
				iNum++;
				if(iNum == aPicSmallList.length){
					iNum = 0;
				}
				tab ();
			},2000)

			},1000)
		}
		function tab (){
				for(i=0;i<aPicSmallList.length;i++){
					startMove(aPicSmallList[i],"opacity",30);
				}
				startMove(aPicSmallList[iNum],"opacity",100);

				aPicBigList[iNum].style.zIndex = oZindex++;
				aPicBigList[iNum].style.height = 0;
				startMove(aPicBigList[iNum],"height",oPicBig.offsetHeight);
				if(iNum == 0 || iNum == 1 || iNum == 2){
					startMove(oPicSmall,"left",0);
				}
				if(iNum == 5 || iNum == 4){
					startMove(oPicSmall,"left",-200);
				}
				if(iNum == 3){
					startMove(oPicSmall,"left",-100);
				}
				oTxtNum.innerHTML = (iNum+1) +'/' + aPicSmallList.length;
				oTxtDesc.innerHTML = aDesc[iNum];
		}
	}
	//以上为小图点击，移入移出
	oBtnPre.onclick = function(){
		iNum--;
		if(iNum == -1){
			iNum = aPicSmallList.length-1;
		}
		tab();
	}
	oBtnNext.onclick = function(){
		iNum++;
		if(iNum == aPicSmallList.length){
			iNum = 0;
		}
		tab();
	}
	//以上为点击左右键
	
}
