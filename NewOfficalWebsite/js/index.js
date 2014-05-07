$(document).ready(function() {
	$("#layerslider-poster").layerSlider({
		responsive: false,
		skin: 'noskin',
		hoverPrevNext: false,
		skinsPath: '../layerslider/skins/'
	});
	$("#layerslider-app").layerSlider({
		globalBGImage: 'img/img_iphone.png',
		responsive: false,
		skin: 'noskin',
		hoverPrevNext: false,
		showCircleTimer: false,
		skinsPath: '../layerslider/skins/'
	});
	$("#layerslider-screen").layerSlider({
		globalBGImage: 'img/img_tv.png',
		responsive: false,
		skin: 'noskin',
		hoverPrevNext: false,
		showCircleTimer: false,
		skinsPath: '../layerslider/skins/'
	});
	
});
