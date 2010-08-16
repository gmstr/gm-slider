(function($){
	$.extend($.fn.gmslider.transitions,{
		stripeFade: function (image, options, callback) {			
			var w = options.elementWidth;
			var h = options.height;
			var parent = image.parent();
			var arr = new Array(), i = 0, j = 0, index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 0
				}
			}).addClass(options.tempClassName);

			while (i < options.width)
			{
				arr[index] = block.clone().css({left:i, backgroundPosition: -i +'px 0px'});
				parent.append(arr[index++]);
				i = i + w;
			}
			
			i = 0;

			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].stop( true, true ).animate({
							opacity: 1
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		stripealternate: function(image, options, callback) {		
			var w = options.elementWidth;
			var h = options.height;
			var parent = image.parent();
			var arr = new Array(), i = 0,  j = 0, index = 0;
			
			var src = image.attr("src");
			var block = $("<div />",{
				css:{
					position:"absolute",
					width:w,
					height:h,
					'background-image':'url('+src+')',
					zIndex:99,
					display:'block',
					opacity:0					
				}
			}).addClass(options.tempClassName);
	
			var css;
	
			while(i<options.width)
			{
								
				if(index%2==0)
					css ={left:i,top:j ,backgroundPosition:-i+"px 0px",marginTop: -h};
				else
					css ={left:i,top:j ,backgroundPosition:-i+"px 0px" ,marginTop: h};
	
				arr[index] = block.clone().css(css);
				parent.append(arr[index++]);
					
				
				i = i + w;
			}
			
			i=0;
			
			setTimeout(function(){						
					timer = setInterval(function(){							
						if(i>=arr.length)
						{
							callback(image, timer);
							return;
						}
						arr[i++].stop( true, true ).animate({
							opacity:1,
							marginTop:0
						}, {
							duration: options.componentduration, 
							easing:'easeOutBack'
						});							
					},options.transitionspeed/arr.length);
				},1000);		
		},
		stripealternaterandom: function(image, options, callback) {		
			var w = options.elementWidth;
			var h = options.height;
			var parent = image.parent();
			var arr = new Array(), i = 0,  j = 0, index = 0;
			
			var src = image.attr("src");
			var block = $("<div />",{
				css:{
					position:"absolute",
					width:w,
					height:h,
					'background-image':'url('+src+')',
					zIndex:99,
					display:'block',
					opacity:0					
				}
			}).addClass(options.tempClassName);
	
			var css;
	
			while(i<options.width)
			{
								
				if(index%2==0)
					css ={left:i,top:j ,backgroundPosition:-i+"px 0px",marginTop: -h};
				else
					css ={left:i,top:j ,backgroundPosition:-i+"px 0px" ,marginTop: h};
	
				arr[index] = block.clone().css(css);
				parent.append(arr[index++]);
					
				
				i = i + w;
			}
			
			i=0;
						
			random_no = random_array(arr.length);
			
			setTimeout(function(){						
					timer = setInterval(function(){							
						if(i>=arr.length)
						{
							callback(image, timer);
							return;
						}
						arr[random_no[i++]].stop( true, true ).animate({
							opacity:1,
							marginTop:0
						}, {
							duration: options.componentduration, 
							easing:'easeOutBack'
						});							
					},options.transitionspeed/arr.length);
				},1000);		
		},
		stripehalfalternate: function(image, options, callback) {		
			var w = options.elementWidth;
			var h = options.height;
			var parent = image.parent();
			var arr = new Array(), i = 0,  j = 0, index = 0;
			
			var src = image.attr("src");
			var block = $("<div />",{
				css:{
					position:"absolute",
					width:w,
					height:h/2,
					'background-image':'url('+src+')',
					zIndex:99,
					display:'block',
					opacity:0					
				}
			}).addClass(options.tempClassName);
	
			var css;
	
			while(i<options.width)
			{
				j=0;
				while(j<h)
				{				
					if(j==0)
						css ={left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: -(h/2)};
					else
						css ={left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: h};
		
					arr[index] = block.clone().css(css);
					parent.append(arr[index++]);
					j = j + h/2;
				}
			i = i + w;
			}
			
			i=0;
			
			setTimeout(function(){						
					timer = setInterval(function(){							
						if(i>=arr.length)
						{
							callback(image, timer);
							return;
						}
						arr[i++].stop( true, true ).animate({
							opacity:1,
							marginTop:0
						}, {
							duration: options.componentduration, 
							easing:'easeOutBack'
						});							
					},options.transitionspeed/arr.length);
				},1000);		
		},
		stripehalfalternaterandom: function(image, options, callback) {		
			var w = options.elementWidth;
			var h = options.height;
			var parent = image.parent();
			var arr = new Array(), i = 0,  j = 0, index = 0;
			
			var src = image.attr("src");
			var block = $("<div />",{
				css:{
					position:"absolute",
					width:w,
					height:h/2,
					'background-image':'url('+src+')',
					zIndex:99,
					display:'block',
					opacity:0					
				}
			}).addClass(options.tempClassName);
	
			var css;
	
			while(i<options.width)
			{
				j=0;
				while(j<h)
				{				
					if(j==0)
						css ={left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: -(h/2)};
					else
						css ={left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: h};
		
					arr[index] = block.clone().css(css);
					parent.append(arr[index++]);
					j = j + h/2;
				}
			i = i + w;
			}
			
			i=0;
			
			random_no = random_array(arr.length);
			
			setTimeout(function(){						
					timer = setInterval(function(){							
						if(i>=arr.length)
						{
							callback(image, timer);
							return;
						}
						arr[random_no[i++]].stop( true, true ).animate({
							opacity:1,
							marginTop:0
						}, {
							duration: options.componentduration, 
							easing:'easeOutBack'
						});							
					},options.transitionspeed/arr.length);
				},1000);		
		},
		stripetopthenbottom: function(image, options, callback) {		
			var w = options.elementWidth;
			var h = options.height;
			var parent = image.parent();
			var arr = new Array(), i = 0,  j = 0, index = 0;
			
			var src = image.attr("src");
			var block = $("<div />",{
				css:{
					position:"absolute",
					width:w,
					height:h/2,
					'background-image':'url('+src+')',
					zIndex:99,
					display:'block',
					opacity:0					
				}
			}).addClass(options.tempClassName);
	
			var css;
	
			j = 0;
			while ( j < h )
			{	
				i = 0;
				while ( i < options.width )
				{
					if ( j == 0 )
						css ={left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: -(h/2)};
					else
						css ={left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: h};
						
					arr[index] = block.clone().css(css);
					parent.append(arr[index++]);
					i = i + w;					
				}
				j = j + h/2;
			}
			
			i = 0;
			
			setTimeout(function(){						
					timer = setInterval(function(){							
						if(i>=arr.length)
						{
							callback(image, timer);
							return;
						}
						arr[i++].stop(true,true).animate({
							opacity:1,
							marginTop:0
						}, {
							duration: options.componentduration, 
							easing:'easeOutBack'
						});
					}, options.transitionspeed/arr.length);
				}, 1000);		
		},
		stripetopthenbottomreversed: function(image, options, callback) {		
			var w = options.elementWidth;
			var h = options.height;
			var parent = image.parent();
			var arr = new Array(), i = 0,  j = 0, index = 0;
			
			var src = image.attr("src");
			var block = $("<div />",{
				css:{
					position:"absolute",
					width:w,
					height:h/2,
					'background-image':'url('+src+')',
					zIndex:99,
					display:'block',
					opacity:0					
				}
			}).addClass(options.tempClassName);
	
			var css;
	
			j = 0;
			while ( j < h )
			{	
				i = 0;
				while( i < options.width )
				{
					if( j == 0 )
						css = {left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: -(h/2)};
					else
						css = {left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: h};		
					arr[index] = block.clone().css(css);
					parent.append(arr[index++]);
					i = i + w;					
				}
				j = j + h/2;
			}
			
			
			var halfArrayLength = arr.length / 2;
			
			var newArray = new Array();
			for (i = 0; i < halfArrayLength; i++) {
				newArray.push(arr[i]);
			}
			for (i = 1; i <= halfArrayLength; i++) {
				newArray.push(arr[arr.length - i]);
			}
			i = 0;
			setTimeout(function(){						
					timer = setInterval(function(){							
						if(i>=newArray.length)
						{
							callback(image, timer);
							return;
						}
						newArray[i++].stop(true,true).animate({
							opacity:1,
							marginTop:0
						}, {
							duration: options.componentduration, 
							easing:'easeOutBack'
						});
					}, options.transitionspeed / newArray.length);
				},1000);		
		},
		slideinfromtheside: function(image, options, callback) {		
			var w = options.elementWidth;
			var h = options.height;
			var parent = image.parent();
			var arr = new Array(), i = 0,  j = 0, index = 0;
			
			var src = image.attr("src");
			var block = $("<div />",{
				css:{
					position:"absolute",
					width:w,
					height:h,
					'background-image':'url('+src+')',
					zIndex:99,
					display:'block',
					opacity:0					
				}
			}).addClass(options.tempClassName);
	
			var css;
	
			while (i < options.width)
			{
				arr[index] = block.clone().css({left:i, marginLeft: i < (options.width / 2) ? -i : options.width - i,  backgroundPosition: -i +'px 0px'});
				parent.append(arr[index++]);
				i = i + w;
			}
			
			var newArray = new Array();
			for (i = 0; i < arr.length; i++) {
				if( i % 2 === 0)
					newArray.push(arr[i/2]);
				else {
					var newIndex = arr.length - (Math.floor(i/2)+1);
					newArray.push(arr[newIndex]);
				}
			}
			
			i = 0;
			setTimeout(function(){						
					timer = setInterval(function(){							
						if(i>=newArray.length)
						{
							callback(image, timer);
							return;
						}
						newArray[i++].stop(true,true).animate({
							opacity:1,
							marginLeft:0
						}, {
							duration: options.componentduration, 
							easing:'easeOutSine'
						});
					}, options.transitionspeed / newArray.length);
				},1000);		
		},
		cubeoutcenter: function(image, options, callback) {				
			var w = Math.floor(options.elementWidth);
			var h = Math.floor(options.elementHeight);
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: 0,
					height: 0,
					marginTop: h/2,
					marginLeft: w/2,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'none'
				}
			}).addClass(options.tempClassName);

			while (i < options.width)
			{
				j = 0;
				
				while(j < options.height)
				{
					arr[index] = block.clone().css({left: i, top: j, backgroundPosition:-i+'px ' + -j + 'px'});
					parent.append(arr[index++]);
					j = j + h;
				}
				i = i + w;
			}
			
			i = 0;

			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							height: h,
							width: w,
							marginTop: 0,
							marginLeft: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		cubesidegrow: function (image, options, callback) {
			var w = Math.floor(options.elementWidth);
			var h = Math.floor(options.elementHeight);
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: 0,
					height: 0,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'none'
				}
			}).addClass(options.tempClassName);

			while (i < options.width)
			{
				j = 0;
				while(j < options.height)
				{
					arr[index] = block.clone().css({left: i, top: j, backgroundPosition:-i+'px ' + -j + 'px'});
					parent.append(arr[index++]);
					j = j + h;
				}
				i = i + w;
			}
			
			i = 0;

			random_no = random_array(arr.length); // array of random numbers

			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[random_no[i++]].animate({
							height: h,
							width: w,
							opacity: 1
						}, {
							duration: options.componentduration,
							easing: 'easeOutCubic'
						});
				}, options.transitionspeed/arr.length);
		},
		cubegrow: function (image, options, callback) {
			var w = Math.floor(options.elementWidth);
			var h = Math.floor(options.elementHeight);
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: 0,
					height: 0,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'none'
				}
			}).addClass(options.tempClassName);

			while (i < options.width)
			{
				j = 0;
				while(j < options.height)
				{
					arr[index] = block.clone().css({left: i, top: j, backgroundPosition:-i+'px ' + -j + 'px'});
					parent.append(arr[index++]);
					j = j + h;
				}
				i = i + w;
			}
			
			i = 0;

			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							height: h,
							width: w
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		stripefadehorizontal: function (image, options, callback) {
			var w = options.width;
			var h = Math.floor(options.elementHeight);

			

			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 0
				}
			}).addClass(options.tempClassName);

			while (i < options.height)
			{
				arr[index] = block.clone().css({left:0, top: i, backgroundPosition: '0px '+ -i +'px'});
				parent.append(arr[index++]);
				i = i + h;
			}
			
			i = 0;

			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							opacity: 1
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		fade: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 0
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							opacity: 1
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		slidedown: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 1,
					marginTop: -h
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							marginTop: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		slideup: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 1,
					marginTop: h
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							marginTop: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		slideleft: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 1,
					marginLeft: -w
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							marginLeft: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		slideright: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 1,
					marginLeft: w
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							marginLeft: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		slidetopleft: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 1,
					marginLeft: -w,
					marginTop: -h
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							marginLeft: 0,
							marginTop: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		slidebottomleft: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 1,
					marginLeft: -w,
					marginTop: h
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							marginLeft: 0,
							marginTop: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		slidebottomright: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 1,
					marginLeft: w,
					marginTop: h
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							marginLeft: 0,
							marginTop: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		},
		slidetopright: function (image, options, callback) {
			var w = options.width;
			var h = options.height;
			
			var parent = image.parent();
			var arr = new Array(); var i = 0; var j = 0; var index = 0;
			var src = image.attr('src');
			
			var block = $('<div />', {
				css:{
					position: 'absolute',
					width: w,
					height: h,
					'background-image': 'url('+src+')',
					zIndex: 99,
					display: 'block',
					opacity: 1,
					marginLeft: w,
					marginTop: -h
				}
			}).addClass(options.tempClassName);
			
			arr[0] = block;
			parent.append(arr[0]);
			
			timer = setInterval(function()
				{
					if (i >= arr.length)
					{
						callback(image, timer);
						return;
					}
					arr[i++].animate({
							marginLeft: 0,
							marginTop: 0
						}, {
							duration: options.componentduration,
							easing: 'easeOutSine'
						});
				}, options.transitionspeed/arr.length);
		}
		
	});
}(jQuery));
function random_array(maxn)
{
	var array = new Array();
	var temp, i, flag = true;
	var index = 0;
	while (index < maxn)
	{
		flag = true;
		temp = Math.floor(Math.random() * maxn);
		for (i = 0; i < array.length; i++)
		{
			if (temp == array[i])
			{
				flag = false;
				break;
			}
		}
		if (flag == true)
		{
			array[index++] = temp;
		}
	}
	return array;
}
