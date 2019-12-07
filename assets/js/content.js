(function(){
	const newUrl = 'https://www.youpak.com/embed?v=';
	let url = location.href;
	let _params = {};
	
	function setUrlParams(){
		url = url.substr(url.indexOf('?')+1);
		url.split('&').forEach((item)=>{
			let a = item.split('=');
			if(a.length==2) _params[ a[0] ] = (!isNaN(a[1]) ? Number(a[1]) : a[1]);
			else if(a.length==1) _params[ a[0] ] = null;
		});
	}
	
	if(url.indexOf('.youtube.')==-1){
		console.error('This is not a youtube page');
		return false;
	}
	
	setUrlParams();
	
	if(_params.v==null){
		console.error('This is not a video page');
		return false;
	}
	
	try{
		let player = document.querySelectorAll("#player")[1];
		player.innerHTML = '<iframe width="'+player.offsetWidth+'" height="'+player.offsetHeight+'" src="'+newUrl+_params.v+'" frameborder="0" allowfullscreen></iframe>';
	}catch(e){
		console.error(e);
	}

})();