(function($) {
	$.fn.accordion = function(settings) {
		settings = jQuery.extend({
			first		: true,
			open		: 1,
			animation	: true,
			speed		: 200,
			params		: {
				height	: "toggle"
			},
			action		: "click"
		}, settings);

		var fchild = $(this).contents();
		if(settings.first == true) {
			fchild.not(":eq(" + settings.open + ")").contents().next().hide();
			fchild.contents().next().not(":hidden").parent().addClass("open");
		} else {
			fchild.contents().next().hide();
		}

		fchild.find(":first").bind(settings.action, function() {
			var _this = $(this).next();
			var p = $(this).parent();
			if(_this.get(0)) {
				if(_this.is(":hidden")) {
					p.addClass("open");
				} else {
					p.removeClass("open");
				}
				sh(p.parent().find(_this.get(0).tagName + ":visible"));
				sh(_this);
				return false;
			}
		});
		function sh(_this) {
			if(settings.animation == true) {
				_this.animate(settings.params, settings.speed);
			} else {
				_this.toggle();
			}
		}
	}
})(jQuery);
$(document).ready(function() {
	$('#accordion').accordion();
});