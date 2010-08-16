(function($){
	$.fn.gmslider = function(options){
		var defaults = {
			transition: "stripeFade",
			delay: 4000,
			width: 600,
			height: 400,
			tempClassName: 'tempBlock',
			componentduration: 500,
			transitionspeed: 1000,
			controls: true,
			controlsConstructor: function()
			{
				var str = '<ul class="controls">';
				for (var i = 0; i < li.length; i++)
				{
					str = str + '<li>'+(i+1)+'</li>';
				}
				str = str + '</ul>';

				root.after(str);

				controls = root.parent().find('.controls li');
				controls.first().addClass('control-active');

				controls.bind({
					click: function() { setImage($(this).index()); },
					mouseover: function() { $(this).toggleClass('control-hover'); },
					mouseout: function() { $(this).toggleClass('control-hover'); }
				});			
			},
			elementWidth: 40,
			elementHeight: 40,
			callback: function(){ }			
		};
		
		var transitions = $.extend({}, $.fn.gmslider.transitions);
					
		var transitionArray = new Array();
		
		for(trans in transitions){
			transitionArray.push(transitions[trans]);
		}
		
		var options = $.extend(defaults, options);
		var root = $(this);
		var li = root.find("li");
		var images = li.find("img");

		var pos, random_no, timer, image_timer, 
				override = false,
				in_animation = false,
				controls;
				
		var current, prev;
		if(li.length > 1){
			current = li.eq(1).toggleClass('active');
			prev = li.first().addClass('reset');

			init();
		}
		var bool = true,
				first_bool = true;
			
		function init() {
			if(options.controls) { options.controlsConstructor(); }
			
			li.first().find('span').css('display', 'inline');
			current.children().hide();

			root.wrap('<div class="gm-slider" />');
			root.parent().css({
				"width": options.width, 
				"height": options.height
			});		
			image_timer = setTimeout(function() { effects(); }, options.delay); 
		}

		function setImage(index) {
			if (in_animation == true || current.index('.jw-slider ul li') == index)
				return;

			li.removeClass('reset active');

			current.find('span').fadeOut(750);

			clearTimeout(image_timer); // manual override

			if(first_bool == true)
			{
				li.first().addClass('reset');
			}
			current.addClass('reset');
			current = li.eq(index).addClass('active');
			current.children().hide();
			current.find('span').fadeIn(700);
			override = true;
			effects();
		}	

		function effects() {	
			in_animation = true;	
			if ( transitions[options.transition] != null )
				transitions[options.transition]( current.find('img'), options, endEffect );
			else {			
				var index = Math.floor(Math.random() * transitionArray.length);
				transitionArray[index]( current.find('img'), options, endEffect );
			}
		}
		function endEffect(image, timer) {	
					
			if (options.controls == true) { controls.removeClass('control-active');controls.eq(current.index('.gm-slider li')).addClass('control-active'); }
			clearInterval(timer);
			setTimeout(function()
				{
					root.find('span').slideUp(250); //fix for initialisation
					current.find('span').slideDown(250);
					image.show();
					$("."+options.tempClassName).remove(); 
					in_animation = false;
					if (!override)
						image_timer = setTimeout(function()
							{	
								switcher();
								
								effects();
							}, options.delay);
				}, options.componentduration);
		}

		function switcher() {
			prev = current.prev().length > 0 ? current.prev() : li.last();
			prev.removeClass('reset');

			current.toggleClass('active reset');				
			current = current.next().length > 0 ? current.next() : li.first();

			current.addClass('active').children().hide();

			options.callback(current.children()[0]);
		}
	};
	$.fn.gmslider.transitions = {};		
}(jQuery));