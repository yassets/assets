/*
 * @Author: your name
 * @Date: 2021-07-16 21:56:09
 * @LastEditTime: 2021-07-16 22:02:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \LP1\股東合夥創業沒商量？合夥人創業，合夥人開個股東，你來嗎？【貨到付款，全國包郵】_files\global.js
 */
define(['jquery'], function($) {

	// 视频缩略图
	if($(".edui-upload-video").length > 0) {
		$(".edui-upload-video").attr("poster", "/public/image/videoPlay.jpg");
		$(".edui-upload-video").click(function() {
			$(this).get(0).play();
		});
	}

});