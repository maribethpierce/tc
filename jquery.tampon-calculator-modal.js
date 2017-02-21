(function($){

	// Define jQuery plugin

	$.fn.calculator_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "350",
			width : "500",
			title:"",
			question1: "",
      flow_choices: '',
			question2: "",
			day_choices: "",
			top: "15%",
			left: "20%",
		},prop);

		return this.click(function(e){
			add_block_page();
			add_popup_box();
      display_choices();
			add_styles();

			$('.calculator_modal_box').fadeIn();
		});

		 function add_styles(){
			$('.calculator_modal_box').css({
				'position':'absolute',
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'1px solid #fff',
				'box-shadow': '0px 2px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
				'background': '#f2f2f2',
				'z-index':'50',
			});
			$('.calculator_modal_close').css({
				'position':'relative',
				'top':'-15px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
        'color':'#C19451',
        'font-size':'2rem',
			});
      /*Block page overlay*/
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();
			$('.calculator_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'10'
			});
			$('.calculator_inner_modal_box').css({
				'background-color':'#fff',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin':'15px',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px'
			});
		}

		 function add_block_page() {
			var block_page = $('<div class="calculator_block_page"></div>');

			$(block_page).appendTo('body');
		}

		 function add_popup_box() {
			 var pop_up = $('<div class="calculator_modal_box"><a href="#" class="calculator_modal_close"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a><div class="calculator_inner_modal_box"><h2>' + options.title + '</h2><p>' + options.question1 + '</p><ul class="flow"></ul><p>' + options.question2 + '</p><ul class="days"></ul><p>Here should be the submit button</p></div></div>');
			 $(pop_up).appendTo('.calculator_block_page');
			 $('.calculator_modal_close').click(function(){
          $(this).parent().fadeOut().remove();
          $('.calculator_block_page').fadeOut().remove();
			 });

		}
    function display_choices() {
			$(this).children("li").remove();
      $(options.flow_choices).appendTo('.calculator_block_page ul.flow');
			$(options.day_choices).appendTo('.calculator_block_page ul.days');
    }

		return this;
	};

})(jQuery);
