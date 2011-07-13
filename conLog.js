(function($) {
	$.conLog = function(value, type) {
		if ( typeof(console) !== 'undefined' && console != null ) {
			var type = type || 'log';
			if ( $.browser.msie && type == 'trace') {
   				type = 'log';
	  		}
			switch(type) {
				case 'object':
					console.dir(value);
					break;
				case 'error':
					console.error(value);
					break;
				case 'warn':
					console.warn(value);
					break;
				case 'info':
					console.info(value);
					break;
				case 'trace':
					console.trace(value);
					break;
				case 'log':
					console.log(value);
					break;
				default:
					console.log(value);
			}     
		}
		return false;                     
	};
})(jQuery);
