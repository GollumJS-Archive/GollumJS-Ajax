GollumJS.NS(GollumJS, function() {

	/**
	 * Simple Ajax class for GollumJS
	 * inspired by https://github.com/MauriceButler/simple-ajax
	 */
	this.Ajax = new GollumJS.Class({
		
		/**
		 * Execute
		 * 
		 * {
		 * 	    url: 'url to request',
		 * 		method: 'method to request with',
		 * 		cors: 'is CORS request (only needed for IE)',
		 * 		cache: 'set to false to explicitly break cache',
		 * 		data: 'JSON data to be sent with request',
		 * 		dataType: 'type of expected response',
		 * 		contentType: 'if JSON will try to parse response data',
		 * 		requestedWith: 'defaults to XMLHttpRequest',
		 * 		auth: 'used to set the Authorization header',
		 * 		headers: 'custom headers object'
		 * }
		 *
		 * @param {} settings
		 */
		request: function (settings) {
			return new GollumJS.Promise (function(resolve, reject) {
				if(typeof settings === 'string'){
					settings = {
						url: settings
					};
				}

				if(typeof settings !== 'object'){
					settings = {};
				}

				settings = GollumJS.Utils.extends({
					method: 'get'
				}, settings);

				var request = new XMLHttpRequest();

				if(settings.cors){
					if ('withCredentials' in ajax.request) {
						request.withCredentials = !!settings.withCredentials;
					} else if (typeof XDomainRequest !== 'undefined') {
				// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
				ajax.request = new XDomainRequest();
				} else {
				// Otherwise, CORS is not supported by the browser.
				ajax.emit('error', new Error('Cors is not supported by this browser'));
				}
				}

			});
		}
	});

});