/**
 * 主要功能：
 * 实现网页动态的添加div标签
 */
define(function(require,exports,module){
/**
 * topBar顶部的信息
 * @type {Array}
 */
	//需要jquery的文件
	 let cell = require('cell.js');
	 let topUI = require("topCommon.js");
	
/**
 * 也是可以改进成为面向对象的思想
 * 文字信息类的内容
 * @return {[type]} [description]
 */
	function createUI(){
		topUI.topUI();
		
/**
 * home的信息
 * 轮播图
 * 产品
 */


/**
 * home的导航栏的标签元素的创建
 */
	
      
	for(let i = 0;i<10;i++){
		$("#slide-nav").append("<li><a>  <i></i>  </a></li>");	
	}
	
	

/**
 * 页面的主要内容
 * 其中分为9大部分的内容
 */
	 //9个部分的标题的处理
	 		let titleArr = ["小米明星单品","家电","智能","搭配","配件","周边","为你推荐","热评产品","内容","视频"]; 

/**
 * 循环所有区域添加了标题
 */
	
	//第一块区域：明星单品
			$(".page-main div").eq(0).append("<header></header>");
			$(".page-main header").eq(0).text( titleArr[0]);		
	//剩下所有的区域标题
		for(let i = 1 ; i < 10 ;i++ ){
			$(".page-main div").eq(i).append("<header></header>");
			$(".page-main header").eq(i).text( titleArr[i]);
		}


	//循环的添加了产品的详细区域
	//从小米明星单品到视频所有的区域
		for(let i = 0; i < titleArr.length;i++ ){
			let $headers = $(".page-main header").eq(i).after("<div></div>");
			//这步操作是所有标题的兄弟 产品区域allProducts
			$headers.siblings().attr('class','allProducts');
			$headers.siblings().css({
				"height":"100%"
			});
		}
/**
 * 在家电开始到周边区域需要分为左右两部分
 * @param  {[type]} let i             [description]
 * @return {[type]}     [description]
 */
	for(let i =1 ;i<titleArr.length-4;i++){
			$(".allProducts").eq(i).append("<div></div><div></div>")
			$(".allProducts").eq(i).children().eq(0).attr("class","left");
			$(".allProducts").eq(i).children().eq(1).attr("class","right");
		}


/**
 * 热评产品(需要单独处理)
 */
	
	
		


/**
 * 页面底部的内容
 */		
						
}

	
/**
 * 初始化穿件标签元素，包含我的小盒子cell类的调用
 * 自己定义的类文件cell.js
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
	exports.cell = function(obj){
		cell.cell(obj);
	};
/**
 * 对外开放自己动态创建页面的标签元素
 * @type {[type]}
 */
	exports.UI = createUI;
	
	
	
	

	
});